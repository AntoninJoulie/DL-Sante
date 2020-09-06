import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicule } from './interfaces/vehicule.interface';
import { CreateVehiculeDTO } from './dto/create-vehicule.dto';

@Injectable()
export class VehiculeService {
  constructor(
    @InjectModel('Vehicule')
    private readonly vehiculeModel: Model<Vehicule>,
  ) {}

  // fetch all vehicules
  async getAllVehicule(): Promise<Vehicule[]> {
    const vehicules = await this.vehiculeModel.find().exec();
    return vehicules;
  }

  // Get a single vehicule
  async getVehicule(vehiculeID): Promise<Vehicule> {
    const vehicule = await this.vehiculeModel.findById(vehiculeID).exec();
    return vehicule;
  }

  // post a single vehicule
  async addVehicule(createVehiculeDTO: CreateVehiculeDTO): Promise<Vehicule> {
    const newVehicule = await this.vehiculeModel(createVehiculeDTO);
    return newVehicule.save();
  }

  // Edit vehicule details
  async updateVehicule(
    vehiculeID,
    createVehiculeDTO: CreateVehiculeDTO,
  ): Promise<Vehicule> {
    const updatedVehicule = await this.vehiculeModel.findByIdAndUpdate(
      vehiculeID,
      createVehiculeDTO,
      { new: true },
    );
    return updatedVehicule;
  }

  // Delete a vehicule
  async deleteVehicule(vehiculeID): Promise<any> {
    const deletedVehicule = await this.vehiculeModel.findByIdAndRemove(
      vehiculeID,
    );
    return deletedVehicule;
  }
}
