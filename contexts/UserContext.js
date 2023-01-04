import React, { createContext, useContext, useState } from "react";
import { storage } from "../firebase";

const UserContext = createContext()

const useUserContext = () => {
	return useContext(UserContext)
}

const UserContextProvider = ({ children }) => {
	const [User, setUser] = useState([])
	const [schemaA, setSchemaA] = useState([])
	const [schemaB, setSchemaB] = useState([])
	const [schemaC, setSchemaC] = useState([])

	const [sets, setSets] = useState(0)
	const [reps, setReps] = useState(0)

	const contextValues = {
		sets,
		reps
	};

	return (
		<UserContext.Provider value={contextValues}>
			{children}
		</UserContext.Provider>
	)
};

export { UserContextProvider as default, useUserContext };