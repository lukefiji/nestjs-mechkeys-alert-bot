import { Repository, EntityRepository } from 'typeorm';
import { Match } from './match.entity';

@EntityRepository(Match)
export class EntityRepositry extends Repository<Match> {}
