import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDTO } from './dto/create-utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private utilisateurService: UtilisateurService) {}

  // Retrieve utilisateurs list
  @Get('utilisateurs')
  async getAllUtilisateur(@Res() res) {
    const utilisateurs = await this.utilisateurService.getAllUtilisateur();
    return res.status(HttpStatus.OK).json(utilisateurs);
  }

  // Fetch a particular utilisateur using ID
  @Get('utilisateur/:utilisateurID')
  async getUtilisateur(@Res() res, @Param('utilisateurID') utilisateurID) {
    const utilisateur = await this.utilisateurService.getUtilisateur(
      utilisateurID,
    );
    if (!utilisateur)
      throw new NotFoundException('Utilisateur does not exist!');
    return res.status(HttpStatus.OK).json(utilisateur);
  }

  // add a utilisateur
  @Post('/create')
  async addUtilisateur(
    @Res() res,
    @Body() createUtilisateurDTO: CreateUtilisateurDTO,
  ) {
    const utilisateur = await this.utilisateurService.addUtilisateur(
      createUtilisateurDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Utilisateur has been created successfully',
      utilisateur,
    });
  }

  // Update a utilisateur's details
  @Put('/update')
  async updateUtilisateur(
    @Res() res,
    @Query('utilisateurID') utilisateurID,
    @Body() createUtilisateurDTO: CreateUtilisateurDTO,
  ) {
    const utilisateur = await this.utilisateurService.updateUtilisateur(
      utilisateurID,
      createUtilisateurDTO,
    );
    if (!utilisateur)
      throw new NotFoundException('Utilisateur does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Utilisateur has been successfully updated',
      utilisateur,
    });
  }

  // Delete a utilisateur
  @Delete('/delete')
  async deleteUtilisateur(@Res() res, @Query('utilisateurID') utilisateurID) {
    const utilisateur = await this.utilisateurService.deleteUtilisateur(
      utilisateurID,
    );
    if (!utilisateur) throw new NotFoundException('Utilisateur does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Utilisateur has been deleted',
      utilisateur,
    });
  }
}
