import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostStudyRecordDto } from './Dto/study-record.dto';

@Injectable()
export class StudyRecordService {
  constructor(private prismaService: PrismaService) {}

  async getAllRecords(subjectId: string) {
    const infos = await this.prismaService.studyRecord.findMany({
      where: {
        subjectId: subjectId,
      },
    });

    if (infos.length > 0) {
      return infos;
    } else {
      throw new NotFoundException('Not found data');
    }
  }

  async PostRecord(record: PostStudyRecordDto, subjectId: string) {
    try {
      const createStudyRecord = await this.prismaService.studyRecord.create({
        data: {
          dayOfWeek: record.dayOfWeek,
          minutesStudied: record.minutesStudied,
          created_at: new Date(),
          subjectId: record.subjectId,
        },
      });
      return { createStudyRecord };
    } catch (e) {
      throw new e();
    }
  }
}
