import { Injectable } from '@nestjs/common';
import { CreateDayCalendarActivityDto } from './dto/create-day-calendar-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DayCalendarActivitiesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDayCalendarActivityDto, userId: string) {
    return await this.prisma.dayCalendarActivities.create({
      data: {
        day: data.day,
        month: data.month,
        year: data.year,
        userId: userId,
      },
    });
  }

  async findAll() {
    return await this.prisma.dayCalendarActivities.findMany({
      include: {
        user: true,
        activityCalendar: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.dayCalendarActivities.findUnique({
      where: { id },
      include: {
        user: true,
        activityCalendar: true,
      },
    });
  }

  async update(id: string, data: Partial<CreateDayCalendarActivityDto>) {
    return await this.prisma.dayCalendarActivities.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.dayCalendarActivities.delete({
      where: { id },
    });
  }
}
