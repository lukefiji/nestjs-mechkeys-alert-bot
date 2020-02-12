import { Repository, EntityRepository } from 'typeorm';
import { Match } from './match.entity';
import { SaveMatchDto } from './saveMatch.dto';

@EntityRepository(Match)
export class MatchRepository extends Repository<Match> {
  async saveMatch(saveMatchDto: SaveMatchDto): Promise<Match> {
    const { keyword, user } = saveMatchDto;

    const match = new Match();
    match.keyword = keyword;
    match.user = user;
    match.createdAt = new Date();

    return match.save();
  }
}
