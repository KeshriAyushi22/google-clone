import React, { useState } from 'react'
import { Mic } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import "./Search.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContextValue } from '../services/context';
import { actionTypes } from '../services/reducer';


export default function Search({ hideButton = false }) { //default value
    const [input, setInput] = useState("");
    const [{ }, dispatch] = useContextValue()
    const history = useHistory();

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition();
    recognition.onstart = () => {
        console.log("starting to listen the voice")
    }

    recognition.onresult = (e) => {
        const index = e.resultIndex
        const data = e.results[index][0].transcript
        console.log(data, document)

        //show on browser search bar and set the same data for search
        document.getElementById('searchbar').innerHTML = data
        setInput(data)

    }


   const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search");
    }

    const changeHandler = e => {
        setInput(e.target.value);
    }

    const micClicked = async () => {
        //taking the object and starting it
        recognition.start()

    }

    return (
        <form className="search__box" onSubmit={search}>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input id="searchbar" type="text" onChange={changeHandler} value={input} />
                <Mic className="search__mic" onClick={micClicked} />
            </div>

            {!hideButton ? (
                <div className="search__button">
                    <Button variant="outlined" type="submit" onClick={search}>
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                    <div className="search__buttonHide">
                        <Button variant="outlined" type="submit" onClick={search}>
                            Google Search
                        </Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}
        </form>
    );






}
