import { Injectable } from '@nestjs/common';
import { SaveMatchDto } from './saveMatch.dto';
import { MatchRepository } from './match.repository';
import { Match } from './match.entity';

@Injectable()
export class MatchesService {
  constructor(private readonly matchRepository: MatchRepository) {}

  async saveMatch(saveMatchDto: SaveMatchDto): Promise<Match> {
    return await this.matchRepository.saveMatch(saveMatchDto);
  }
}
