import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepositoryu";
import { ImagePickerResult } from "expo-image-picker";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryFormData } from "../sources/remote/api/ApiDelivery";
import mime from "mime";

export class ProductRepositoryImpl implements ProductRepository {

  async getProductsByCategory(idCategory: string): Promise<Product[]> {
    try {
      const response = await ApiDelivery.get<Product[]>(`/products/findByCategory/${idCategory}`);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log('ERROR: ', JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(
    product: Product,
    files: ImagePickerResult[]
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();

      files.forEach((file) => {
        const fileDetails = {
          uri: file.uri,
          name: file.uri.split("/").pop(),
          type: mime.getType(file.uri)!,
        };
        data.append("image", fileDetails);
      });
      console.log("valores de Product:", product);

      data.append("product", JSON.stringify(product));
      console.log("data para enviar: ", data);

      const response = await ApiDeliveryFormData.post<ResponseApiDelivery>(
        "/products/create",
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

