import { Exercise } from './exercise.model';

export class TrainingService {

    private exercises: Exercise [] = [
        {id: 'Trcanje', name: 'Jutarnje trcanje', duration: 20, calories: 500, date: new Date(), status: 'Zavrsen'},
        {id: 'Setnja', name: 'Vecernja trcanje', duration: 90, calories: 300, date: new Date(), status: 'Zavrsen'},
        {id: 'Plivanje', name: 'Popodnevno trcanje', duration: 60, calories: 900, date: new Date(), status: 'Zavrsen'},
        {id: 'Trcanje', name: 'Vecernje trcanje', duration: 40, calories: 100, date: new Date(), status: 'Prekinut'},
        {id: 'Setnja', name: 'Jutarnje trcanje', duration: 10, calories: 50, date: new Date(), status: 'Prekinut'}
    ]

    getExercises() {
        return this.exercises;
    }
}