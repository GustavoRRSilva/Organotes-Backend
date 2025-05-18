import { Injectable } from '@nestjs/common';
import { CreateActivityCalendarDto } from './dto/create-activity-calendar.dto';
import { UpdateActivityCalendarDto } from './dto/update-activity-calendar.dto';
import { ActivityCreateDto } from 'src/activity/Dto/activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityCalendarService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateActivityCalendarDto, id: string) {
    return this.prisma.activityCalendar.create({
      data: {
        activityName: dto.activityName,
        description: dto.description,
        activityCalendarId: id,
        time: dto.time,
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
