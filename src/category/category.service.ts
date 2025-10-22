import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateCategoryDto) {
        return this.prisma.category.create({ data });
    }

    findAll() {
        return this.prisma.category.findMany({
            include: { subcategories: true },
        });
    }

    findOne(id: number) {
        return this.prisma.category.findUnique({
            where: { id },
            include: { subcategories: true },
        });
    }

    update(id: number, data: Partial<CreateCategoryDto>) {
        return this.prisma.category.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.category.delete({ where: { id } });
    }
}
