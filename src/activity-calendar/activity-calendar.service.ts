import { Injectable } from '@nestjs/common';
import { CreateActivityCalendarDto } from './dto/create-activity-calendar.dto';
import { UpdateActivityCalendarDto } from './dto/update-activity-calendar.dto';
import { ActivityCreateDto } from 'src/activity/Dto/activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityCalendarService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateActivityCalendarDto, userId: string) {
    let dayRecord = await this.prisma.dayCalendarActivities.findFirst({
      where: {
        userId: userId,
        day: data.day,
        month: data.month,
        year: data.year,
      },
    });

    if (!dayRecord) {
      dayRecord = await this.prisma.dayCalendarActivities.create({
        data: {
          userId: userId,
          day: data.day,
          month: data.month,
          year: data.year,
        },
      });
    }
    return this.prisma.activityCalendar.create({
      data: {
        activityName: data.activityName,
        description: data.description,
        activityCalendarId: dayRecord.id,
        time: data.time,
      },
    });
  }

  findAll() {
    return this.prisma.activityCalendar.findMany({
      include: {
        dayCalendarActivity: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.activityCalendar.findUnique({
      where: { id },
      include: {
        dayCalendarActivity: true,
      },
    });
  }

  update(id: string, dto: UpdateActivityCalendarDto) {
    return this.prisma.activityCalendar.update({
      where: { id },
      data: {
        ...(dto.activityName && { activityName: dto.activityName }),
        ...(dto.description && { description: dto.description }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.activityCalendar.delete({ where: { id } });
  }
}
