export interface IUsuarioRegistro {
  Apepat: string;
  Apemat: string;
  Nombres: string;
  Password: string;
  Alias: string;
  Sexo: string;
  Email: string;
}

export interface IUsuarioLogin {
  email: string;
  password: string;
}

export interface IUsuarioStorage {
  correo: string;
  nombres: string;
}

export interface IUsuario {
  key?: string;
  alias: string;
  apeMaterno: string;
  apePaterno: string;
  correo: string;
  fechaNac?: string;
  nombres: string;
  password: string;
  sexo: string;
  telefono?: string;
  sede?: string;
  carrera?: string;
}