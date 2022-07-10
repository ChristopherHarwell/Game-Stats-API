import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { MatchHistoryController } from './match-history/match-history.controller';
import { Module } from '@nestjs/common';
import { ProfileSearchController } from './profile-search/profile-search.controller';
import { ProfileStatsController } from './profile-stats/profile-stats.controller';
import { ProfileStatsSegmentController } from './profile-stats-segment/profile-stats-segment.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProfileStatsController,
    ProfileStatsSegmentController,
    ProfileSearchController,
    MatchHistoryController,
    HttpModule,
  ],
  providers: [AppService],
})
export class AppModule {}
