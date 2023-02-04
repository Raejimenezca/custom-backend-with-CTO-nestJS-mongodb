import { IsNotEmpty, IsNumber, Length, Max, Min } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsNumber()
  @Max(9999)
  @Min(1)
  id: number;

  @IsNotEmpty()
  @Length(1, 30)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(12000000)
  @Min(100)
  price: number;

  createdAt: Date;
  units: number;
  available: boolean;
}
