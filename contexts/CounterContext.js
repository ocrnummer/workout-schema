import React, { createContext, useContext, useState } from "react";
import { storage } from "../firebase";

const CounterContext = createContext()
// const handleCounterContext = createContext()

const useCounterContext = () => {
	return useContext(CounterContext)
}

// const useCounter = () => {
// 	return useContext(handleCounterContext)
// }

const CounterContextProvider = ({ children }) => {
	const [counter, setCounter] = useState([])
	const [active, setActive] = useState(false)

	const handleCount = () => {
		if (active) {
			if (counter <= 0) {
				setCounter(reps)
				setActive(false)
			} else {
				setCounter(count => count - 1)
			}
		} else {
			setActive(true)
		}
	}

	const contextValues = {
		counter,
		active,
		handleCount
	};

	return (
		<UserContext.Provider value={contextValues}>
			{children}
		</UserContext.Provider>
	)
};

export { CounterContextProvider as default, useCounterContext };