import React from 'react'
import { Category } from '../../entities/Category'
import { ImagePickerResult } from 'expo-image-picker'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'

const {create} = new CategoryRepositoryImpl();

export const CreateCategoryUseCase = async(category:Category, file:ImagePickerResult) => {
  return await create(category,file);
}
