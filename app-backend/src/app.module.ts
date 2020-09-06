import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { VehiculeService } from './vehicule/vehicule.service';
import { VehiculeController } from './vehicule/vehicule.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@dlsante.omala.mongodb.net/utilisateur?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    MongooseModule.forRoot(
      'mongodb+srv://root:root@dlsante.omala.mongodb.net/vehicule?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    UtilisateurModule,
    VehiculeModule,
  ],
  controllers: [AppController, VehiculeController],
  providers: [AppService, VehiculeService],
})
export class AppModule {}
