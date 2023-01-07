// React
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, TextInput, Button, FlatList } from 'react-native'
// Components
import ExerciseSettings from '../components/ExerciseSettings'
// Contexts, Interfaces & Helpers
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { IExercise, IExerciseList } from '../interfaces/Exercises'
import { formatNameToTitle } from '../helpers/TitleConverter'
// Utils
import { exercises as data } from '../utils/exercises'


const EditWorkoutPage = () => {
	const [schema, setSchema] = useState<IWorkoutSchema>([])
	const [exerciseList, setExercisesList] = useState<IExerciseList>([])
	const [filteredList, setFilteredList] = useState<IExerciseList>([])
	const [search, setSearch] = useState('');

	const [visible, setVisible] = useState(false)


	const [newExercise, setNewExercise] = useState('')


	// const [exercises, setExercises] = useState([])

	// const [filteredDataSource, setFilteredDataSource] = useState([]);
	// const [masterDataSource, setMasterDataSource] = useState([]);


	// const [weight, setWeight] = useState(0)
	// const [sets, setSets] = useState('')
	// const [reps, setReps] = useState('')

	const {
		schemaA, setSchemaA,
		schemaB, setSchemaB,
		schemaC, setSchemaC,
	} = useUserContext()

	const handleSearchFilter = (text: string) => {
		if (text) {
			const searchedData = exerciseList.filter((item: any) => {
				const itemData = item.name
					? item.name.toLowerCase()
					: ''.toLowerCase()
				const textData = text.toLowerCase()
				return itemData.indexOf(textData) > -1
			})
			setFilteredList(searchedData)
			setSearch(text)
		} else {
			setFilteredList(exerciseList)
			setSearch(text)
		}
	}

	const listItem = ({ item }: any) => {
		return (
			<Text
				style={style.item}
				onPress={() => setNewExercise(item)}>
				{formatNameToTitle(item.name)}
			</Text>
		)
	}

	const listItemSeparator = () => {
		return (
			<View
				style={style.listSeparator}
			/>
		)
	}

	// const selectItem = (item) => {
	// 	// alert('Id : ' + item.id + ' Title : ' + item.title);
	// };




	const stringToNumber = (state: string, setStateArg: any): void => {
		setStateArg(Number(state))
	}

	const handleSaveSchema = () => {
		// stringToNumber(weight, setWeight)
		// stringToNumber(sets, setSets)
		// stringToNumber(reps, setReps)


	}

	const handleAddExercise = () => {
		// 1. Gör en overlay med lista där användaren får välja en övning
		// 2. Lägg till övningen under de redan existerande, men den valda övningen som titel.



		setVisible(!visible)
	}

	const delExercise = () => {
		// Ta bort en övning
	}

	// funktion för att skapa antalet object med ID och success som sets är.

	useEffect(() => {
		setSchema(schemaA)
		setExercisesList(data)
		setFilteredList(data)
	}, [])

	return (
		<View>
			{visible && (
				<ScrollView>
					<View style={style.modal}>

						<TextInput
							style={style.input}
							onChangeText={(text) => handleSearchFilter(text)}
							value={search}
							placeholder="Search exercise"
						/>

						<FlatList
							data={filteredList}
							keyExtractor={(item, index) => index.toString()}
							ItemSeparatorComponent={listItemSeparator}
							renderItem={listItem}
						/>

						<Button
							onPress={handleAddExercise}
							title="Add exercise"
						/>
					</View>
					<View style={style.overlay}></View>
				</ScrollView>
			)}

			<View>
				<Text>Edit Workout Page</Text>

				{schema.map(ex => {
					return (
						<View key={ex.id}>
							<Text>{formatNameToTitle(ex.name)}</Text>

							<ExerciseSettings
								propId={ex.id}
								propWeight={ex.weight}
								propSets={Number(ex.sets.length)}
								propReps={ex.reps}
							/>
						</View>
					)
				})}

				<Button
					onPress={() => setVisible(!visible)}
					title="Add exercise"
				/>
				<Button
					onPress={handleSaveSchema}
					title="Save schema"
				/>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
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
	item: {
		padding: 5,
	},
	listSeparator: {
		height: 0.5,
		width: '100%',
		backgroundColor: '#C8C8C8',
	},
	overlay: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		opacity: 0.4,
	},
	modal: {
		// width: 50,
		// height: 100,
		zIndex: 3,
		elevation: 3,
	},
})

export default EditWorkoutPage