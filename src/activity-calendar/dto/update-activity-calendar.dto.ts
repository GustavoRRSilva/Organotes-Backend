import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityCalendarDto } from './create-activity-calendar.dto';

export class UpdateActivityCalendarDto extends PartialType(CreateActivityCalendarDto) {}
