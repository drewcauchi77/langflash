import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
    text: string,
}

const AppText: React.FC<Props> = ({ text }) => {
    return (
        <Text style={[
            style.text,
            style.montserratRegular,
        ]}>{ text }</Text>
    );
};

export default AppText;

const style = StyleSheet.create({
    text: {
        color: '#ffffff',
    },
    montserratRegular: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
    },
});
