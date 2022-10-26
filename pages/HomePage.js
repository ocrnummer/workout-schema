import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import SelectWorkout from '../components/SelectWorkout.js'


const HomePage = () => {

	return (
		<View style={styles.container}>
			<Text>Let's workout</Text>

			<SelectWorkout />
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
});


export default HomePage