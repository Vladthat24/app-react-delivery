import React, { useState } from 'react'
import { Order } from '../../../../../Domain/entities/Order';
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/order/GetByStatusOrder';


const AdminOrderListComponent= ()=>{

    const[orders,setOrders]=useState<Order[]>([]);

    const getOrders= async(status:string)=>{
        const result= await GetByStatusOrderUseCase(status);
        setOrders(result);
        console.log("ORDENES: "+ JSON.stringify(result,null,3));
    }

    return {
        orders,
        getOrders,
    }
}

export default AdminOrderListComponent;
