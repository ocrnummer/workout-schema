import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

import { useAuthContext } from "../contexts/AuthContext"

const RegisterPage = ({ navigation }: any) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	const { register, reloadUser, currentUser } = useAuthContext()

	const handleRegister = () => {
		if (password === repeatPassword) {
			try {
				register(email, password)
				reloadUser()

				addDoc(collection(db, 'users'), {
					id: currentUser.uid,
					next_workout: 'a',
					schemas: [
						{
							id: 'a',
							active: true,
							schema: []
						},
						{
							id: 'b',
							active: true,
							schema: []
						},
						{
							id: 'c',
							active: true,
							schema: []
						},
					]
				})

				navigation.navigate('Dashboard')
			} catch (error) {
				console.log(error)
			}
		}
	}


	return (
		<View style={styles.container}>
			<Text>Register</Text>

			<View>
				<Text>Email</Text>
				<TextInput
					placeholder="Email"
					style={styles.input}
					autoComplete="email"
					onChangeText={(val) => setEmail(val)}
				/>
			</View>

			<View>
				<Text>Password</Text>
				<TextInput
					placeholder="Password"
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(val) => setPassword(val)}
				/>
			</View>

			<View>
				<Text>Repeat Password</Text>
				<TextInput
					placeholder="Password"
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(val) => setRepeatPassword(val)}
				/>
			</View>

			<Button
				title="Register"
				onPress={handleRegister}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: 200,
		borderWidth: 2,
	}
});


export default RegisterPage