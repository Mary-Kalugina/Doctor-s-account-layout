import React, { useState } from "react";
import '../account.scss';

const DropDown: React.FC = () => {
    const [active, setActiveBtn] = useState('');
    const changeActive = (btn: string) => {
        setActiveBtn(btn);
    }
    return (
        <div className="dropdown">
            <button onClick={() => changeActive('edit')} className={`dropdown-edit ${active === 'edit' ? 'dropdown-btn_active' : ''}`} type="button">Изменить</button>
            <button onClick={() => changeActive('delete')} className={`dropdown-delete ${active === 'delete' ? 'dropdown-btn_active' : ''}`} type="button">Удалить</button>
        </div>

    )
}

export default DropDown;