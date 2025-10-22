import { IsString, IsNumber } from 'class-validator';

export class CreateSubcategoryDto {
    @IsString()
    name: string;

    @IsNumber()
    categoryId: number;
}
