// React
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
// Components
import ExerciseSettings from '../components/ExerciseSettings'
// Contexts, Interfaces & Helpers
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { IExercise, IExerciseList } from '../interfaces/Exercises'
import { formatNameToTitle } from '../helpers/TitleConverter'
// Utils
import { exercises as data } from '../utils/exercises'


const EditWorkoutPage = () => {
	const [schema, setSchema] = useState<IWorkoutSchema>([])
	const [exerciseList, setExercisesList] = useState<IExerciseList>([])
	const [filter, setFilter] = useState({})

	const [visible, setVisible] = useState(false)

	const [exercises, setExercises] = useState([])

	// const [weight, setWeight] = useState(0)
	// const [sets, setSets] = useState('')
	// const [reps, setReps] = useState('')

	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	const stringToNumber = (state: string, setStateArg: any): void => {
		setStateArg(Number(state))
	}

	const handleSaveSchema = () => {
		// stringToNumber(weight, setWeight)
		// stringToNumber(sets, setSets)
		// stringToNumber(reps, setReps)


	}

	const addExercise = () => {
		setVisible(true)
		// 1. Gör en overlay med lista där användaren får välja en övning
		// 2. Lägg till övningen under de redan existerande, men den valda övningen som titel.
		setVisible(false)
	}

	const delExercise = () => {
		// Ta bort en övning
	}

	// funktion för att skapa antalet object med ID och success som sets är.

	useEffect(() => {
		setSchema(schemaA)
		setExercisesList(data)
	}, [])

	return (
		<View>
			<Text>Edit Workout Page</Text>

			{schema.map(ex => {
				return (
					<View key={ex.id}>
						<Text>{formatNameToTitle(ex.name)}</Text>

						<ExerciseSettings
							propId={ex.id}
							propWeight={ex.weight}
							propSets={Number(ex.sets.length)}
							propReps={ex.reps}
						/>
					</View>
				)
			})}

			<Button
				onPress={addExercise}
				title="Add exercise"
			/>
			<Button
				onPress={handleSaveSchema}
				title="Save schema"
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
	input: {
		width: 200,
		borderWidth: 2,
	},
})

export default EditWorkoutPage