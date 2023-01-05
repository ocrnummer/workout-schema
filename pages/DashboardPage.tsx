import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const DashboardPage = ({ navigation }: any) => {

	return (
		<View>
			<Text>Dashboard Page</Text>

			<Button
				title="Workout"
				onPress={() =>
					navigation.navigate('Workout')
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

});


export default DashboardPage