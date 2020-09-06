import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VehiculeSchema } from './schemas/vehicule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vehicule', schema: VehiculeSchema }]),
  ],
  providers: [VehiculeService],
  controllers: [VehiculeController],
})
export class VehiculeModule {}
