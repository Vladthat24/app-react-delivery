import React, { useContext, useState } from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { GetByStatusOrderUseCase } from "../../../../../Domain/useCases/order/GetByStatusOrder";
import { OrderContext } from "../../../../context/OrderContext";

const AdminOrderListComponent = () => {

  const {
    ordersPayed,
    ordersDispatched,
    ordersOnTheWay,
    ordersDelivery,
    getOrderByStatus,
  } = useContext(OrderContext);

  const getOrders = async (status: string) => {
    const result = await getOrderByStatus(status);
    console.log("ORDENES: " + JSON.stringify(result, null, 3));
  };

  return {
    ordersPayed,
    ordersDispatched,
    ordersOnTheWay,
    ordersDelivery,
    getOrders,
  };
};

export default AdminOrderListComponent;
