// React
import { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
// Components
import RepCounter from '../components/RepCounter'
// Contexts, Interfaces & Helpers
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { formatNameToTitle } from '../helpers/TitleConverter'

const WorkoutPage = ({ navigation }: any) => {
	const [schema, setSchema] = useState<IWorkoutSchema>([])
	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	const handleFinishWorkout = (): void => {
		schema.forEach((ex): void => {
			const success = checkIfWorkoutSuccess(ex as IUserSchemaExcerise)
			if (success) {
				ex.weight += 2.5
				ex.sets.forEach((set) => set.success = false)
				setSchemaA(schema)
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

	const updateSetSuccess = (e: [string, boolean]): void => {
		(schema.find(ex => ex.id === e[0].slice(0, 3)) as any)
			.sets.find((set: IExerciseSet) => set.id === e[0])
			.success = e[1]
	}

	useEffect(() => {
		setSchema(schemaA)
	}, [])

	return (
		<ScrollView>
			<Text>Workout</Text>

			{schema.map(ex => {
				return (
					<ScrollView key={ex.id as string}>
						<Text>{formatNameToTitle(ex.name)} - {ex.weight} kg</Text>
						{ex.sets.map((set) => {
							return (
								<View key={set.id}>
									<RepCounter
										reps={ex.reps}
										id={set.id}
										handleSuccess={updateSetSuccess}
									/>
								</View>
							)
						})}
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

export default WorkoutPage