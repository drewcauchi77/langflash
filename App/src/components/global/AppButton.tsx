import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
}

const AppButton: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style.button}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;

const style = StyleSheet.create({
    button: {
        backgroundColor: '#dcfd65',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#1c1c1c',
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
    },
});
