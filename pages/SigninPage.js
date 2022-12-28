import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


const SigninPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const validateEmail = (text) => {
		console.log(text)

	}

	return (
		<View style={styles.container}>
			<Text>Sign in</Text>

			<View style={styles.inputContainer}>
				<Text>Email</Text>
				<TextInput
					placeholder="Enter email"
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

			<Button
				title="Sign in"
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
	},
	// inputContainer: {
	// 	flex: 1,
	// 	flexDirection: 'column',
	// },
});


export default SigninPage