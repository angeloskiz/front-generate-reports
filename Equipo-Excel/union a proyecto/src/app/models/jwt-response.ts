export interface JwtResponseI {
  datauser:{
    id:number;
    name: string;
    email:string;
    accessToken: string;
    expiresIn: string;
}
}
