import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';

import { StudyRecordModule } from './study-record/study-record.module';
import { StudyRecordController } from './study-record/study-record.controller';
import { DatabaseModule } from './database/database.module';
import { ActivityModule } from './activity/activity.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [AuthModule, DatabaseModule, StudyRecordModule, SubjectModule, ActivityModule, NoteModule],
  controllers: [],
  providers: [DatabaseModule],
})
export class AppModule {}
