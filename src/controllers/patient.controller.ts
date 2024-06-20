import { Controller, Get, Put, Patch, Post, Delete, Body } from '@nestjs/common';
import { PatientService } from '../services/patient.service';
import { AddPatientDto } from '../dtos/index';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNoContentResponse,
  ApiAcceptedResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Patients')
@Controller('Patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('all')
  getAllData(): Promise<any> {
    return this.patientService.getAllData();
  }

  @Get('id')
  getDataById(id: string): Promise<any> {
    return this.patientService.getDataById(id);
  }

  @Post('create')
  insertData(@Body() dto: AddPatientDto): Promise<any> {
    return this.patientService.insertData(dto);
  }

  @Patch('update')
  updateData(dto: AddPatientDto, id: string): Promise<any> {
    return this.patientService.updateData(id, dto);
  }

  @Delete('delete')
  deleteData(id: string): Promise<any> {
    return this.patientService.deleteData(id);
  }
}
