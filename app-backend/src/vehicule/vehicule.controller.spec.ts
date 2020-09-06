import { Test, TestingModule } from '@nestjs/testing';
import { VehiculeController } from './vehicule.controller';

describe('Vehicule Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [VehiculeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: VehiculeController = module.get<VehiculeController>(
      VehiculeController,
    );
    expect(controller).toBeDefined();
  });
});
