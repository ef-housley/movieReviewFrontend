import React from "react";
import FilmList from "../component/FilmList";

export const Home =() =>{
    return(
        <div>
            <h3>This is exercise nr. 3A. The films are filtered and printed by their type and are ordered ASC by year and title.</h3>
            <FilmList/>
        </div>
    );
}