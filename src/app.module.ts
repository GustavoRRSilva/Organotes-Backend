import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { SubjectModule } from './subject/subject.module';

import { StudyRecordModule } from './study-record/study-record.module';

import { DatabaseModule } from './database/database.module';
import { ActivityModule } from './activity/activity.module';
import { NoteModule } from './note/note.module';

import { DayCalendarActivitiesModule } from './day-calendar-activities/day-calendar-activities.module';
import { ActivityCalendarModule } from './activity-calendar/activity-calendar.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    StudyRecordModule,
    SubjectModule,
    ActivityModule,
    NoteModule,
    DayCalendarActivitiesModule,
    DayCalendarActivitiesModule,
    ActivityCalendarModule,
  ],
  controllers: [],
  providers: [DatabaseModule],
})
export class AppModule {}
