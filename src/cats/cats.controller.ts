import { Controller, Post, Body, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: any) {
    this.catsService.create(cat);
  }
  @Get()
  async findAll() {
    return this.catsService.findAll();
  }
}