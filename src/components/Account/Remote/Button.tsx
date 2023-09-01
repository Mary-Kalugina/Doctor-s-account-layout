import React from "react";
import '../account.scss';

interface BtnProps {
    dropdown: boolean;
    dropController: (item: boolean) => void;
  }

const Button: React.FC<BtnProps> = ({ dropdown, dropController}) => {
    const toggleDropdown = () => {
        dropController(!dropdown);
    }

    return <button onClick={toggleDropdown} className="actions-button" type="button"><img src='./images/dot.svg'/></button>
}

export default Button;
