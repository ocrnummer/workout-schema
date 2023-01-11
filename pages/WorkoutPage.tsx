// React
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, ScrollView, TouchableHighlight } from 'react-native'

// Components
import RepCounter from '../components/RepCounter'
// Contexts, Interfaces & Helpers
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { formatNameToTitle } from '../helpers/TitleConverter'

const WorkoutPage = ({ navigation, route: { params } }: any) => {
	const [schema, setSchema] = useState<IUserSchemaExcerise[]>([])

	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	const handleFinishWorkout = (): void => {
		schema.forEach((ex): void => {
			const success = checkIfWorkoutSuccess(ex as IUserSchemaExcerise)
			if (success) {
				const array = [...schema]
				const index = array.map((ex) => ex.id).indexOf(ex.id)
				array[index].weight += 2.5
				array[index].sets.forEach((set) => set.success = false)
				updateWorkoutSchema(array)
			}
		})
		navigation.navigate('Dashboard')
	}

	const updateWorkoutSchema = (array: IUserSchemaExcerise[]): void => {
		params.schemaId === 'a' ? setSchemaA({ id: params.schemaId, schema: array }) : null
		params.schemaId === 'b' ? setSchemaB({ id: params.schemaId, schema: array }) : null
		params.schemaId === 'c' ? setSchemaC({ id: params.schemaId, schema: array }) : null
	}

	const editWorkout = () => {
		navigation.navigate('EditWorkout', { schemaId: params.schemaId })
	}

	const checkIfWorkoutSuccess = (ex: IUserSchemaExcerise) => {
		const arr: boolean[] = []
		ex.sets.forEach((set): void => {
			arr.push(set.success as boolean)
		})
		const isEveryItemTrue = (arr: boolean[]): boolean => arr.every(boolean => boolean === true)
		return isEveryItemTrue(arr)
	}

	const updateSetSuccess = (e: [string, string, boolean]): void => {
		const array: Array<IUserSchemaExcerise> = [...schema]
		const exerciseIndex = array.map((ex) => ex.id).indexOf(e[0])
		const setIndex = array[exerciseIndex].sets.map((set) => set.id).indexOf(e[1])
		array[exerciseIndex].sets[setIndex].success = e[2]
		setSchema(array)
	}

	useEffect(() => {
		params.schemaId === 'a' ? setSchema(schemaA.schema) : null
		params.schemaId === 'b' ? setSchema(schemaB.schema) : null
		params.schemaId === 'c' ? setSchema(schemaC.schema) : null
	}, [])

	return (
		<ScrollView>
			<View style={[styles.row, styles.spaceBetween]}>
				<Text>Workout {params.schemaId.toUpperCase()}</Text>
				<TouchableHighlight onPress={() => editWorkout()}>
					<Text>Edit</Text>
				</TouchableHighlight>
			</View>

			{schema && schema.map(ex => {
				return (
					<ScrollView key={ex.id as string}>
						<Text>{formatNameToTitle(ex.name)} - {ex.weight} kg</Text>
						<View style={styles.row}>
							{ex.sets.map((set) => {
								return (
									<RepCounter
										key={set.id}
										reps={ex.reps}
										setId={set.id}
										exId={ex.id}
										handleSuccess={updateSetSuccess}
									/>
								)
							})}
						</View>
					</ScrollView>
				)
			})}
			<Button
				onPress={handleFinishWorkout}
				title="Finish workout"
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	spaceBetween: {
		justifyContent: 'space-between',
	},
})

export default WorkoutPage