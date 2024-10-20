import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Create from './src/views/Create';
import View from './src/views/View';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="View" component={View} />
                <Stack.Screen name="Create" component={Create} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
