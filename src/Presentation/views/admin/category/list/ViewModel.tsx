import React, { useState } from "react";
import { Category } from "../../../../../Domain/entities/Category";
import { GetAllCategoryUseCase } from "../../../../../Domain/useCases/category/GetAllCategory";
import { DeleteCategoryUseCase } from "../../../../../Domain/useCases/category/DeleteCategory";

const AdminCategoryListViewModal = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [responseMessage, setResponseMessage] = useState('');

  const getCategories = async () => {
    const result = await GetAllCategoryUseCase();
    console.log("Categories:" ,result);
    
    setCategories(result);
  };

  const deleteCategories=async(idCategory:string)=>{
    const result=await DeleteCategoryUseCase(idCategory);
    setResponseMessage(result.message)
    if(result.success){
      getCategories();
    }
  }

  return {
    categories,
    getCategories,
    deleteCategories,
    responseMessage,
  };
};

export default AdminCategoryListViewModal;