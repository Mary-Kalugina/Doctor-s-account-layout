export interface Patient {
    name: string;
    patronymic: string;
    img: string;
    icon: string;
    age: number;
    sex: string;
    content: {
        notes?: Array<{
            time: string;
            text: string;
            img: string;
        }>;
        videoes?: Array<{
            img: string;
            name: string;
            author: string;
            date: string;
        }>;
        events?: Array<{
            img: string;
            name: string;
            date: string;
            type: string;
            time: string;
        }>;
        consultations?: Array<{
            type: string;
            typeName: string;
            date: string;
            note: string;
        }>;
    };
}