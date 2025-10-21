import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsOptional()
    @IsString()
    imageUrl?: string;

    @IsNumber()
    @Min(0)
    alcoholPercentage: number;

    @IsNumber()
    @Min(0)
    volumeMl: number;

    @IsNumber()
    subcategoryId: number;
}
