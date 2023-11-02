import React from 'react'
import { Category } from '../../entities/Category'
import { ImagePickerAsset } from 'expo-image-picker'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'

const {update} = new CategoryRepositoryImpl();

export const UpdateCategoryUseCase = async(category:Category) => {
  return await update(category);
}
