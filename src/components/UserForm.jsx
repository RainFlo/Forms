import React, { useState } from 'react'

const UserForm = (props) => {

const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const createUser = (e) => {
    e.preventDefault();
    const newUser = {userName, email, password};
    console.log("Welcome ", newUser);
    setUserName("");
}

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUserName(e.target.value)} value={ userName }/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
};

export default UserForm
