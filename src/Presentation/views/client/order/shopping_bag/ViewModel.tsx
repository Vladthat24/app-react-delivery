import React, { useContext } from "react";
import { ShoppingBagContext } from "../../../../context/ShoppingBagContext";
import { Product } from "../../../../../Domain/entities/Product";

const ClientShoppingBagViewModel = () => {
  const { shoppingBag, saveItem, deleteItem, total } =
    useContext(ShoppingBagContext);

  const addItem = async (product: Product) => {
    product.quantity = product.quantity! + 1;
    await saveItem(product);
  };

  const subtractItem = async (product: Product) => {
    if (product.quantity! > 1) {
      product.quantity = product.quantity! - 1;
      await saveItem(product);
    }
  };

  const _deleteItem = async (product: Product) => {
    await deleteItem(product);
  };

  return {
    shoppingBag,
    total,
    addItem,
    subtractItem,
    _deleteItem
  };
};

export default ClientShoppingBagViewModel;
