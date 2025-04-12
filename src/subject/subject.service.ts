import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectService {
  constructor(private prismaService: PrismaService) {}

  async getAllUserSubject(id: string) {
    return this.prismaService.subject.findMany({
      where: {
        id_user: id,
      },
    });
  }

  async getById(id: string) {
    try {
      return await this.prismaService.subject.findMany({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw new e();
    }
  }
}
