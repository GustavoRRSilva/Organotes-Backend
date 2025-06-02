import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityCalendarService } from './activity-calendar.service';
import { CreateActivityCalendarDto } from './dto/create-activity-calendar.dto';
import { UpdateActivityCalendarDto } from './dto/update-activity-calendar.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('activity-calendar')
export class ActivityCalendarController {
  constructor(
    private readonly activityCalendarService: ActivityCalendarService,
  ) {}

  @Post('')
  create(
    @Body() createActivityCalendarDto: CreateActivityCalendarDto,
    @User('id') userId: string,
  ) {
    return this.activityCalendarService.create(
      createActivityCalendarDto,
      userId,
    );
  }

  @Get()
  findAll() {
    return this.activityCalendarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityCalendarService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActivityCalendarDto: UpdateActivityCalendarDto,
  ) {
    return this.activityCalendarService.update(id, updateActivityCalendarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityCalendarService.remove(id);
  }
}
