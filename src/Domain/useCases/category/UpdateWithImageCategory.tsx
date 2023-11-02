import React from 'react'
import { Category } from '../../entities/Category'
import { ImagePickerAsset } from 'expo-image-picker'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'

const {updateWithImage} = new CategoryRepositoryImpl();

export const UpdateWithImageCategoryUseCase = async(category:Category, file:ImagePickerAsset) => {
  return await updateWithImage(category,file);
}
