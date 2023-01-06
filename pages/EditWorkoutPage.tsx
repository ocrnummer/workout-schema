// React
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
// Contexts, Interfaces & Helpers
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { IExercise, IExerciseList } from '../interfaces/Exercises'
import { formatNameToTitle } from '../helpers/TitleConverter'
// Utils
import { exercises as data } from '../utils/exercises'

const EditWorkoutPage = () => {
	const [schema, setSchema] = useState<IWorkoutSchema>([])
	const [exercises, setExercises] = useState<IExerciseList>([])
	const [filter, setFilter] = useState({})

	const [exercise, setExercise] = useState('')
	const [weight, setWeight] = useState('')
	const [sets, setSets] = useState('')
	const [reps, setReps] = useState('')

	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	// funktion för att konvertera weight, sets och reps till nummer.
	// funktion för att skapa antalet object med ID och success som sets är.

	useEffect(() => {
		setSchema(schemaA)
		setExercises(data)
	}, [])

	return (
		<View style={styles.container}>
			<Text>Edit Workout Page</Text>

			<View>
				{/* Searchbar för exercise */}


				{/* Weight input, number */}
				<View>
					<Text>Weight</Text>
					<TextInput
						style={styles.input}
						keyboardType='numeric'
						onChangeText={num => setWeight(num)}
						value={weight}
						maxLength={3}
					/>
				</View>

				{/* Sets input, number.
				När sparas så skapas ett object med id: string och success: boolean} */}
				<View>
					<Text>Sets</Text>
					<TextInput
						style={styles.input}
						keyboardType='numeric'
						onChangeText={num => setSets(num)}
						value={sets}
					/>
				</View>

				{/* Reps input, Number */}
				<View>
					<Text>Reps</Text>
					<TextInput
						style={styles.input}
						keyboardType='numeric'
						onChangeText={num => setReps(num)}
						value={reps}
					/>
				</View>
			</View>

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
	input: {
		width: 200,
		borderWidth: 2,
	},
})

export default EditWorkoutPage