import { ImagePickerResult } from 'expo-image-picker';
import { ResponseApiDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';
import { Product } from '../entities/Product';

export interface ProductRepository{
    create(product:Product,file:ImagePickerResult[]):Promise<ResponseApiDelivery>
    getProductsByCategory(idCategory: string):Promise<Product[]>;
    update(product:Product):Promise<ResponseApiDelivery>;
    updateWithImage(product:Product,file:ImagePickerResult[]):Promise<ResponseApiDelivery>;
    remove(product:Product) : Promise<ResponseApiDelivery>;
}