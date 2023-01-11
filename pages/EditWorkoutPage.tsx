/* React & Dependencies */
import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	TextInput,
	Button,
	TouchableHighlight,
} from 'react-native'
import 'react-native-get-random-values' // <- Needed for uuid to work with react native
import { v4 as uuid } from 'uuid'
/* Components */
import ExerciseSettings from '../components/ExerciseSettings'
/* Contexts, Interfaces & Helpers */
import { useUserContext } from '../contexts/UserContext'
import { IExerciseSet, IUserSchemaExcerise, IWorkoutSchema } from '../interfaces/UserSchemas'
import { IExercise, IExerciseList } from '../interfaces/Exercises'
import { formatNameToTitle } from '../helpers/TitleConverter'
/* Utils */
import { exercises as data } from '../utils/exercises'


const EditWorkoutPage = ({ navigation, route: { params } }: any) => {
	const [schema, setSchema] = useState<IUserSchemaExcerise[]>([])
	const [exerciseList, setExercisesList] = useState<IExerciseList>([])
	const [filteredList, setFilteredList] = useState<IExerciseList>([])
	const [search, setSearch] = useState('');
	const [visible, setVisible] = useState(false)
	const [filter, setFilter] = useState({})

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

	/* 
	Kanske använd vvvv

	const stringToNumber = (state: string, setStateArg: any): void => {
		setStateArg(Number(state))
	}
	*/

	const handleSaveSchema = () => {
		// Här kallas funktion i middleware som POST till användarens schema firebase

		params.schemaId === 'a' ? setSchemaA({ id: params.schemaId, schema: schema }) : null
		params.schemaId === 'b' ? setSchemaB({ id: params.schemaId, schema: schema }) : null
		params.schemaId === 'c' ? setSchemaC({ id: params.schemaId, schema: schema }) : null
		navigation.navigate('Workout', { schemaId: params.schemaId })
	}

	const handleAddExercise = (e: IExercise) => {
		setSchema([...schema, {
			id: uuid().toString(),
			name: e.name.toString(),
			weight: 0,
			reps: 0,
			sets: [],
		}])
		setVisible(!visible)
	}

	const deleteExercise = (id: string): void => {
		const array = [...schema]
		const index = array.map((ex) => ex.id).indexOf(id)
		array.splice(index, 1)
		setSchema(array)
	}

	const handleStatsChange = (e: any): void => {
		const array = [...schema]
		const index = array.map((ex) => ex.id).indexOf(e.propId)

		array[index].weight !== e.weight ? array[index].weight = e.weight : null
		array[index].reps !== e.reps ? array[index].reps = e.reps : null

		updateNumberOfSetsToObjects(array, index, e.sets)
		setSchema(array)
	}

	const updateNumberOfSetsToObjects = (array: IUserSchemaExcerise[], index: number, sets: number) => {
		if (array[index].sets.length <= sets) {
			for (let i = 0; i < sets; i++) {
				array[index].sets[i] = {
					id: uuid().toString(),
					success: false,
				}
			}
		} else if (array[index].sets.length >= sets) {
			for (let i = array[index].sets.length; i > sets; i--) {
				array[index].sets.pop()
			}
		}
		return array
	}

	useEffect(() => {
		params.schemaId === 'a' ? setSchema(schemaA.schema) : null
		params.schemaId === 'b' ? setSchema(schemaB.schema) : null
		params.schemaId === 'c' ? setSchema(schemaC.schema) : null
		setExercisesList(data)
		setFilteredList(data)
	}, [])

	return (
		<View>
			{visible && (
				<ScrollView style={styles.modal}>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={(text) => handleSearchFilter(text)}
							value={search}
							placeholder="Search exercise"
						/>

						{/* ÅTERKOMM HIT FÖR ATT GÖRA FILTRERINGSKNAPPAR

						<View>
							<TouchableHighlight
								style={style.delButton}
								onPress={() => setFilter()}
							>
								<Text>arm</Text>
							</TouchableHighlight>
 
							<TouchableHighlight
								style={style.delButton}
								onPress={() => setFilter()}
							>
								<Text>dumbbell</Text>
							</TouchableHighlight>
						</View> 
						*/}


					</View>

					{filteredList && filteredList.map(item => {
						return (
							<Text
								key={item.id}
								style={styles.item}
								onPress={() => handleAddExercise(item)}
							>
								{formatNameToTitle(item.name)}
							</Text>
						)
					})}
				</ScrollView>
			)}

			<View>
				<Text>Edit Workout {params.schemaId.toUpperCase()}</Text>

				{schema.map(ex => {
					return (
						<View key={ex.id}>
							<View style={[styles.row, styles.spaceBetween]}>
								<Text>{formatNameToTitle(ex.name)}</Text>
								<TouchableHighlight
									style={styles.delButton}
									onPress={() => deleteExercise(ex.id)}
								>
									<Text style={styles.delButtonText}>X</Text>
								</TouchableHighlight>

							</View>
							<ExerciseSettings
								propId={ex.id}
								propWeight={ex.weight}
								propSets={Number(ex.sets.length)}
								propReps={ex.reps}
								onStatsChange={handleStatsChange}
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
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	spaceBetween: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	delButton: {
		color: 'white',
		fontSize: 20,
		width: 30,
		height: 30,
		padding: 5,
		borderRadius: 10,
		backgroundColor: 'red',
	},
	delButtonText: {
		color: 'white',
		fontSize: 20,
	},
	item: {
		padding: 5,
	},
	listSeparator: {
		height: 0.5,
		width: '100%',
		backgroundColor: '#C8C8C8',
	},
	modal: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
	},
})

export default EditWorkoutPage