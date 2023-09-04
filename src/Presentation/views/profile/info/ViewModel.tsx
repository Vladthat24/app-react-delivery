import React from 'react'
import { RemoveLocalUserCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

const ProfileInfoViewModel = () => {
    const removeSession = async () => {
        await RemoveLocalUserCase();
    }
    return {
        removeSession
    }
}

export default ProfileInfoViewModel;