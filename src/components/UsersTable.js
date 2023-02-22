import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import EditIcon from './icons/EditIcon';
import SaveIcon from './icons/SaveIcon';
import TrashIcon from './icons/TrashIcon';

const CellStyle = {
    fontFamily: 'Rubik',
    color: '#172882',
    fontSize: '16px'
}

export const UsersTable = ({users, deleteUser}) => {

  const formattedRole = (role) => {
    const formattedText = role.replace("'", '"' )
    return formattedText
  }

  return (
        <TableContainer component={Paper} dir="rtl">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={CellStyle} style={{fontWeight: 700}}>שם מנהל</TableCell>
            <TableCell align="right" sx={CellStyle} style={{fontWeight: 700}}>כתובת מייל</TableCell>
            <TableCell align="right" sx={CellStyle} style={{fontWeight: 700}}>תפקיד</TableCell>
            <TableCell align="right" sx={CellStyle} style={{fontWeight: 700}}>פעולות</TableCell>
            <TableCell align="right" sx={CellStyle} style={{fontWeight: 700}}>מחק</TableCell>
          </TableRow>
        </TableHead>
        <TableBody dir="rtl">
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right" sx={CellStyle}>
                {user.name}
              </TableCell>
              <TableCell align="right" sx={CellStyle}>{user.email}</TableCell>
              <TableCell align="right" sx={CellStyle}>{formattedRole(user.role)}</TableCell>
              <TableCell align="right"><IconButton><EditIcon /></IconButton><IconButton><SaveIcon /></IconButton></TableCell>
              <TableCell align="right" onClick={()=> deleteUser(user)}><IconButton><TrashIcon  /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
