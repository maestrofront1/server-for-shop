import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import type {CreateProductDto} from "./dto/create-product.dto";
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.productService.create(dto);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.productService.update(+id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }
}
