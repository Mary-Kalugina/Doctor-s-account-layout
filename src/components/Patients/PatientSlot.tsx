import React from "react";

interface PatientProps {
    img: string;
    name: string;
    icon: string;
    isCheckbox: boolean;
    isChecked: boolean;
    onChange: () => void;
    border: boolean;
}

const PatientSlot: React.FC<PatientProps> = ({ img, name, icon, isCheckbox, isChecked, onChange, border }) => {

    return (                  
        <div className="patient-slot slot" style={border ? {backgroundColor: '#F1F2F3'} : {}}>
            {isCheckbox ? (
                <label>
                    <input
                        className='patient-slot-checkbox'
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                    />
                    <span className="patient-slot-custom-checkbox">{ isChecked ? <img src='./images/tick.svg' /> : '' }</span>
                </label>
            ) : ''}
            <img className='patient-slot-img' src={img} alt="Patient" />
            <div className='patient-slot-name'>{name}</div>
            {icon ? <img src={icon} className="patient-slot-icon" alt="Icon"></img> : ''}
        </div>  
    );
};

export default PatientSlot;
