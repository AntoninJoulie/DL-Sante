import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { VehiculeModule } from './vehicule/vehicule.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@dlsante.omala.mongodb.net/dlsante?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    UtilisateurModule,
    VehiculeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
