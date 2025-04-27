import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';
import { StudyControllerController } from './study-controller/study-controller.controller';
import { StudyRecordModule } from './study-record/study-record.module';

@Module({
  imports: [AuthModule, SubjectModule, StudyRecordModule],
  controllers: [SubjectController, StudyControllerController],
  providers: [PrismaService, SubjectService],
})
export class AppModule {}
