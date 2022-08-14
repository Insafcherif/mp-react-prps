import React from 'react';
import CardUser from './CardUser';
import Box from '@mui/material/Box';


function ListoOfUsers(props) {
    const { users, nameofadmin, handleName, children } = props;
    return (
       <>
           <h1>Name of admin  : {nameofadmin}</h1>
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-around', 
      flexDirection: 'row',
      '& > :not(style)': {
        m: 1,
        width: 500,
        height:400 ,
      },
    }}
  > 
     
      {users.map((user) => (
        <CardUser key={user.id}  user={user} handleName={handleName} children={children}/>
      ))}
      </Box>
     

</>    )
}

export default ListoOfUsers