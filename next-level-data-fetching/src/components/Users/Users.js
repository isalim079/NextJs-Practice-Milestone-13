import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => {
            res.json()
        })
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Users;