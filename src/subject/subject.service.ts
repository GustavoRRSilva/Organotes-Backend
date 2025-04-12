import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubjectDto } from './Dto/CreateSubjectDto';

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

  async createNote(data: CreateSubjectDto, userId: string) {
    const subjectAlreadyExist = await this.prismaService.subject.findFirst({
      where: {
        title: data.title,
        id_user: userId,
      },
    });

    if (subjectAlreadyExist) {
      throw new BadRequestException('There is a subject with this name');
    }

    try {
      const createSubject = await this.prismaService.subject.create({
        data: {
          description: data.description || '',
          title: data.title,
          id_user: userId,
          week_day: data.dayToStudy,
        },
      });

      return { createSubject };
    } catch (e) {
      throw new e();
    }
  }
}
