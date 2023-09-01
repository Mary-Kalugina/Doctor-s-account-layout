import React, {useState} from "react";
import LeftColumn from "./components/Patients/LeftColumn";
import PatientAccount from "./components/Account/PatientAccount";
import data from "./assets/data";
import { Patient } from "./interface/patient";

const Main: React.FC = () => {
    const [account, setAccount] = useState<Patient>(data.patients[0])

    return (
        <>
            <LeftColumn account={account}  setAccount={setAccount}/>
            <PatientAccount patient={account} />
        </>
    );
};

export default Main;
