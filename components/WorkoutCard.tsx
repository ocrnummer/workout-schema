import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { IUserSchemaExcerise } from '../interfaces/UserSchemas'

const WorkoutCard = ({ navigation, schema, handleCardPress }: any) => {

	const onCardPress = useCallback((id: string) => {
		handleCardPress(id)
	}, [])

	return (
		<View style={styles.card}>
			<TouchableOpacity onPress={() => onCardPress(schema.id)}>
				<Text style={styles.title}>Workout {schema.id.toUpperCase()}</Text>
				{schema.schema.map((ex: IUserSchemaExcerise) => {
					return (
						<View key={ex.id} style={[styles.row, styles.spaceBetween]}>
							<Text style={styles.p3}>{ex.name}</Text>
							<Text style={styles.p3}>{ex.weight} kg</Text>
						</View>
					)
				})}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		margin: 5,
		borderWidth: 2,
	},
	title: {
		padding: 4,
		backgroundColor: 'lightgray',
		fontSize: 16,
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	spaceBetween: {
		justifyContent: 'space-between',
	},
	p3: {
		padding: 3,
	}
})

export default WorkoutCard