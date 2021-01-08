import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    // UseEffect will be triggered every time the component is called
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        setTimeout(() => { 
            alert("saved data to cloud!");
        }, 1000);
        return () => {
            console.log("[Cockpit.js] cleanup work in useEffect")
        }
    }, [props.persons]) // unless specific properties are listed - you can also have an empty array so it is only rendered once

    const assignedClasses = [];
    let btnClasses = "";

    if(props.showPersons) {
        btnClasses = classes.Red;
    }

    if(props.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length < 2) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnClasses} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;