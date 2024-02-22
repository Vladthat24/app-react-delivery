import { AddressRepositoryImpl } from "../../../Data/repositories/AddressRepository";

const {getByUser}= new AddressRepositoryImpl();

export const GetByUserAddressUserUseCase=async(idUser:string)=>{
    return await getByUser(idUser);
}