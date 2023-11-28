import { api } from "../providers/Api";

export const ipClient = async () => {
  const {data} = await api.PASARELA.getIp();
  return data.ip;
}

export const getSessionToken = async (body: {monto:number, ip:string}) => {
  const {data} = await api.PASARELA.sessionToken(body);
  return data.content;
}