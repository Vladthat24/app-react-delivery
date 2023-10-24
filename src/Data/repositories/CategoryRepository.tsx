import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ImagePickerResult } from "expo-image-picker";
import { AxiosError } from "axios";
import mime from "mime";
import {
  ApiDeliveryFormData,
} from "../sources/remote/api/ApiDelivery";

export class CategoryRepositoryImpl implements CategoryRepository {
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
}
