import {
  createZodDto,
  createZodValidationPipe,
  ZodValidationPipe,
} from 'nestjs-zod';
import { CredentialSchema } from './CreateSubjectDto';

export const UpdateCrentialSchema = CredentialSchema.partial();

export class UpdateSubjectDto extends createZodDto(UpdateCrentialSchema) {}

export const UpdateValidation = new ZodValidationPipe(UpdateCrentialSchema);
