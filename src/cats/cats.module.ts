import { Module } from '@nestjs/common'; 
import { Cat, CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService, CatsResolver],
})
export class CatsModule {}
