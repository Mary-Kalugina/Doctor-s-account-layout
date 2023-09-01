import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Navigation from "./Navigation";
import Content from "./Content/Content";
import { Patient } from '../../interface/patient';
import './account.scss';

interface PatientAccountProps {
    patient: Patient;
}

const PatientAccount: React.FC<PatientAccountProps> = ({ patient }) => {
    const [contentType, setContent] = useState("Заметки");

    return (
        <section className="patient-account">
            <ProfileHeader
                name={patient.name}
                patronymic={patient.patronymic}
                img={patient.img}
                age={patient.age}
                sex={patient.sex}
            />
            <Navigation navItem={contentType} onChangeItem={setContent} />
            <Content navItem={contentType} content={patient.content} />
        </section>
    );
}

export default PatientAccount;
