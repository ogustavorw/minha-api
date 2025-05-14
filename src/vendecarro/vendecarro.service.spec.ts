import { Test, TestingModule } from '@nestjs/testing';
import { VendecarroService } from './vendecarro.service';

describe('VendecarroService', () => {
  let service: VendecarroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendecarroService],
    }).compile();

    service = module.get<VendecarroService>(VendecarroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
