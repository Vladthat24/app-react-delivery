import { createContext, useState } from "react";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Product } from "../../Domain/entities/Product";
import { ImagePickerResult } from "expo-image-picker";
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
import { GetProductsByCategoryUseCase } from "../../Domain/useCases/product/GetProductsByCategory";
import { DeleteProductUseCase } from "../../Domain/useCases/product/DeleteProduct";
import { UpdateWithImageProductUseCase } from "../../Domain/useCases/product/UpdateProductWithImage";
import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";

export interface ProductContextProps {
    products:Product[],
    getProducts(idCategory:string):Promise<void>,
    create(product: Product, files: ImagePickerResult[]): Promise<ResponseApiDelivery>,
    updateWithImage(product: Product, files: ImagePickerResult[]): Promise<ResponseApiDelivery>,
    update(product:Product) : Promise<ResponseApiDelivery>,
    remove(product:Product) : Promise<ResponseApiDelivery>
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {

    const [products,setProducts]=useState<Product[]>([]);

    const getProducts = async (idCategory:string):Promise<void>=>{
        const result=await GetProductsByCategoryUseCase(idCategory);
        setProducts(result);
    }

    const create = async (product: Product, files: ImagePickerResult[]): Promise<ResponseApiDelivery> => {
        const response = await CreateProductUseCase(product, files);
        getProducts(product.id_category!);
        return response;

    }

    const update= async (product:Product): Promise<ResponseApiDelivery>=>{
        const response= await UpdateProductUseCase(product);
        getProducts(product.id_category!);
        return response;
    }

    const updateWithImage= async (product:Product,files: ImagePickerResult[]): Promise<ResponseApiDelivery>=>{
        const response= await UpdateWithImageProductUseCase(product,files);
        getProducts(product.id_category!);
        return response;
    }

    const remove = async (producto:Product):Promise<ResponseApiDelivery>=>{
        const response= await DeleteProductUseCase(producto);
        getProducts(producto.id_category!);
        return response;
    }
    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            create,
            update,
            updateWithImage,
            remove
        }}>
            {children}
        </ProductContext.Provider>
    )
}