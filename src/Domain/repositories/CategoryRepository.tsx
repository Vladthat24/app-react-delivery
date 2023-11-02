import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Category } from "../entities/Category";
import { ImagePickerResult } from 'expo-image-picker';


export interface CategoryRepository {
    getAll():Promise<Category[]>;
    create(category:Category,file:ImagePickerResult):Promise<ResponseApiDelivery>;
    update(category:Category):Promise<ResponseApiDelivery>;
    updateWithImage(category:Category,file:ImagePickerResult):Promise<ResponseApiDelivery>;
    remove(id:string):Promise<ResponseApiDelivery>;

}