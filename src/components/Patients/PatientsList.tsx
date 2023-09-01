import React, { useState, ChangeEvent } from "react";
import PatientSlot from './PatientSlot';
import './patients.scss';
import { Patient } from '../../interface/patient';

interface PatientsListProps {
    patients: Patient[];
}

const PatientsList: React.FC<PatientsListProps> = ({ patients }) => {

    const [choice, setChoice] = useState(false);
    const [chosenPatients, setChosenPatients] = useState<Patient[]>([]);
    const [all, setAll] = useState(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setChosenPatients(patients);
            setAll(true);
        } else {
            setChosenPatients([]);
            setAll(false);
        }
    };

    const handlePatientCheckboxChange = (index: number) => {
        const updatedChosenPatients = [...chosenPatients];
        if (!updatedChosenPatients.includes(patients[index])) {
            updatedChosenPatients.push(patients[index]);
        } else {
            const patientIndex = updatedChosenPatients.indexOf(patients[index]);
            updatedChosenPatients.splice(patientIndex, 1);
        }
        setChosenPatients(updatedChosenPatients);
        setAll(updatedChosenPatients.length === patients.length);
    };

    const changeChoice = () => {
        setChoice(!choice);
        setChosenPatients([]);
        setAll(false);
    };

    return (
        <div className="patients-list">
            <div className="wrapper">
                {choice 
                ? (
                    <div>
                        <label>
                            <input
                                className='patient-slot-checkbox'
                                type="checkbox"
                                onChange={handleCheckboxChange}
                                checked={all}
                            />
                            <span className="patient-slot-custom-checkbox">{ all ? <img src='./images/tick.svg' /> : '' }</span>
                            Все
                        </label>
                        <div className='patients-counter'><p>{chosenPatients.length}</p></div>
                    </div>
                ) 
                : <div className='patients-counter total'><p>{patients.length}</p></div>
                }
                {choice 
                ? (
                    <div className="wrapper-actions">
                        <div className='patients-list-action'>Действия</div>
                        <div className='patients-list-action' onClick={changeChoice}>Отменить</div>
                    </div> 
                ) 
                : <div className='patients-list-action' onClick={changeChoice}>Выбрать</div>}
            </div>
            <ul>
                {patients?.map((patient, index: number) => (
                   <li key={index}>
                    <PatientSlot 
                        img={patient.img} 
                        name={patient.name}
                        icon={patient.icon}
                        isCheckbox={choice}
                        isChecked={chosenPatients.includes(patient)}
                        onChange={() => handlePatientCheckboxChange(index)}
                    />
                   </li>
                ))}
            </ul> 
        </div>
      
    )
}

export default PatientsList;
