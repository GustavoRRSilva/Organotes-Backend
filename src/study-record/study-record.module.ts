import { Module } from '@nestjs/common';
import { StudyRecordController } from './study-record.controller';
import { StudyRecordService } from './study-record.service';

@Module({
  controllers: [StudyRecordController],
  providers: [StudyRecordService]
})
export class StudyRecordModule {}
