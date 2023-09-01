import React, {useState} from "react";
import Remote from '../Remote/Remote';
import './content.scss';

interface NoteInfo {
    time: string;
    text: string;
    img?: string;
}
    
interface NotesProps {
    notes: NoteInfo[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
    const [dropdownStates, setDropdownStates] = useState(notes.map(() => false));

    const toggleDropdown = (index: number) => {
        const newDropdownStates = [...dropdownStates];
        newDropdownStates[index] = !newDropdownStates[index];
        setDropdownStates(newDropdownStates);
    };

    return (
        <ul className="notes">
            {notes.map((obj, index) => (
                <li key={index}>
                    <div className="note">
                        <div className="note-content">
                            
                            <div className="note-text"><div className="note-time">{obj.time}</div>{obj.text}</div>
                            <Remote dropdown={dropdownStates[index]} dropController={() => toggleDropdown(index)} />
                        </div>
                        <img className="note-img" src={obj.img} alt="" />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Notes;