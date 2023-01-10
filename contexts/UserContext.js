import React, { createContext, useContext, useState, useEffect } from "react";
import { storage } from "../firebase";

const UserContext = createContext()

const useUserContext = () => {
	return useContext(UserContext)
}

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState([])
	const [schemaA, setSchemaA] = useState([])
	const [schemaB, setSchemaB] = useState([])
	const [schemaC, setSchemaC] = useState([])

	// const [sets, setSets] = useState(0)
	// const [reps, setReps] = useState(0)

	const testSchema = [
		{
			id: 'a',
			schema: [
				{
					id: 'ex1',
					name: 'dumbbell-bicep-curl',
					weight: 20,
					sets: [
						{ id: 'ex1set1', success: false },
						{ id: 'ex1set2', success: false },
						{ id: 'ex1set3', success: false },
						{ id: 'ex1set4', success: false },
						{ id: 'ex1set5', success: false },
					],
					reps: 5
				},
				{
					id: 'ex2',
					name: 'barbell-squats',
					weight: 90,
					sets: [
						{ id: 'ex2set1', success: false },
					],
					reps: 5
				},
				{
					id: 'ex3',
					name: 'barbell-military-press',
					weight: 35,
					sets: [
						{ id: 'ex3set1', success: false },
						{ id: 'ex3set2', success: false },
						{ id: 'ex3set3', success: false },
						{ id: 'ex3set4', success: false },
						{ id: 'ex3set5', success: false },
					],
					reps: 5
				},
			]
		},
		{
			id: 'b',
			schema: [
				{
					id: 'ex1',
					name: 'dumbbell-bicep-curl',
					weight: 45,
					sets: [
						{ id: 'ex1set1', success: false },
						{ id: 'ex1set2', success: false },
						{ id: 'ex1set3', success: false },
						{ id: 'ex1set4', success: false },
						{ id: 'ex1set5', success: false },
					],
					reps: 5
				},
				{
					id: 'ex2',
					name: 'dumbbell-bicep-curl',
					weight: 45,
					sets: [
						{ id: 'ex2set1', success: false },
						{ id: 'ex2set2', success: false },
						{ id: 'ex2set3', success: false },
					],
					reps: 10
				},
				{
					id: 'ex3',
					name: 'dumbbell-bicep-curl',
					weight: 45,
					sets: [
						{ id: 'ex3set1', success: false },
						{ id: 'ex3set2', success: false },
						{ id: 'ex3set3', success: false },
						{ id: 'ex3set4', success: false },
						{ id: 'ex3set5', success: false },
					],
					reps: 5
				},
			]
		},
		{
			id: 'c',
			schema: [
				{
					id: 'ex1',
					name: 'Övning hehe',
					weight: 57.5,
					sets: [
						{ id: 'ex1set1', success: false },
						{ id: 'ex1set2', success: false },
						{ id: 'ex1set3', success: false },
					],
					reps: 8
				},
				{
					id: 'ex2',
					name: 'barbell-bicep-curl',
					weight: 40,
					sets: [
						{ id: 'ex2set1', success: false },
						{ id: 'ex2set2', success: false },
						{ id: 'ex2set3', success: false },
					],
					reps: 10
				},
				{
					id: 'ex3',
					name: 'barbell-bench-press',
					weight: 80,
					sets: [
						{ id: 'ex3set1', success: false },
						{ id: 'ex3set2', success: false },
						{ id: 'ex3set3', success: false },
						{ id: 'ex3set4', success: false },
						{ id: 'ex3set5', success: false },
						{ id: 'ex3set6', success: false },
						{ id: 'ex3set7', success: false },
						{ id: 'ex3set8', success: false },
					],
					reps: 3
				},
			]
		},
	]

	useEffect(() => {
		setSchemaA(testSchema[0])
		setSchemaB(testSchema[1])
		setSchemaC(testSchema[2])
	}, [])

	const contextValues = {
		user,
		schemaA,
		schemaB,
		schemaC,
		setSchemaA,
		setSchemaB,
		setSchemaC,
	};

	return (
		<UserContext.Provider value={contextValues}>
			{children}
		</UserContext.Provider>
	)
};

export { UserContextProvider as default, useUserContext };