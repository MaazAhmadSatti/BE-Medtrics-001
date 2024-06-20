import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  supabase: any;

  constructor(){
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  getHello(): any {
    return { ok: "Welcome to supabase test playground" };
  }

  async getAllData(tableName: string): Promise<any>{
    let res = await this.supabase
      .from(tableName)
      .select('*');

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async getDataById(id: string, tableName: string): Promise<any>{
    let res = await this.supabase
      .from(tableName)
      .select('*')
      .eq('id', id);

    if(res.status !== 200){
      return { error: res.status + " " + res.statusText };
    }else{
      return { result: res.data }
    }
  }

  async insertData(data: any, tableName: string): Promise<any>{
    let res = await this.supabase
      .from(tableName)
      .insert(data);

    console.log("res", res);
    return { status: res.status + " " + res.statusText };
  }

  async updateData(data: any, id: string, tableName: string): Promise<any>{
    let res = await this.supabase
      .from(tableName)
      .update(data)
      .eq('id', id);

    return { status: res.status + " " + res.statusText };
  }

  async deleteData(id: string, tableName: string): Promise<any>{
    let res = await this.supabase
      .from(tableName)
      .delete()
      .eq('id', id);

    return { status: res.status + " " + res.statusText };
  }
}
