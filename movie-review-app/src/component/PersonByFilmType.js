import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const PersonByFilmType =() =>{
    const [data, setData] = useState([]);
    const [personIdEnteredNumber, setPersonIdEnteredNumber] = useState('');
    const [filmTypeEnteredValue, setFilmTypeEnteredValue] = useState('');
    const [shouldFetchDynamic, setShouldFetchDynamic] = useState(false);

    const handleTextInputChange =(event) =>{
        setFilmTypeEnteredValue(event.target.value);
    }

    const handleInputChange =(event) =>{
        setPersonIdEnteredNumber(event.target.value);
    }
    const handleClick=()=>{
        setShouldFetchDynamic(true);
    }


    useEffect(() => {
        const fetchData = async () => {
            const service = new Service(FetchClient);

            try {
                let object
                if(shouldFetchDynamic){
                    object = await service.getPersonWithFilmType(personIdEnteredNumber, filmTypeEnteredValue);
                }
                setData(object);
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchData();
      },[shouldFetchDynamic]);

      let filmNumber;

      if (data && data.length >= 2) {
        filmNumber = data[1];
      } else {
        filmNumber = 0;
      }

    
    return(
        <div>
            
            <input type="number" id="personId" placeholder='person_id' onChange={handleInputChange} value = {personIdEnteredNumber}/>
            <input type="text" id="filmType" placeholder='FILM TYPE' onChange={handleTextInputChange} value = {filmTypeEnteredValue}/>
            <button id='displayButton' onClick={handleClick}>Display</button>

            <div>
                <p>
                    The person with Id {personIdEnteredNumber} has {filmNumber} films with type {filmTypeEnteredValue}.
                </p>
            </div>


            
        </div>

    )
}

export default PersonByFilmType;