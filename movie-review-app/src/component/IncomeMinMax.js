import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const IncomeMinMax =() =>{
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const service = new Service(FetchClient);

            try {
                let object = await service.getMinMaxIncome();
                setData(object);
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchData();
      },[]);

    let incomeMin = data.CastigMinim;
    let incomeMax = data.CastigMaxim;

    
    return(
        <div>

            <div>
                <p>
                    The MAXIMUM INCOME for studio Presidents is : {incomeMax}
                    </p>
                    <p>
                    The MINIMUM INCOME for studio Presidents is : {incomeMin}
                </p>
            </div>


            
        </div>

    )
}

export default IncomeMinMax;