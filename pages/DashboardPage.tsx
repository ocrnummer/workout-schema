import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import { useUserContext } from '../contexts/UserContext'
import { useAuthContext } from '../contexts/AuthContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import WorkoutCard from '../components/WorkoutCard'


const DashboardPage = ({ navigation }: any) => {
	const [userSchema, setUserSchemas] = useState<any>([])
	const { currentUser } = useAuthContext()

	const { schemaA, schemaB, schemaC, } = useUserContext()

	const handleCardPress = (e: any) => {
		navigation.navigate('Workout', { schemaId: e })
	}

	useEffect(() => {
		setUserSchemas([schemaA, schemaB, schemaC])
	}, [])

	return (
		<View>
			<View style={[styles.row, styles.spaceBetween]}>
				<View>
					{currentUser ?
						<Text style={[styles.title, styles.p3]}>{currentUser.email}'s</Text> : null
					}
					<Text style={[styles.title, styles.p3]}>Dashboard</Text>
				</View>

				<TouchableHighlight>
					<Text>Profile</Text>
				</TouchableHighlight>
			</View>


			{userSchema && userSchema.map((schema: IWorkoutSchema) => {
				return (
					<WorkoutCard
						key={schema.id}
						schema={schema}
						handleCardPress={handleCardPress}
					/>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	spaceBetween: {
		justifyContent: 'space-between',
	},
	p3: {
		padding: 3,
	},
	title: {
		fontSize: 20,
	},
});


export default DashboardPage