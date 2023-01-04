import React, { createContext, useContext } from "react";
import {
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const contextValues = {
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	)
};

export { AuthContextProvider as default, useAuthContext };