import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Create from './src/views/Create';
import View from './src/views/View';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    contentStyle: styles.container,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="View" component={View} />
                <Stack.Screen name="Create" component={Create} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
});

// App Background - linear-gradient(340deg, rgba(0,0,0,1) 0%, rgba(28,28,28,1) 70%, rgba(42,42,42,1) 100%);
// Background - #1c1c1c;
// Cards - #ffffff;
// Primary - #dcfd65;
