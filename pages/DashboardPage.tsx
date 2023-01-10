import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import WorkoutCard from '../components/WorkoutCard'


const DashboardPage = ({ navigation }: any) => {
	const [userSchema, setUserSchemas] = useState<any>([])

	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	const handleCardPress = (e: any) => {
		console.log("handleCardPress: ", e)
		navigation.navigate('Workout', { schemaId: e })
	}

	useEffect(() => {
		setUserSchemas([schemaA, schemaB, schemaC])
	}, [])

	return (
		<View>
			<Text>Dashboard</Text>
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

});


export default DashboardPage