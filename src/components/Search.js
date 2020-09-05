import React, { useState } from 'react'
import { Mic } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import "./Search.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Search() {

    const [input, setInput] = useState("");
    const history = useHistory();
    
    const search = e => {
        e.preventDefault();
        console.log("hi" + input);
        history.push("/search");
    }

    const changeHandler = e => {
        setInput(e.target.value);
    }

    return (
        <form className="search__box" onSubmit={search}>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" onChange={changeHandler} value={input} />
                <Mic />
            </div>
            <div className="search__button">
                <Button variant="outlined" onClick={search}>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}
