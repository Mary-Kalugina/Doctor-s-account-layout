import React from "react";
import LeftColumn from "./components/Patients/LeftColumn";
import PatientAccount from "./components/Account/PatientAccount";
import data from "./assets/data";

const Main: React.FC = () => {
    return (
        <>
            <LeftColumn />
            <PatientAccount patient={data.patients[0]} />
        </>
    );
};

export default Main;
