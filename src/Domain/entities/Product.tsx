export interface Product{
    id?:string;
    name: string;
    description: string;
    image1: string;
    image2:string;
    image3:string;
    id_category:string | undefined;
    price:number;
    quantity?:number;
}