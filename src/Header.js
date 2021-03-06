import React from 'react';
import "./header.css";
import { Link, useHistory } from "react-router-dom";

function Header({ name }) {

   const history = useHistory();

   const nameLocal = JSON.parse(localStorage.getItem("taskManagerUser"))[0]?.toUpperCase();

  const onClickingSubmit=()=>{

    // Delete the local storge information;

    localStorage.setItem("taskManagerUser", JSON.stringify([]))

    history.push("/")

   }

    return (
        <div className="header_1">
            <div className="header">
                <div className="header__title">
                    TASK MANAGER
                    
                </div>
                <div className="header__name">
                    {/* <h1 >HELLO :<span> {name?.toUpperCase()}</span></h1> */}
                    <h1 >HELLO :<span> {nameLocal}</span></h1>
                </div>
            </div>
            <div className="header__signOut">

                <button
                    onClick={onClickingSubmit}
                    className=" b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 "
                    type=""
                    value="Sign Out" >
                        Sign Out

                </button>
            </div>

        </div >
    )
}

export default Header
