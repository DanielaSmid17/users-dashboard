import React, { useState } from 'react'
import styled from 'styled-components'
import ChevronIcon from './icons/ChevronIcon'
import {TextField, InputAdornment, Button, Snackbar} from '@mui/material'
import MagnifyingIcon from './icons/MagnifyingIcon'
import usersData from '../data/users.json'
import { UsersTable } from './UsersTable'
import NewUserDialog from './NewUserDialog'


const DashboardContainer = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState(usersData)
    const [openDialog, setOpenDialog] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState(users)
    const [message, setMessage] = useState({open: 'false', message: ''})

    const addNewUser = (newUser) => {
      setOpenDialog(false)
      const usersCopy = [...users]
      usersCopy.unshift(newUser)
      setUsers(usersCopy)
      setFilteredUsers(usersCopy)
      setMessage((prevState) => ({ ...prevState, open: true, message: 'User has been added!' }))

    }

    const onSearch = (e) => {
        const usersCopy = [...users]
        setSearch(e.target.value)
        const filtered = usersCopy.filter(o =>
            Object.keys(o).some(i => o[i].toLowerCase().includes(e.target.value.toLowerCase())));
        setFilteredUsers(filtered)

    }

    const deleteUser = (user) => {
      const usersCopy = [...users]
      const idx = usersCopy.indexOf(user)
      usersCopy.splice(idx, 1)
      setUsers(usersCopy)
      setFilteredUsers(usersCopy)
      setSearch('')
      setMessage((prevState) => ({ ...prevState, open: true, message: 'User has been deleted!' }))
    }

  return (
    <MainContainer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
          <div style={{width: '200px', alignItems: 'center', marginRight: '71px', marginTop: '48.5px'}}>
            <p style={{margin: 0, fontSize: '18px', color: '#172882', float: 'right', marginRight: '12px'}}>הגדרות</p>
            <div style={{display: 'flex', width: '200px', alignItems: 'center', justifyContent: 'right', marginRight: '71px'}}>
              <p style={{margin: 0, fontSize: '28px', color: '#172882', fontWeight: 700}}>הגדרות</p>
              <span style={{transform: 'rotate(-90deg)', width: '10px', height: '20px'}}>
                <ChevronIcon color='#172882' strokeOpacity={1}  />
              </span>
            </div>
          </div>
        </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 65px'}}>
              <BorderButton onClick={()=> setOpenDialog(true)}>
                הסופת גורם מאשר  חדש + 
              </BorderButton>
              <TextField 
                onChange={onSearch}
                placeholder='חיפוש משתמש'
                variant='outlined'
                dir="rtl"
                value={search}
                style={{ width: '337px'}}
                inputProps={{style: {
                          fontWeight: 400
                          }}}
                InputProps={{
                    endAdornment: <InputAdornment position="start" style={{marginLeft: '10px'}}><MagnifyingIcon /></InputAdornment>,
                    style: {borderRadius: '40px', height: '50px'}}}
                InputLabelProps={{style: {color: '#757575', fontWeight: 400, fontSize: '13px'}}}
                />
          </div>
          <div style={{padding: '10px 70px'}}>
            <UsersTable users={filteredUsers} deleteUser={deleteUser} />
          </div>
          {openDialog && <NewUserDialog open={openDialog} setOpenDialog={setOpenDialog} addNewUser={addNewUser} />}
          <Snackbar
                open={message.open}
                autoHideDuration={3000}
                onClose={()=>setMessage((prevState) => ({ ...prevState, open: false }))}
                message={message.message}
            />
    </MainContainer>
  )
}

const MainContainer = styled.div`
background-color: #F0F2F5;
width: 85%;
min-height: calc(100vh - 81px)
`
export const BorderButton = styled.button`
background: 
linear-gradient(${props => props.cancel ? "#fff" : "#F0F2F5"}, ${props => props.cancel ? "#fff" : "#F0F2F5"}) padding-box,
linear-gradient(90deg, rgba(141,95,245,1) 0%, rgba(83,182,230,1) 35%) border-box;
border: 2px solid transparent;
border-radius: 40px;
display: inline-block;
font-size: 28px;
cursor: pointer;
height: 50px;
width: ${props => props.cancel ? "374px" : "243px"};
font-family: Rubik;
font-size: 18px;
font-weight: 400;
color: #172882;


`



export default DashboardContainer