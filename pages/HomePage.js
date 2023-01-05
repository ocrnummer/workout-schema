import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const HomePage = ({ navigation }) => {
	const [reps, setReps] = useState(5)

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