import { createContext, useContext } from "react";
import {
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { auth, storage } from "../firebase";

const AuthContect = createContext();

const useAuthContext = () => {
	return useContext(AuthContect);
};

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