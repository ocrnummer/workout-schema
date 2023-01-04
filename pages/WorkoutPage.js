import { View, Text, Button, ScrollView } from 'react-native'
import RepCounter from '../components/RepCounter.js'

const WorkoutPage = () => {

	const schemaA = [
		{
			id: 1,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [1, 2, 3, 4, 5],
			reps: 5
		},
		{
			id: 2,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [1, 2, 3],
			reps: 5
		},
		{
			id: 3,
			name: 'dumbbell-bicep-curl',
			weight: 45,
			sets: [1, 2, 3, 4, 5],
			reps: 10
		},
	]

	const handleFinishWorkout = () => {
		console.log('Finished workout')



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
								<View key={set}>
									<Text>counter</Text>
									<RepCounter
										reps={ex.reps}
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