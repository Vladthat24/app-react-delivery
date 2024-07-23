import React, { useState,useEffect } from "react";
import { Order } from "../../../../../Domain/entities/Order";

const AdminOrderDetailViewModel = (order: Order) => {
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getTotal();
  }, [order.products]);

  const getTotal = () => {
    order.products.forEach((p) => {
      setTotal(total + p.price * p.quantity!);
    });
  };

  return {
    total,
    getTotal,
  };
};

export default AdminOrderDetailViewModel;
