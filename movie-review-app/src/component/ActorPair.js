import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const ActorPair =() =>{
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const service = new Service(FetchClient);

            try {
                let object = await service.getActorPairs();
                setData(object);
            } catch (error) {
              console.error(error);
            }
          };
          
          fetchData();
      },[]);

      if (!data || data.length < 2 || data[0].length !== 2 || data[1].length !== 2) {
        return <p>No valid data available</p>;
      }
    
      let actor1 = data[0][0];
      let actor2 = data[0][1];
    
      let actor3 = data[1][0];
      let actor4 = data[1][1];

    
    return(
        <div>

            <div>
                <p>
                    The pair of Actors id is  : {actor1} and {actor2}
                    </p>
                    <p>
                    The pair of Actors id is  : {actor3} and {actor4}
                </p>
            </div>


            
        </div>

    )
}

export default ActorPair;