import { Test, TestingModule } from '@nestjs/testing';
import { VendecarroController } from './vendecarro.controller';
import { VendecarroService } from './vendecarro.service';

describe('VendecarroController', () => {
  let controller: VendecarroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendecarroController],
      providers: [VendecarroService],
    }).compile();

    controller = module.get<VendecarroController>(VendecarroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
