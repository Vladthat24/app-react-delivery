import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";
import { ImagePickerResult } from 'expo-image-picker';

export interface UserRepository{
    getDeliveryMen(): Promise<User[]>;
    update(user:User): Promise<ResponseApiDelivery>
    updateWithImage(user:User,file:ImagePickerResult):Promise<ResponseApiDelivery>;
}
