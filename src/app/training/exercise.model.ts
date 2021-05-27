export interface Exercise { // Da bi fajl postao public
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date; // ? - oznacava da polje nije obavezno
    status?: 'Zavrsen' | 'Prekinut' | null;
}