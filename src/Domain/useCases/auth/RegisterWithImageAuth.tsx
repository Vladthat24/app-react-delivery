import { ImagePickerAsset } from "expo-image-picker";
import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";

const {registerWithImage}= new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase= async(user:User,file:ImagePickerAsset)=>{
    console.log(".: RegisterWithImageAuthUseCase :.");
    console.log("user: ",user);
    console.log("file:",file);
    console.log("---------------------------------");  
    
    return await registerWithImage(user,file);
}