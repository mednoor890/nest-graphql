import { Query, Resolver } from '@nestjs/graphql';
import { CatType } from './dto/create-cat.dto';
import { CatsService } from './cats.service'
@Resolver(of => CatType)
export class CatsResolver {
constructor(private catsService: CatsService)
{}
/*@Query(() => String)
async hello() {
  return 'hello';
}*/
@Query(()=> [CatType])
async cats():Promise<CatType[]> {
return await this.catsService.findAll();
}
/*@Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }*/
   }