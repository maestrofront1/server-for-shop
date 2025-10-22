import {
    Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe,
} from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';

@Controller('subcategories')
export class SubcategoryController {
    constructor(private readonly subcategoryService: SubcategoryService) {}

    @Post()
    create(@Body() dto: CreateSubcategoryDto) {
        return this.subcategoryService.create(dto);
    }

    @Get()
    findAll() {
        return this.subcategoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.subcategoryService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<CreateSubcategoryDto>) {
        return this.subcategoryService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.subcategoryService.remove(id);
    }
}
