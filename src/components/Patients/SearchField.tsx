import React, { useState } from "react";
import './patients.scss';
import { Patient } from '../../interface/patient';

interface SearchFieldProps {
  patients: Patient[];
  changePatients: (newPatients: Patient[]) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ patients, changePatients }) => {
  const [active, setBorder] = useState(false);
  const [defaultArr] = useState([...patients]);
  const [searchValue, setSearchValue] = useState("");

  const changeBorder = (value: boolean) => {
    setBorder(value);
  }

  const sortPatients = () => {
    const newArr = [...patients];
    newArr.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    changePatients(newArr);
  }

  const filter = (value: string) => {
    setSearchValue(value);
    const newArr = value !== '' ? patients.filter((patient) => {
      return patient.name.toLowerCase().includes(value.toLowerCase());
    }) : defaultArr;
    changePatients(newArr);
  }

  const clearInputAndReset = () => {
    setSearchValue("");
    changePatients(defaultArr); 
    changeBorder(false); 
  }

  return (
    <div className="search-field slot">
      <div className="search-field-container">
        <input
          onClick={() => changeBorder(true)}
          className='search-field-input'
          onChange={(e) => filter(e.target.value)}
          value={searchValue}
        />
        <button className={`search-field-search-btn ${active ? 'active' : ''}`}>
          <img src='./images/search.svg' />
        </button>
      </div>
      <div className="search-field-btns">
        {active
          ? <button onClick={clearInputAndReset} className="search-field-close-btn"><img src='./images/add.svg' /></button>
          : <>
            <button onClick={sortPatients} className="search-field-filtre-btn"><img src='./images/sort.svg' /></button>
            <button className="search-field-add-btn"><img src='./images/add.svg' /></button>
          </>
        }
      </div>
    </div>
  )
}

export default SearchField;
