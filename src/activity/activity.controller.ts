import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ActivityService } from './activity.service';
import { ActivityCreateDto } from './Dto/activity.dto';
import { ActivityUpdateDto } from './Dto/updateactivity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}
  @Get('/:subjectId')
  async getAllActivitysBySubjectId(@Param('subjectId') subjectId: string) {
    return await this.activityService.getAll(subjectId);
  }

  @Post('/:subjectId')
  async postActivity(
    @Body() data: ActivityCreateDto,
    @Param('subjectId') subjectId: string,
  ) {
    return await this.activityService.postActivity(data, subjectId);
  }

  @Delete('/:activityId')
  async deleteActivity(@Param('activityId') activityId: string) {
    return await this.activityService.deleteActivity(activityId);
  }

  @Put('/:activityId')
  async updateActivity(
    @Body() data: ActivityUpdateDto,
    @Param('activityId') activityId: string,
  ) {
    return await this.activityService.updateActivity(data, activityId);
  }
}
