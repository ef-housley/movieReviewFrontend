import React,{useState, useEffect} from 'react';

import Service from '../api/Service';
import FetchClient from '../api/FetchClient';

const FilmList =() =>{
    const [films, setFilms] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange =(event) =>{
        setSelectedValue(event.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
          const service = new Service(FetchClient);
      
          try {
            let films;
            if (!selectedValue || selectedValue === 'all') {
              films = await service.getAllFilms();
            } else {
              films = await service.getFilmsByType(selectedValue);
            }
            setFilms(films);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [selectedValue]);
      

    return(
        <div>

            <select id='typeSelection' name='typeSelection' onChange={handleDropdownChange} value ={selectedValue}>
                <option value="all" selected>All Types</option>
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option value="SF">SF</option>
                <option value="CHILDREN">Children</option>
                <option value="HORROR">Horror</option>
            </select>
            
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

export default FilmList