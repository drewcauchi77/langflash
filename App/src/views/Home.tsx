import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppText from '../components/global/AppText';
import AppButton from '../components/global/AppButton';

type Props = NativeStackScreenProps<any>;

const Home = ({ navigation }: Props): React.JSX.Element => {
    return (
        <SafeAreaView>
            <AppText text="Home" />
            <AppButton
                title="Go to View All"
                onPress={() => navigation.navigate('View')} />
            <AppButton
                title="Go to Create"
                onPress={() => navigation.navigate('Create')} />
        </SafeAreaView>
    );
};

export default Home;
