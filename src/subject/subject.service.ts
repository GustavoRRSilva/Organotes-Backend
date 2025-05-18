import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubjectDto } from './Dto/CreateSubjectDto';
import { UpdateSubjectDto } from './Dto/UpdateSubjectDto';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { record } from 'zod';

@Injectable()
export class SubjectService {
  constructor(private prismaService: PrismaService) {}

  async getAllUserSubject(id: string) {
    const subjects = await this.prismaService.subject.findMany({
      where: {
        id_user: id,
      },
      include: {
        pendingActivities: true,
        studyRecord: {
          orderBy: { created_at: 'desc' },
        },
      },
    });

    const formatted = subjects.map((subject) => {
      const lastStudyRecord = subject.studyRecord[0];

      const studyTimeDaysWithoutFormat = subject.studyRecord.reduce(
        (acc, item) => {
          const day = item.dayOfWeek;
          if (!acc[day]) {
            acc[day] = 0;
          }
          acc[day] += item.minutesStudied;
          return acc;
        },
        {} as Record<string, number>,
      );

      const studyTimeDays = Object.entries(studyTimeDaysWithoutFormat).map(
        ([day, value]) => ({
          label: day,
          value,
        }),
      );
      const lastStudy = lastStudyRecord
        ? format(new Date(lastStudyRecord.created_at), 'EEE dd/MM', {
            locale: ptBR,
          })
        : null;

      return {
        subject,
        lastStudy,
        studyTimeDays,
      };
    });

    return formatted;
  }

  async getById(id: string) {
    try {
      return await this.prismaService.subject.findMany({
        where: {
          id: id,
        },
        include: {
          pendingActivities: true,
          studyRecord: {
            orderBy: {
              created_at: 'desc',
            },
            take: 1,
            select: {
              created_at: true,
            },
          },
        },
      });
    } catch (e) {
      throw new e();
    }
  }

  async create(data: CreateSubjectDto, userId: string) {
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
      const deleted = await this.prismaService.subject.delete({
        where: {
          id: id,
        },
      });
      console.log(deleted);
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
