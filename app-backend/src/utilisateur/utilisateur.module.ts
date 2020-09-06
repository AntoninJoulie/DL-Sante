import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurSchema } from './schemas/utilisateur.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Utilisateur', schema: UtilisateurSchema },
    ]),
  ],
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
})
export class UtilisateurModule {}
