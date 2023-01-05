// React & Native
import React from 'react'
//import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContextProvider from './contexts/AuthContext'
import UserContextProvider from './contexts/UserContext'
// Pages
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import WorkoutPage from './pages/WorkoutPage'
import EditWorkoutPage from './pages/EditWorkoutPage'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Signin" component={SigninPage} />
				<Stack.Screen name="Register" component={RegisterPage} />
				<Stack.Screen name="Dashboard" component={DashboardPage} />
				<Stack.Screen name="Workout" component={WorkoutPage} />
				<Stack.Screen name="EditWorkout" component={EditWorkoutPage} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default function App() {

	return (
		<AuthContextProvider>
			<UserContextProvider>
				<AppNavigation />
			</UserContextProvider>
		</AuthContextProvider>
	);
}

