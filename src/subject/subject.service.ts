import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubjectDto } from './Dto/CreateSubjectDto';
import { NotFoundError } from 'rxjs';
import { UpdateSubjectDto } from './Dto/UpdateSubjectDto';

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

  async deleteById(id: string) {
    try {
      await this.prismaService.subject.delete({
        where: {
          id: id,
        },
      });
      return { status: 200, message: 'Deletado com sucesso' };
    } catch (e) {
      throw new NotFoundException('Not found subject');
    }
  }

  async updateSubject(id: string, data: UpdateSubjectDto) {
    const subject = await this.prismaService.subject.findUnique({
      where: {
        id: id,
      },
    });
    if (!subject) {
      throw new NotFoundException('There is not subject with this id');
    }

    try {
      const updatedSubject = await this.prismaService.subject.update({
        where: {
          id: id,
        },
        data,
      });

      return {
        updatedSubject,
      };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
