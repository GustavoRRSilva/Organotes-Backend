<<<<<<< HEAD
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudyRecordService } from './study-record.service';
import { PostStudyRecordDto } from './Dto/study-record.dto';
import { User } from 'src/auth/decorators/user.decorator';
=======
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StudyRecordService } from './study-record.service';
import { PostStudyRecordDto } from './Dto/study-record.dto';
import { AuthGuard } from 'src/auth/auth.guard';
>>>>>>> dac6187fd6f1ef473ffa596672a2fdeda67dca50

@Controller('study-record')
export class StudyRecordController {
  constructor(private studyRecordService: StudyRecordService) {}
<<<<<<< HEAD
=======
  @UseGuards(AuthGuard)
>>>>>>> dac6187fd6f1ef473ffa596672a2fdeda67dca50
  @Get('/:subjectId')
  async getAllRecords(@Param('subjectId') subjectId: string) {
    return await this.studyRecordService.getAllRecords(subjectId);
  }

<<<<<<< HEAD
=======
  @UseGuards(AuthGuard)
>>>>>>> dac6187fd6f1ef473ffa596672a2fdeda67dca50
  @Post('/:subjectId')
  async postStudyRecord(
    @Body() record: PostStudyRecordDto,
    @Param('subjectId') subjectId: string,
  ) {
    return await this.studyRecordService.PostRecord(record, subjectId);
  }
}
