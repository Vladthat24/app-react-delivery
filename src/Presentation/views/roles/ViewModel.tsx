import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useUserLocal } from '../../hooks/useUserLocal';

const RolesViewModel = () => {

    const { user } = useUserLocal();

    return {
        user
    }
}
export default RolesViewModel;