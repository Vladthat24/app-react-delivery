import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ImagePickerResult } from "expo-image-picker";
import { AxiosError } from "axios";
import mime from "mime";
import {
  ApiDelivery,
  ApiDeliveryFormData,
} from "../sources/remote/api/ApiDelivery";

export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<Category[]> {
    try {
      const response = await ApiDelivery.get<Category[]>("/categories/list");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;

      console.log("ERROR", JSON.stringify(e.response?.data));

      return Promise.resolve([]);
    }
  }
  async create(
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      const fileDetails = {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      };
      console.log("valores de Categories:", category);

      data.append("image", fileDetails);
      data.append("category", JSON.stringify(category));
      console.log("data para enviar: ", data);

      const response = await ApiDeliveryFormData.post<ResponseApiDelivery>(
        "/categories/create",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  async update(category: Category): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        "/categories/update",category
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  async updateWithImage(
    category: Category,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      const fileDetails = {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      };
      console.log("valores de Categories:", category);

      data.append("image", fileDetails);
      data.append("category", JSON.stringify(category));
      console.log("data para enviar: ", data);

      const response = await ApiDeliveryFormData.put<ResponseApiDelivery>(
        "/categories/updateWithImage",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }


  async remove(id: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.delete<ResponseApiDelivery>(
        `/categories/delete/${id}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
