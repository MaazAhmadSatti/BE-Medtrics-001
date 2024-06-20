import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class PatientService {
  tableName = 'patients';

  constructor(
    private supabaseService: SupabaseService
  ) {}

  async getAllData(): Promise<any> {
    return await this.supabaseService.getAllData(this.tableName);
  }

  async getDataById(id: string): Promise<any> {
    return await this.supabaseService.getDataById(id, this.tableName);
  }

  async insertData(data: any): Promise<any> {
    return await this.supabaseService.insertData(data, this.tableName);
  }

  async updateData(id: string, data: any): Promise<any> {
    return await this.supabaseService.updateData(data, id, this.tableName);
  }

  async deleteData(id: string): Promise<any> {
    return await this.supabaseService.deleteData(id, this.tableName);
  }

}
