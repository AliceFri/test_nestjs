import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import { CatsService } from './cats.services';

@Controller('cats')
export class CatsController {
    // @Get()
    // async findAll(): Promise<string> {
    // return 'This action returns all cats';
    // }    
    constructor(private catsService: CatsService) {}
  
  
    @Get()
    findAll(): string {
        return '2 This action returns all cats';
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
