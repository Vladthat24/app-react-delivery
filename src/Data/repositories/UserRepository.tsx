import { ImagePickerResult } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryFormData } from "../sources/remote/api/ApiDelivery";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository {

  async getDeliveryMen():Promise<User[]>{
    try{
      const response= await ApiDelivery.get<User[]>('/users/findDeliveryMen');
      return Promise.resolve(response.data);
    }catch(error){
      let e=(error as AxiosError);
      console.log("ERROR: "+JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async update(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        "/users/updateWitchOutImage",
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
  async updateWithImage(
    user: User,
    file: ImagePickerResult
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      const fileDetails = {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      };
      console.log("hola123");
      
      data.append("image", fileDetails);
      console.log("holafind");

      data.append("user", JSON.stringify(user));
      console.log("data para enviar: ", data);
      const response = await ApiDeliveryFormData.put<ResponseApiDelivery>(
        "/users/update",
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
