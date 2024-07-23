import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository";

//Importar implementacion
const {getByStatus} = new OrderRepositoryImpl();

export const GetByStatusOrderUseCase = async (status:string)=>{
    return await getByStatus(status);
}