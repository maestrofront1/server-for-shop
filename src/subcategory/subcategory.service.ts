import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';

@Injectable()
export class SubcategoryService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateSubcategoryDto) {
        return this.prisma.subcategory.create({ data });
    }

    findAll() {
        return this.prisma.subcategory.findMany({
            include: { category: true, products: true },
        });
    }

    findOne(id: number) {
        return this.prisma.subcategory.findUnique({
            where: { id },
            include: { category: true, products: true },
        });
    }

    update(id: number, data: Partial<CreateSubcategoryDto>) {
        return this.prisma.subcategory.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.subcategory.delete({ where: { id } });
    }
}
