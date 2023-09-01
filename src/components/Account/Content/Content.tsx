import React from "react";
import Consultations from "./Consultations";
import Videoes from "./Videoes";
import Events from "./Events";
import Notes from "./Notes";
import './content.scss';

interface ContentProps {
    navItem: string;
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

const Content: React.FC<ContentProps> = ({ navItem, content }) => {
    return (
        <div className="content-area">
            {navItem === 'Мероприятия' ? (
                <Events events={content.events || []}/>
            ) : navItem === 'Заметки' ? (
                <Notes notes={content.notes || []}/>
            ) : navItem === 'Видео' ? (
                <Videoes videoes={content.videoes || []}/>
            ) : navItem === 'Консультации' ? (
                <Consultations consultations={content.consultations || []}/>
            ) : null}
        </div>
    );
};

export default Content;
