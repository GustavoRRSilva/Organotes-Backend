import { Module } from '@nestjs/common';
import { StudyRecordController } from './study-record.controller';
import { StudyRecordService } from './study-record.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StudyRecordController],
  providers: [StudyRecordService],
})
export class StudyRecordModule {}
