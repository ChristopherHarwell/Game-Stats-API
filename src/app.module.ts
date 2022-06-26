import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileStatsController } from './profile-stats/profile-stats.controller';
import { ProfileStatsSegmentController } from './profile-stats-segment/profile-stats-segment.controller';
import { ProfileSearchController } from './profile-search/profile-search.controller';
import { MatchHistoryController } from './match-history/match-history.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileStatsController, ProfileStatsSegmentController, ProfileSearchController, MatchHistoryController],
  providers: [AppService],
})
export class AppModule {}
