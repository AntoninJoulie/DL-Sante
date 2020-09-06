import { Test, TestingModule } from '@nestjs/testing';
import { UtilisateurController } from './utilisateur.controller';

describe('Utilisateur Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UtilisateurController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UtilisateurController = module.get<UtilisateurController>(
      UtilisateurController,
    );
    expect(controller).toBeDefined();
  });
});