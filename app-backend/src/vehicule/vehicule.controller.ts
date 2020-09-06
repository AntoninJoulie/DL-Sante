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
import { VehiculeService } from './vehicule.service';
import { CreateVehiculeDTO } from './dto/create-vehicule.dto';

@Controller('vehicule')
export class VehiculeController {
  constructor(private VehiculeService: VehiculeService) {}

  // Retrieve vehicules list
  @Get('vehicules')
  async getAllVehicule(@Res() res) {
    const vehicules = await this.VehiculeService.getAllVehicule();
    return res.status(HttpStatus.OK).json(vehicules);
  }

  // Fetch a particular vehicule using ID
  @Get('vehicule/:vehiculeID')
  async getVehicule(@Res() res, @Param('vehiculeID') vehiculeID) {
    const vehicule = await this.VehiculeService.getVehicule(vehiculeID);
    if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
    return res.status(HttpStatus.OK).json(vehicule);
  }

  // add a vehicule
  @Post('/create')
  async addVehicule(@Res() res, @Body() createVehiculeDTO: CreateVehiculeDTO) {
    const vehicule = await this.VehiculeService.addVehicule(createVehiculeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Vehicule has been created successfully',
      vehicule,
    });
  }

  // Update a vehicule's details
  @Put('/update')
  async updateVehicule(
    @Res() res,
    @Query('vehiculeID') vehiculeID,
    @Body() createVehiculeDTO: CreateVehiculeDTO,
  ) {
    const vehicule = await this.VehiculeService.updateVehicule(
      vehiculeID,
      createVehiculeDTO,
    );
    if (!vehicule) throw new NotFoundException('Vehicule does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Vehicule has been successfully updated',
      vehicule,
    });
  }

  // Delete a vehicule
  @Delete('/delete')
  async deleteVehicule(@Res() res, @Query('vehiculeID') vehiculeID) {
    const vehicule = await this.VehiculeService.deleteVehicule(vehiculeID);
    if (!vehicule) throw new NotFoundException('Vehicule does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Vehicule has been deleted',
      vehicule,
    });
  }
}
