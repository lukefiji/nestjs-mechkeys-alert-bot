import { Controller } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  async getMatchesByUuid(): Promise<Match[]> {
    return await this.matchesService.getMatchesByUuid();
  }
}
