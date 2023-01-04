import { useState } from 'react'

import { View, Text, Button, ScrollView } from 'react-native'
import RepCounter from '../components/RepCounter.js'

import { useUserContext } from '../contexts/UserContext.js'

const WorkoutPage = () => {
	const [success, setSuccess] = useState(false)

	const { sets, reps } = useUserContext()

	const schemaA = [
		{
			id: 1,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [
				{ id: 1, success: false },
				{ id: 2, success: false },
				{ id: 3, success: false },
				{ id: 4, success: false },
				{ id: 5, success: false },
			],
			reps: 5
		},
		{
			id: 2,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [
				{ id: 1, success: false },
				{ id: 2, success: false },
				{ id: 3, success: false },
			],
			reps: 10
		},
		{
			id: 3,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [
				{ id: 1, success: false },
				{ id: 2, success: false },
				{ id: 3, success: false },
				{ id: 4, success: false },
				{ id: 5, success: false },
			],
			reps: 5
		},
	]

	const handleFinishWorkout = () => {
		console.log('Finished workout')



	}

	const checkIfWorkoutSuccess = (e) => {
		console.log("workoutpage", e)
		//setSuccess(true)
	}


	return (
		<ScrollView>
			<Text>Workout!</Text>

			{schemaA.map(ex => {
				return (
					<ScrollView key={ex.id}>
						<Text>{ex.name}</Text>
						<Text>{ex.weight} kg</Text>

						{ex.sets.map((set) => {
							return (
								<View key={set.id}>
									<RepCounter
										reps={ex.reps}
										handleSuccess={checkIfWorkoutSuccess}
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