import { Body, Controller, Post } from '@nestjs/common';
import { SignIn } from './Dto/SignIn.dto';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/SignUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signUp')
  async signUp(@Body() body: SignUpDto) {
    return await this.authService.signUp(body);
  }

  @Post('signIn')
  async signIn(@Body() body: SignIn) {
    return await this.authService.signIn(body);
  }
}
