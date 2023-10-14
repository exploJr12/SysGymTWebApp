export interface Machines {
  id_Machines: number;
  id_Usuario: number;
  machines_Name: string;
  brand: string;
  serial_Number: string;
  status: boolean;
  acquisition_Date: string;
  maintenance_Date: string;
  next_Maintenance_Date: string;
  usuario: unknown;
  top_Aux: number;
}

export interface ResponseApi<T> {
  statusCode: number;
  message: string;
  data: T;
  value: any;
}

export interface GetMachines extends ResponseApi<Array<Machines>> {}

