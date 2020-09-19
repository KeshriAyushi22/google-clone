import React, { useState } from 'react'
import { Mic } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import "./Search.css"
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { recognition } from "../services/speechUtil"

export default function Search({ hideButton = false }) { //default value

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


    const micClicked = async () => {
        //taking the object and starting it
        const isInitiated = await recognition.start()

        if (isInitiated)
            document.querySelector('input').innerHTML = recognition.onresult()

    }

    return (
        <form className="search__box" onSubmit={search}>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" onChange={changeHandler} value={input} />
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
