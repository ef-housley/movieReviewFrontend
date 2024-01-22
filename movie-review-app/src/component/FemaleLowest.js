import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const FemaleLowest =() =>{
    const [female, setFemale] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const service = new Service(FetchClient);
      
          try {
            let result= await service.getFemaleWithTheLowestIncome();
            setFemale(result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      },[]);
      

    return(
        <div>          
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
                {female &&(
                <tbody>
                    <tr>
                        <td>{female.personId}</td>
                        <td>{female.fullName}</td>
                        <td>{female.address}</td>
                        <td>{female.gender}</td>
                        <td>{female.dateOfBirth? new Date(female.dateOfBirth).toLocaleDateString(): ''}</td>
                        <td>{female.incomeNet}</td>
                        <td>{female.currency}</td>
                    </tr>
                </tbody>
                )}
            </table>
            
        </div>

    )
}

export default FemaleLowest