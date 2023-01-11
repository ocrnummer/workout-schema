import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAuthContext } from "../contexts/AuthContext"



const HomePage = ({ navigation }: any) => {
	const { logout } = useAuthContext()

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Welcome</Text>
			<Text>Let's workout</Text>

			<Button
				title="Sign in"
				onPress={() =>
					navigation.navigate('Signin')
				}
			/>
			<Button
				title="Register"
				onPress={() =>
					navigation.navigate('Register')
				}
			/>
			<Button
				title="Dashboard"
				onPress={() =>
					navigation.navigate('Dashboard')
				}
			/>
			<Button
				title="Logout"
				onPress={logout}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	h1: {
		fontSize: 20,
	},
});


export default HomePage