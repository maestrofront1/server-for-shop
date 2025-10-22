import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '../../generated/prisma';
import type {CreateProductDto} from "./dto/create-product.dto";


@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Product[]> {
        return this.prisma.product.findMany({ include: { subcategory: true } });
    }

    async findOne(id: number): Promise<Product | null> {
        return this.prisma.product.findUnique({ where: { id } });
    }


    async create(data: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({ data });
    }


    async update(id: number, data: Partial<Product>): Promise<Product> {
        return this.prisma.product.update({ where: { id }, data });
    }

    async remove(id: number): Promise<Product> {
        return this.prisma.product.delete({ where: { id } });
    }

    async findBySubcategory(subcategoryId: number) {
        return this.prisma.product.findMany({
            where: { subcategoryId },
            include: {
                subcategory: {
                    include: { category: true },
                },
            },
        });
    }

    async findByCategory(categoryId: number) {
        return this.prisma.product.findMany({
            where: {
                subcategory: {
                    categoryId,
                },
            },
            include: {
                subcategory: {
                    include: { category: true },
                },
            },
        });
    }

}
