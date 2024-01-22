import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const JoinStudioAndPerson =() =>{
    const [data, setData] = useState([]);
    const [filmTitle, setFilmTitle] = useState('');
    const [filmYear, setFilmYear] = useState('');
    const [shouldFetchDynamic, setShouldFetchDynamic] = useState(false);

    const handleTextAreaChange =(event) =>{
        setFilmTitle(event.target.value);
    }

    const handleInputChange =(event) =>{
        setFilmYear(event.target.value);
    }
    const handleClick=()=>{
        setShouldFetchDynamic(true);
    }


    useEffect(() => {
        const fetchData = async () => {
            const service = new Service(FetchClient);

            try {
                let objects
                if(shouldFetchDynamic){
                    objects = await service.getStudioAndProducerByJoin(filmTitle, filmYear);
                }else{
                    objects = await service.getStudioAndProducerByJoin();
                }
                
                setData(objects);
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchData();
      },[shouldFetchDynamic, filmTitle, filmYear]);


    
    return(
        <div>
            <input type="text" id="filmTitle" name="filmTitle" onChange={handleTextAreaChange} value = {filmTitle}/>
            <input type="number" id="filmYear" name="filmYear" onChange={handleInputChange} value = {filmYear}/>
            <button id='displayButton' onClick={handleClick}>Display</button>

            <table border={1}>
                <thead>
                    <tr>
                        <th scope='col'>Studio Name</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Studio President ID</th>
                        <th scope='col'>Film Producer ID</th>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Producer Address</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Date of Birth</th>
                        <th scope='col'>Income</th>
                        <th scope='col'>Currency</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.studioName}</td>
                            <td>{item.studioAddress}</td>
                            <td>{item.president ? item.president.personId : 'N/A'}</td>
                            <td>{item.personId}</td>
                            <td>{item.fullName}</td>
                            <td>{item.address}</td>
                            <td>{item.gender}</td>
                            <td>{item.dateOfBirth? new Date(item.dateOfBirth).toLocaleDateString(): ''}</td>
                            <td>{item.incomeNet}</td>
                            <td>{item.currency}</td>
                        </tr>
                        ))}
                </tbody>
                

            </table>
            
        </div>

    )
}

export default JoinStudioAndPerson;