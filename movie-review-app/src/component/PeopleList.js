import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const PeopleList =() =>{
    const defaultSelectedValue = 'USD';
    const [people, setPeople] = useState([]);
    const [selectedValue, setSelectedValue] = useState(defaultSelectedValue);
    const [enteredNumber, setEnteredNumber] = useState('');
    const [shouldFetchDynamic, setShouldFetchDynamic] = useState(false);


    const handleDropdownChange =(event) =>{
        setSelectedValue(event.target.value);
    }

    const handleInputChange =(event) =>{
        setEnteredNumber(event.target.value);
    }

    const handleClick=()=>{
        setShouldFetchDynamic(true);
    }


    useEffect(() => {
        const fetchData = async () => {
            const service = new Service(FetchClient);
        
            try {
              let people;
              if (shouldFetchDynamic) {
                people = await service.getPersonsByIncomeAndCurrency(enteredNumber, selectedValue);
              } else {
                people = await service.getAllPeople();
              }
              setPeople(people);
            } catch (error) {
              console.error(error);
            }
          };


        fetchData();
      }, [shouldFetchDynamic]);


    
    return(
        <div>
            <input type="number" id="income" name="income" onChange={handleInputChange} value = {enteredNumber}/>

            <select id='currencySelection' name='currencySelection' onChange={handleDropdownChange} value ={selectedValue}>
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="RON">RON</option>
            </select>

            <button id='displayButton' onClick={handleClick}>Display</button>
            
            <table border={1}>
                <thead>
                    <tr>
                        <th scope='col'>Person ID</th>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Date of Birth</th>
                        <th scope='col'>Income</th>
                        <th scope='col'>Currency</th>
                    </tr>
                </thead>
                {people.map((person, index)=>(
                <tbody>
                    <tr key={index}>
                        <td>{person.personId}</td>
                        <td>{person.fullName}</td>
                        <td>{person.address}</td>
                        <td>{person.gender}</td>
                        <td>{person.dateOfBirth? new Date(person.dateOfBirth).toLocaleDateString(): ''}</td>
                        <td>{person.incomeNet}</td>
                        <td>{person.currency}</td>
                    </tr>
                </tbody>
                ))}
            </table>
            
        </div>

    )
}

export default PeopleList;