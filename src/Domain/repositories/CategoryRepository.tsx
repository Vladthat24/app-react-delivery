import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Category } from "../entities/Category";
import { ImagePickerResult } from 'expo-image-picker';


export interface CategoryRepository {
    create(category:Category,file:ImagePickerResult):Promise<ResponseApiDelivery>;
    
}