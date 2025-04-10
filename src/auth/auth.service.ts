import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignIn } from './Dto/SignIn.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './Dto/SignUp.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  async signUp(data: SignUpDto) {
    const userAlreadyExist = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExist) {
      throw new UnauthorizedException('User already exist');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      cellphoneNumber: user.cellphoneNumber,
      receiveNotify: user.receiveNotify,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }

  async signIn(data: SignIn) {
    const accountUser = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!accountUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      accountUser.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const acessToken = await this.jwtService.signAsync({
      id: accountUser.id,
      name: accountUser.name,
      email: accountUser.email,
    });
    console.log('Access Token:', acessToken); // <-- isso deve aparecer no terminal

    return { acessToken };
  }
}
