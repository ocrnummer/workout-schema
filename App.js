import React from 'react'
import { View } from 'react-native';
import HomePage from './pages/HomePage.js'
import WorkoutPage from './pages/WorkoutPage.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Workout" component={WorkoutPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

