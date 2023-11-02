import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { UpdateCategoryUseCase } from "../../../../../Domain/useCases/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from "../../../../../Domain/useCases/category/UpdateWithImageCategory";

import { Category } from "../../../../../Domain/entities/Category";
import { ResponseApiDelivery } from "../../../../../Data/sources/remote/models/ResponseApiDelivery";

const AdminCategoryUpdateViewModel = (category:Category) => {
  const [values, setValues] = useState(category);

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file,setFile]= useState<ImagePicker.ImagePickerAsset>()

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const updateCategory = async () => {
   
    setLoading(true);
    let response={} as ResponseApiDelivery;
    if(values.image?.includes('https://')){
      response = await UpdateCategoryUseCase(values);
    }else{
      //Actualizar con imagen
      response = await UpdateWithImageCategoryUseCase(values,file!);
      
    }
    setLoading(false);
    if (response.success) {
      setResponseMessage(response.message);
    }
  };

  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const resetForm=async()=>{
    setValues({
      name:'',
      description:'',
      image:'',
    })
  }

  return {
    ...values,
    onChange,
    pickerImage,
    takePhoto,
    loading,
    successMessage,
    responseMessage,
    updateCategory,
  };
};

export default AdminCategoryUpdateViewModel;
