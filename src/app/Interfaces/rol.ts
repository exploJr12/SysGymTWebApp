export interface Rol {
  id_Rol: number;
  name: string;
  top_Aux: number;
  usuario: any;
}

export interface CreateRol extends Omit<Rol, 'id_Rol'> {}

export interface GetRol {
  status: number;
  message: string;
  data: string;
}

export interface RolDetails extends Rol {
  id_Rol: number;
}

export interface GetRoles extends Omit<GetRol, 'data'> {
  data: Array<Rol>;
}
