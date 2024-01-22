import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const FilmDuration =() =>{
    const [films, setFilms] = useState([]);
    const [enteredNumber, setEnteredNumber] = useState('');

    const handleInputChange =(event) =>{
        setEnteredNumber(event.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
          const service = new Service(FetchClient);
      
          try {
            let films;
                films = await service.getFilmsByDuration(enteredNumber);
            setFilms(films);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [enteredNumber]);
      

    return(
        <div>
            
            <input type="number" id="income" name="income" onChange={handleInputChange} value = {enteredNumber}/>

            <table border={1}>
                <thead>
                    <tr>
                        <th scope='col'>Film ID</th>
                        <th scope='col'>Film Title</th>
                        <th scope='col'>The Year</th>
                        <th scope='col'>Duration</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Studio</th>
                        <th scope='col'>Producer ID</th>
                    </tr>
                </thead>
                {films.map((film)=>(
                <tbody>
                    <tr>
                        <td>{film.filmId}</td>
                        <td>{film.filmTitle}</td>
                        <td>{film.filmYear}</td>
                        <td>{film.filmDuration}</td>
                        <td>{film.filmType}</td>
                        <td>{film.studio}</td>
                        <td>{film.producer.personId}</td>
                    </tr>
                </tbody>
                ))}
            </table>
            
        </div>

    )
}

export default FilmDuration