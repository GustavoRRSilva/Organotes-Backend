import { createZodDto, ZodValidationPipe } from 'nestjs-zod';
import { z } from 'zod';

const ActivitySchema = z.object({
  subjectId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  percentageConclud: z.number().max(100),
});

export class ActivityCreateDto extends createZodDto(ActivitySchema) {}

export const UpdateActivity = ActivitySchema.partial();

export class UpdateActivityDto extends createZodDto(UpdateActivity) {}

export const UpdateValidation = new ZodValidationPipe(UpdateActivity);
