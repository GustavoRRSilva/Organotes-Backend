import { PartialType } from '@nestjs/mapped-types';
import { CreateDayCalendarActivityDto } from './create-day-calendar-activity.dto';

export class UpdateDayCalendarActivityDto extends PartialType(CreateDayCalendarActivityDto) {}
