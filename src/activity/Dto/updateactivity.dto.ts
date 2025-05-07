import { createZodDto, ZodValidationPipe } from 'nestjs-zod';
import { ActivitySchema } from './activity.dto';

export const UpdateActivity = ActivitySchema.partial();

export class ActivityUpdateDto extends createZodDto(UpdateActivity) {}

export const UpdateValidation = new ZodValidationPipe(UpdateActivity);
