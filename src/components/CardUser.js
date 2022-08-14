import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


function CardUser({ user, handleName,  children}) {
    const handleclick =()=> {
        handleName(user)
    }
    return (

        <Paper elevation={10} >
            <Avatar alt={user.fullname} src={user.image} sx={{ width: 56, height: 56 }}  /> 
            <h2> {user.fullname}</h2>
            <h3>  {user.bio}</h3>
            <h3> Email : {user.email}</h3>
            <h3> Profession : {user.profession}</h3>
            <Button variant="contained" onClick={handleclick}>Show my name</Button>
            {children}
        </Paper>
    )
}

export default CardUser