import { PartialType } from '@nestjs/mapped-types';
import { CreateVendecarroDto } from './create-vendecarro.dto';

export class UpdateVendecarroDto extends PartialType(CreateVendecarroDto) {}
