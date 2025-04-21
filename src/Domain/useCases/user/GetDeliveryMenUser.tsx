import React from 'react'
import { UserRepositoryImpl } from '../../../Data/repositories/UserRepository';
const {getDeliveryMen} = new UserRepositoryImpl();

export const GetDeliveryMenUserCase = async () => {
  return await getDeliveryMen();
}
