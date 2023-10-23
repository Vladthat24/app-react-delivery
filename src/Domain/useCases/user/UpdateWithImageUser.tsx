import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";
import { ImagePickerResult } from "expo-image-picker";

const { updateWithImage } = new UserRepositoryImpl();

export const UpdateWithImageUserUseCase = async (
  user: User,
  file: ImagePickerResult
) => {
  const response= await updateWithImage(user,file);
  console.log("responseUsCases:",response);
  return response;
};
