import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const RepCounter = ({ reps }) => {
	const [counter, setCounter] = useState(reps)
	const [active, setActive] = useState(false)

	const handleCount = () => {
		if (active) {
			if (counter <= 0) {
				setCounter(reps)
				setActive(false)
			} else {
				setCounter(count =>  count - 1)
			}
		} else {
			setActive(true)
		}
	}

	return (
		<View>
			<TouchableOpacity
				onPress={handleCount}
			>
				<View 
					style={active ? styles.counter : [styles.counter, styles.counterZero]}
				>
					<Text style={active ? styles.text : [styles.text, styles.textZero]}>{ counter }</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	counter: {
		backgroundColor: 'blue',
		alignItems:'center',
		justifyContent: 'center',
		borderRadius: 20,
		width: 40,
		height: 40,
	},
	counterZero: {
		backgroundColor: '#eee',
	},
	text: {
		color: 'white',
		fontSize: 20,
	},
	textZero: {
		color: '#222',
	}
})

export default RepCounter