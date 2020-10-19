import React from "react";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./Home.css";
import Search from "../components/Search"
import { useContextValue } from "../services/context";
import { auth } from "../firebase"

export default function Home() {

    const [{ user }, dispatch] = useContextValue()
    const loginToGmail = () => {
        //providing the authentication of google
        // const base_provider = auth.GoogleAuthProvider();

        // //passing this obj as the parameter
        // auth.signInWithPopup(base_provider).then(result => console.log(result)).catch(err => console.log(err))
    }

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/" onClick={loginToGmail}>Gmail</Link>
                    <Link to="/images">Images</Link>
                    <Apps />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                <div className="home__inputContainer">
                    {/* Search Component */}
                    <Search />
                </div>
            </div>
        </div>
    );
}
