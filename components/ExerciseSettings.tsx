// React
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const ExerciseSettings = ({ propWeight, propSets, propReps }: any) => {
	const [weight, setWeight] = useState(0)
	const [sets, setSets] = useState(0)
	const [reps, setReps] = useState(0)

	useEffect(() => {
		setWeight(propWeight)
		setSets(propSets)
		setReps(propReps)
	}, [])

	return (
		<View style={[style.row, style.spaceBetween]}>
			<View>
				<Text>Weight (kg)</Text>
				<View style={[style.row, style.spaceBetween]}>
					<TouchableOpacity onPress={() => setWeight(weight => weight - 2.5)}>
						<View style={style.counter}>
							<Text style={style.text}>-2.5</Text>
						</View>
					</TouchableOpacity>
					<Text>{weight}</Text>
					<TouchableOpacity onPress={() => setWeight(weight => weight + 2.5)}>
						<View style={style.counter}>
							<Text style={style.text}>+2.5</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<Text>Sets</Text>
				<View style={[style.row, style.spaceBetween]}>
					<TouchableOpacity onPress={() => setSets(sets => sets - 1)}>
						<View style={style.counter}>
							<Text style={style.text}>-1</Text>
						</View>
					</TouchableOpacity>
					<Text>{sets}</Text>
					<TouchableOpacity onPress={() => setSets(sets => sets + 1)}>
						<View style={style.counter}>
							<Text style={style.text}>+1</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<View>
				<Text>Reps</Text>
				<View style={[style.row, style.spaceBetween]}>
					<TouchableOpacity onPress={() => setReps(reps => reps - 1)}>
						<View style={style.counter}>
							<Text style={style.text}>-1</Text>
						</View>
					</TouchableOpacity>
					<Text>{reps}</Text>
					<TouchableOpacity onPress={() => setReps(reps => reps + 1)}>
						<View style={style.counter}>
							<Text style={style.text}>+1</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
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
	counter: {
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		width: 40,
		height: 40,
	},
	text: {
		color: 'white',
		fontSize: 16,
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	spaceBetween: {
		alignItems: 'center',
		justifyContent: 'space-between',
	}
})

export default ExerciseSettings