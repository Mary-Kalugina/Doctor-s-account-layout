import React, { useState, ChangeEvent } from "react";
import PatientSlot from './PatientSlot';
import './patients.scss';
import { Patient } from '../../interface/patient';

interface PatientsListProps {
    patients: Patient[];
    account: Patient;
    setAccount: (patient: Patient) => void;}

const PatientsList: React.FC<PatientsListProps> = ({ patients, account, setAccount }) => {

    const [choice, setChoice] = useState<boolean>(false);
    const [chosenPatients, setChosenPatients] = useState<Patient[]>([]);
    const [all, setAll] = useState<boolean>(false);
    const [active, setActive] = useState<number | null>(null);

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

    const addBorder = (index: number) => {
       setActive(index);
       setAccount(patients[index]);
    }

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
                   <li key={index} onClick={() => addBorder(index)}>
                    <PatientSlot 
                        img={patient.img} 
                        name={patient.name}
                        icon={patient.icon}
                        isCheckbox={choice}
                        isChecked={chosenPatients.includes(patient)}
                        onChange={() => handlePatientCheckboxChange(index)}
                        border={active === index || patients[index] === account}
                    />
                   </li>
                ))}
            </ul> 
        </div>
      
    )
}

export default PatientsList;
