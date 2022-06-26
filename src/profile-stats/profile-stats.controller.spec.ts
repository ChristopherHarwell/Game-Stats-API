import { Test, TestingModule } from '@nestjs/testing';
import { ProfileStatsController } from './profile-stats.controller';

describe('ProfileStatsController', () => {
  let controller: ProfileStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileStatsController],
    }).compile();

    controller = module.get<ProfileStatsController>(ProfileStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
