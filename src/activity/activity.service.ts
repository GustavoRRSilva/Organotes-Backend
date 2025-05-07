import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActivityCreateDto } from './Dto/activity.dto';
import { ActivityUpdateDto } from './Dto/updateactivity.dto';

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
    const searchActivityExistent =
      await this.prismaService.pendingActivity.findFirst({
        where: {
          name: data.name,
          subjectId: subjectId,
        },
      });

    if (searchActivityExistent) {
      throw new BadRequestException('Já existe uma atividade com esse nome ');
    }

    try {
      const newActivity = await this.prismaService.pendingActivity.create({
        data: {
          description: data.description,
          name: data.name,
          percentageConclud: data.percentageConclud,
          subjectId: subjectId,
          created_at: new Date(),
        },
      });

      return { newActivity };
    } catch (e) {
      throw new e();
    }
  }

  async deleteActivity(activityId: string) {
    const activityExistent = await this.prismaService.pendingActivity.findFirst(
      {
        where: {
          id: activityId,
        },
      },
    );

    if (!activityExistent) {
      throw new NotFoundException(
        'Nenhuma atividade foi encontrada com esse id',
      );
    }

    try {
      await this.prismaService.pendingActivity.delete({
        where: {
          id: activityId,
        },
      });
      return { status: 200, message: 'Delete with sucessfull' };
    } catch (e) {
      throw new e();
    }
  }

  async updateActivity(data: ActivityUpdateDto, activityId: string) {
    const activityExistent = await this.prismaService.pendingActivity.findFirst(
      {
        where: {
          id: activityId,
        },
      },
    );
    if (!activityExistent) {
      throw new NotFoundException('Not found activity with this name');
    }

    try {
      const updatedSubject = await this.prismaService.pendingActivity.update({
        where: {
          id: activityId,
        },
        data,
      });
      return { status: 200, message: { updatedSubject } };
    } catch (e) {
      throw new e();
    }
  }
}
