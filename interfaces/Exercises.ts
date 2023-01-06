export interface IExercise {
    id: number,
    name: string,
    type: string,
    muscle: string
}

export interface IExerciseList extends Array<IExercise> { }