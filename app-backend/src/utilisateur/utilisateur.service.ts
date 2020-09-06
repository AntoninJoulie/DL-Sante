import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Utilisateur } from './interfaces/utilisateur.interface';
import { CreateUtilisateurDTO } from './dto/create-utilisateur.dto';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectModel('Utilisateur')
    private readonly utilisateurModel: Model<Utilisateur>,
  ) {}

  // fetch all utilisateurs
  async getAllUtilisateur(): Promise<Utilisateur[]> {
    const utilisateurs = await this.utilisateurModel.find().exec();
    return utilisateurs;
  }

  // Get a single utilisateur
  async getUtilisateur(utilisateurID): Promise<Utilisateur> {
    const utilisateur = await this.utilisateurModel
      .findById(utilisateurID)
      .exec();
    return utilisateur;
  }

  // post a single utilisateur
  async addUtilisateur(
    createUtilisateurDTO: CreateUtilisateurDTO,
  ): Promise<Utilisateur> {
    const newUtilisateur = await this.utilisateurModel(createUtilisateurDTO);
    return newUtilisateur.save();
  }

  // Edit utilisateur details
  async updateUtilisateur(
    utilisateurID,
    createUtilisateurDTO: CreateUtilisateurDTO,
  ): Promise<Utilisateur> {
    const updatedUtilisateur = await this.utilisateurModel.findByIdAndUpdate(
      utilisateurID,
      createUtilisateurDTO,
      { new: true },
    );
    return updatedUtilisateur;
  }

  // Delete a utilisateur
  async deleteUtilisateur(utilisateurID): Promise<any> {
    const deletedUtilisateur = await this.utilisateurModel.findByIdAndRemove(
      utilisateurID,
    );
    return deletedUtilisateur;
  }
}
