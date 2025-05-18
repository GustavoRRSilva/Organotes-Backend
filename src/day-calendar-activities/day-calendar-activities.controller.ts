import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateDayCalendarActivityDto } from './dto/create-day-calendar-activity.dto';
import { UpdateDayCalendarActivityDto } from './dto/update-day-calendar-activity.dto';
import { DayCalendarActivitiesService } from './day-calendar-activities.service';

@Controller('day-calendar-activities')
export class DayCalendarActivitiesController {
  constructor(
    private readonly dayCalendarActivitiesService: DayCalendarActivitiesService,
  ) {}

  @Post(':userId')
  create(
    @Body() createDayCalendarActivityDto: CreateDayCalendarActivityDto,
    @Param('userId') userId: string,
  ) {
    return this.dayCalendarActivitiesService.create(
      createDayCalendarActivityDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.dayCalendarActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dayCalendarActivitiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDayCalendarActivityDto: UpdateDayCalendarActivityDto,
  ) {
    return this.dayCalendarActivitiesService.update(
      id,
      updateDayCalendarActivityDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dayCalendarActivitiesService.delete(id);
  }
}
