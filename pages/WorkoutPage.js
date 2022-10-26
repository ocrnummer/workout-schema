import { useState } from 'react'
import RepCounter from '../components/RepCounter.js'


const WorkoutPage = () => {
	const [sets, setSets] = useState(5)
	const [reps, setReps] = useState(5)

	return(
		<RepCounter
			reps={reps}
		/>
	)
}

export default WorkoutPage