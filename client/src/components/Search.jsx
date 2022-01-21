import React from 'react'

export default function Search(){

    return(
        <div>
            <input className='search' placeholder='Search your Pokemon' />
            <select>
                <option> Order by </option>
                <option value='asc'> Ascending </option>
                <option value='desc'> Descending </option>
            </select>
            <select>
                <option > Pokemon Type </option>
                <option value='normal'> Normal </option>
                <option value='fighting'> Fighting </option>
                <option value='flying'> Flying </option>
                <option value='poison'> Poison </option>
                <option value='ground'> Ground </option>
                <option value='rock'> Rock </option>
                <option value='bug'> Bug </option>
                <option value='ghost'> Ghost </option>
                <option value='steel'> Steel </option>
                <option value='fire'> Fire </option>
                <option value='water'> Water </option>
                <option value='grass'> Grass </option>
                <option value='electric'> Electric </option>
                <option value='psychic'> Psychic </option>
                <option value='ice'> Ice </option>
                <option value='dragon'> Dragon </option>
                <option value='dark'> Dark </option>
                <option value='fairy'> Fairy </option>
                <option value='unknown'>  Unknown </option>
                <option value='shadow'> Shadow </option>
            </select>
            <select>
                <option>Created by </option>
                <option> Created by the database </option>
                <option> Created by you </option>
            </select>
        </div>
    )
}