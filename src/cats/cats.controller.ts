import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
    // @Get()
    // async findAll(): Promise<string> {
    // return 'This action returns all cats';
    // }    

  @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

  @Get(':id')
  findOne(@Param('id') id: string): string {
      return `This action returns a #${id} cat`;
  }

    @Post()
  async create(@Body() createCatDto: CreateCatDto) {
      return 'This action adds a new cat';
  }


}
