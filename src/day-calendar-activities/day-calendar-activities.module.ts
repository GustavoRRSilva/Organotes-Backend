import { Module } from '@nestjs/common';

import { DayCalendarActivitiesController } from './day-calendar-activities.controller';
import { DayCalendarActivitiesService } from './day-calendar-activities.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DayCalendarActivitiesController],
  providers: [DayCalendarActivitiesService],
})
export class DayCalendarActivitiesModule {}
