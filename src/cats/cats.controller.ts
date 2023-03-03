import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
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
        // return `This action returns a #${id} cat`;
        const a: any = 1;
        console.log(a.ddd.dd)
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    @Post()
  async create(@Body() createCatDto: CreateCatDto) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }


}
