import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;

const Home = ({ navigation }: Props): React.JSX.Element => {
    return (
        <SafeAreaView>
            <Text>Home Page</Text>
            <Button
                title="Go to View All"
                onPress={() => navigation.navigate('View')}
            />
            <Button
                title="Go to Create"
                onPress={() => navigation.navigate('Create')}
            />
        </SafeAreaView>
    );
};

export default Home;
