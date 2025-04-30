import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityCreateDto, UpdateActivityDto } from './Dto/activity.dto';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}
  @Get('/:subjectId')
  async getAllActivitysBySubjectId() {
    return await this.activityService.getAll();
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
    @Body() data: UpdateActivityDto,
    @Param('activityId') activityId: string,
  ) {
    return await this.activityService.updateActivity(data, activityId);
  }
}
