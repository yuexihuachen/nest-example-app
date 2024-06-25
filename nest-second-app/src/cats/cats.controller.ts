import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Get('update/:id')
  async update(@Query() query: any, @Param('id') id: string) {
    return this.catsService.update(id, query);
  }
}
