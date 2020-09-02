import React from 'react'
import { Mic } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import "./Search.css"
import { Button } from '@material-ui/core'

export default function Search() {
    return (
        <div className="search__box">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" />
                <Mic />
            </div>
            <div className="search__button">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}
