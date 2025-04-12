import { createZodDto } from 'nestjs-zod';
import { CredentialSchema } from './CreateSubjectDto';

export const UpdateCrentialSchema = CredentialSchema.partial();

export class UpdateSubjectDto extends createZodDto(UpdateCrentialSchema) {}
