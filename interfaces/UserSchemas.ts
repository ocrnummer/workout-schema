export interface IExerciseSet {
	id: string;
	success: boolean;
}

export interface IUserSchemaExcerise {
	id: string;
	name: string;
	weight: number;
	reps: number;
	sets: Array<IExerciseSet>;
}

export interface IWorkoutSchema extends Array<IUserSchemaExcerise> { }