import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActivityCreateDto } from './Dto/activity.dto';

@Injectable()
export class ActivityService {
  constructor(private prismaService: PrismaService) {}

  async getAll(subjectId: string) {
    return this.prismaService.pendingActivity.findMany({
      where: {
        subjectId: subjectId,
      },
    });
  }

  async postActivity(data: ActivityCreateDto, subjectId: string) {
    const searchActivityExistent = this.prismaService.pendingActivity.findFirst(
      {
        where: {
          name: data.name,
        },
      },
    );
  }
}
