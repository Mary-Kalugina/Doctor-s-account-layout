import React, { useState } from "react";
import './content.scss';

interface ConsultationInfo {
    type: string;
    typeName: string;
    date: string;
    note: string;
}

interface ConsultationsProps {
    consultations: ConsultationInfo[];
}

const Consultations: React.FC<ConsultationsProps> = ({ consultations }) => {
    const [clicked, setClicked] = useState<number | null>(null);

    const onChange = (index: number) => {
        setClicked(index === clicked ? null : index);
    }

    return (
        <ul className="consultations">
            {consultations.map((info, index) => {
                const imgSrc = info.type === 'video' ? './images/camera.svg' : './images/meeting.svg';

                return (
                    <li key={index}>
                        <div className={`consultation ${clicked === index ? 'consultation-active' : ''}`} onClick={() => onChange(index)}>
                            <img 
                                className={`consultation-img ${clicked === index ? 'consultation-active-img' : ''}`}
                                src={imgSrc}
                                alt={`Consultation ${info.type}`}
                            />
                            <div className="consultation-wrapper">
                                <div className="consultation-type">{info.typeName}</div>
                                <div className="consultation-date">{info.date}</div> 
                            </div>
                            <div className="consultation-note">{info.note}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Consultations;
