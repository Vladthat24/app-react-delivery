import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import RounderButton from './RounderButton';

interface Props {
    openGallery: () => void;
    openCamara: () => void;
    modalUseState: boolean;
    setModalUserState: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalPickImage = ({ openGallery, openCamara, setModalUserState, modalUseState }: Props) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalUserState(!modalUseState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Selecciona una opcion:</Text>
                        <View style={styles.buttonContainer}>
                            <RounderButton
                                onPress={() => {
                                    openGallery()
                                    setModalUserState(false)
                                }}
                                text='Galeria' />
                        </View>
                        <View style={styles.buttonContainer}>
                            <RounderButton
                                onPress={() => {
                                    openCamara()
                                    setModalUserState(false)
                                }}
                                text='Camara'
                            />
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 250,
        height: 250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 35,
        paddingLeft: 25,
        paddingRight: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 8,
    }
});

export default ModalPickImage;