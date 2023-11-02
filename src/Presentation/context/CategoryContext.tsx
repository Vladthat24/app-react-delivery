import { useState } from "react";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Category } from "../../Domain/entities/Category";
import { ImagePickerResult } from "expo-image-picker";
import { createContext } from "react";
import { GetAllCategoryUseCase } from "../../Domain/useCases/category/GetAllCategory";
import { CreateCategoryUseCase } from "../../Domain/useCases/category/CreateCategory";
import { UpdateCategoryUseCase } from "../../Domain/useCases/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from "../../Domain/useCases/category/UpdateWithImageCategory";
import { DeleteCategoryUseCase } from "../../Domain/useCases/category/DeleteCategory";

export interface CategoryContextProps {
  categories: Category[];
  getCategories(): Promise<void>;
  create(
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery>;
  update(category: Category): Promise<ResponseApiDelivery>;
  updateWithImage(
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery>;
  remove(id: string): Promise<ResponseApiDelivery>;
}

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async (): Promise<void> => {
    const result = await GetAllCategoryUseCase();
    setCategories(result);
  };

  const create = async (
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery> => {
    const response = await CreateCategoryUseCase(category, file!);
    setCategories(categories);
    return response;
  };
  const update = async (category: Category): Promise<ResponseApiDelivery> => {
    const response = await UpdateCategoryUseCase(category);
    setCategories(categories);
    return response;
  };
  const updateWithImage = async (
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery> => {
    const response = await UpdateWithImageCategoryUseCase(category, file!);
    setCategories(categories);
    return response;
  };

  const remove = async (id: string): Promise<ResponseApiDelivery> => {
    const response = await DeleteCategoryUseCase(id);
    setCategories(categories);
    return response;
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategories,
        create,
        update,
        updateWithImage,
        remove,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
