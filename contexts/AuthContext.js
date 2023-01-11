import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	updateEmail,
	updatePassword,
	signOut,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext()

const useAuthContext = () => useContext(AuthContext)
// const useAuthContext = () => {
// 	return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const register = (email, password) => {
		try {
			return createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			Alert(error.message)
		}
	}

	const login = (email, password) => {
		try {
			return signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			Alert(error.message)
		}
	}

	const newEmail = (email) => {
		try {
			updateEmail(currentUser, email)
		} catch (error) {
			Alert(error.message)
		}
	}

	const newPassword = (password) => {
		try {
			updatePassword(currentUser, password)
		} catch (error) {
			Alert(error.message)
		}
	}

	const resetPassword = (email) => {
		try {
			return sendPasswordResetEmail(auth, email)
		} catch (error) {
			Alert(error.message)
		}
	}

	const reloadUser = () => {
		try {
			auth.currentUser.reload()
			setCurrentUser(auth.currentUser)
			return true
		} catch (error) {
			Alert(error)
		}
	}

	const logout = () => {
		try {
			return signOut(auth);
		} catch (error) {
			Alert(error.message)
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user)
			setIsLoading(false)
		})
		console.log(currentUser)
		return unsubscribe
	}, [])

	const contextValues = {
		currentUser,
		register,
		login,
		logout,
		newEmail,
		newPassword,
		resetPassword,
		reloadUser,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			{isLoading && (<Text>Loading...</Text>)}
			{children}
		</AuthContext.Provider>
	)
};

export { AuthContextProvider as default, useAuthContext };