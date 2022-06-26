import { Test, TestingModule } from '@nestjs/testing';
import { ProfileStatsSegmentController } from './profile-stats-segment.controller';

describe('ProfileStatsSegmentController', () => {
  let controller: ProfileStatsSegmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileStatsSegmentController],
    }).compile();

    controller = module.get<ProfileStatsSegmentController>(ProfileStatsSegmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
