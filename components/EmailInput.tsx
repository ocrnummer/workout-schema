import React from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


const EmailInput = () => {

	return (
		<View>
			<Text>Email</Text>
			<TextInput
				placeholder="Email"
				style={styles.input}
				autoComplete="email"
				onChangeText={(val) => setEmail(val)}
			/>
		</View>
	)
}

export default EmailInput