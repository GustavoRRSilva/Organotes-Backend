import { Module } from '@nestjs/common';
import { ActivityCalendarService } from './activity-calendar.service';
import { ActivityCalendarController } from './activity-calendar.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityCalendarController],
  providers: [ActivityCalendarService],
})
export class ActivityCalendarModule {}
