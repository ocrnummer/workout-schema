import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


const RegisterPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	return (
		<View style={styles.container}>
			<Text>Register</Text>

			<View style={styles.inputContainer}>
				<Text>Email</Text>
				<TextInput
					placeholder="Email"
					style={styles.input}
					autoComplete="email"
					onChangeText={(val) => setEmail(val)}
				/>
			</View>

			<View style={styles.inputContainer}>
				<Text>Password</Text>
				<TextInput
					placeholder="Password"
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(val) => setPassword(val)}
				/>
			</View>

			<View style={styles.inputContainer}>
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
				onPress={() =>
					navigation.navigate('Dashboard')
				}
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