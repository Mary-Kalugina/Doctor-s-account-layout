import React, {useState} from "react";
import PatientsList from './PatientsList';
import SearchField from "./SearchField";
import './patients.scss';
import data from '../../assets/data';
import { Patient } from '../../interface/patient';

const LeftColumn: React.FC = () => {
    const [patientsList, setPatients] = useState<Patient[]>(data.patients);

    return (                   
        <section className="left-column">
            <SearchField patients={patientsList} changePatients={setPatients}/>
            <PatientsList patients={patientsList}/>
        </section>  
    );
};

export default LeftColumn;
