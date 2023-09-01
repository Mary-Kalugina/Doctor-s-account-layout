import React, {useState} from "react";
import PatientsList from './PatientsList';
import SearchField from "./SearchField";
import './patients.scss';
import data from '../../assets/data';
import { Patient } from '../../interface/patient';

interface Props {
    account: Patient;
    setAccount: (patient: Patient) => void;}

const LeftColumn: React.FC<Props> = ({account, setAccount}) => {
    const [patientsList, setPatients] = useState<Patient[]>(data.patients);

    return (                   
        <section className="left-column">
            <SearchField patients={patientsList} changePatients={setPatients}/>
            <PatientsList patients={patientsList} account={account} setAccount={setAccount}/>
        </section>  
    );
};

export default LeftColumn;
