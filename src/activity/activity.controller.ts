import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { ActivityService } from './activity.service';
import { ActivityCreateDto } from './Dto/activity.dto';
import { ActivityUpdateDto } from './Dto/updateactivity.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get('/:subjectId')
  async getAllActivitysBySubjectId(@Param('subjectId') subjectId: string) {
    return await this.activityService.getAll(subjectId);
  }
  @Get('/findOne/:id')
  async getOneActivity(@Param('id') id: string) {
    return await this.activityService.findOne(id);
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
