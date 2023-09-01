import React from "react";
import '../account.scss';
import Button from "./Button";
import DropDown from "./Dropdown";

interface RemoteProps {
    dropdown: boolean;
    dropController: (item: boolean) => void;
  }

const Remote: React.FC<RemoteProps> = ({ dropdown, dropController}) => {
    return (
    <div className="remote-wrapper">
        <Button dropdown={dropdown} dropController={dropController}/>
        {dropdown ? <DropDown/> : null}
    </div>
        
    )
}

export default Remote;