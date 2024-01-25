import { Product } from "../../Domain/entities/Product";
import { ShoppingBagRepository } from "../../Domain/repositories/ShoppingBagRepository";
import { LocalStorage } from "../sources/local/LocalStorage";

export class ShoppingBagRepositoryImpl implements ShoppingBagRepository {
  async save(product: Product[]): Promise<void> {
    const { save } = LocalStorage();
    await save("shopping_bag", JSON.stringify(product));
  }
  async getShoppingBag(): Promise<Product[]> {
    const { getItem } = LocalStorage();
    const data = await getItem("shopping_bag");
    const shoppingBag: Product[] = JSON.parse(data as any);
    return shoppingBag;
  }
}