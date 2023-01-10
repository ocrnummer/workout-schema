// React
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'

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


				// array[index].sets.map((set) => {
				// 	ex.weight += 2.5
				// 	ex.sets.forEach((set) => set.success = false)
				// })

				// // array[exerciseIndex].sets[setIndex].success = e[2]
				// // setSchema(array)

				// ex.weight += 2.5
				// ex.sets.forEach((set) => set.success = false)


				params.schemaId === 'a' ? setSchemaA(array) : ''
				params.schemaId === 'b' ? setSchemaB(array) : ''
				params.schemaId === 'c' ? setSchemaC(array) : ''

				// setSchemaA(schema)
			}
		})
		navigation.navigate('Dashboard')
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
		/* 
		(schema.find(ex => ex.id === e[0].slice(0, 3)) as any)
			.sets.find((set: IExerciseSet) => set.id === e[0])
			.success = e[1]
		*/
	}

	useEffect(() => {

		if (params.schemaId === 'a') {
			setSchema(schemaA.schema)
		}
		if (params.schemaId === 'b') {
			setSchema(schemaB.schema)
		}
		if (params.schemaId === 'c') {
			setSchema(schemaC.schema)
		}

		console.log('workoutpage: ', schema)
	}, [])

	return (
		<ScrollView>
			<Text>Workout</Text>
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
})

export default WorkoutPage