import { Module } from '@nestjs/common';
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';
import { SupabaseService } from './services/supabase.service';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [SupabaseService, PatientService],
})
export class AppModule {}
