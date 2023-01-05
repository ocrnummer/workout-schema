export interface ExerciseSet {
	id: string;
	success: boolean;
}

export interface UserExcerise {
	id: string;
	name: string;
	weight: number;
	reps: number;
	sets: Array<ExerciseSet>;
}

export interface WorkoutSchema extends Array<UserExcerise> { }