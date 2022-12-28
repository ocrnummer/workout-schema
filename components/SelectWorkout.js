import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const SelectWorkout = () => {
	return (
		<View style={style.container}>
			<Text>Workout A</Text>
			<Text>Workout B</Text>

		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default SelectWorkout