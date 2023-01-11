import React, { createContext, useContext, useState, useEffect } from "react";
import { storage } from "../firebase";
import { useAuthContext } from "./AuthContext";

import { testUser } from "../utils/testUser";

const UserContext = createContext()

const useUserContext = () => {
	return useContext(UserContext)
}

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState([])
	const [schemaA, setSchemaA] = useState([])
	const [schemaB, setSchemaB] = useState([])
	const [schemaC, setSchemaC] = useState([])

	const { currentUser } = useAuthContext()

	// const [sets, setSets] = useState(0)
	// const [reps, setReps] = useState(0)

	useEffect(() => {
		// skriv här så användarens (currentUser.uid) scheman laddas in från dokument i firestore

		setSchemaA(testUser.schemas[0])
		setSchemaB(testUser.schemas[1])
		setSchemaC(testUser.schemas[2])
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