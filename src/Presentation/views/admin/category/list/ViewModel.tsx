import React, { useContext, useState } from "react";
import { Category } from "../../../../../Domain/entities/Category";
import { GetAllCategoryUseCase } from "../../../../../Domain/useCases/category/GetAllCategory";
import { DeleteCategoryUseCase } from "../../../../../Domain/useCases/category/DeleteCategory";
import { CategoryContext } from "../../../../context/CategoryContext";

const AdminCategoryListViewModal = () => {
  const {categories,getCategories,remove}=useContext(CategoryContext);
  const [responseMessage, setResponseMessage] = useState('');

  const deleteCategories=async(idCategory:string)=>{
    const result=await remove(idCategory);
    setResponseMessage(result.message)
  }

  return {
    categories,
    deleteCategories,
    responseMessage,
    getCategories,
  };
};

export default AdminCategoryListViewModal;