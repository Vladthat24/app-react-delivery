import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import {
  ApiDelivery,
  ApiDeliveryFormData,
} from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>(
        "/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("Response: ", JSON.stringify(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>(
        "/users/create",
        user
      );
      console.log("Response: ", JSON.stringify(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async registerWithImage(
    user: User,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiDelivery> {
    try {
      /*       let data = new FormData();
      data.append('image', {
        //@ts-ignore
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!
      } as any); */

      let data = new FormData();
      const fileDetails = {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      };

      data.append("image", JSON.stringify(fileDetails));

      data.append("user", JSON.stringify(user));

      const response = await ApiDeliveryFormData.post<ResponseApiDelivery>(
        "/users/createWithImage",
        data
      );
      console.log("Response: ", JSON.stringify(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
