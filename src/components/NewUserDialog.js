
import React, {useState} from 'react';
import { Dialog, Grid, DialogContent, TextField, FormGroup, MenuItem, InputAdornment } from '@mui/material';
import Typography from "@mui/material/Typography";
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ChevronIcon from './icons/ChevronIcon';


import styled from 'styled-components';
import { BorderButton } from './DashboardContainer';




const ROLE_OPTIONS = ["סמנכ'ל רפואה", "סמנכ'ל מא", "סמנכ'ל תפעול", "מנהל רפואה", "ס. מנכ'ל רפואה", "מנהל תפעול", "רפואה"]


export default function NewUserDialog(props) {
    const { setOpenDialog, open, addNewUser } = props;
    const [error, setError] = useState(false)

    const [form, setForm] = useState({
        name: '', role: '', email: '', acceptingRole: ''
    })

    const handleChange = e => {
        setError(false)
        setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const canAddUser = () => {
        // would add some validation for hebrew letters and email regex
        return form.name && form.role && form.email && form.acceptingRole
    }


    const tryAddNewForm = () => {
        if (canAddUser())
            addNewUser(form)
        else
            setError(true)
    }
    

    return (
        <Dialog
                onClose={()=> setOpenDialog(false)}
                open={open}
                PaperProps={{ style: {
                    width:  '485px',
                    height: '558px',
                   }
                }}
                sx={{padding: '16px'}}
                >
            <DialogTitle >
                <Grid item container alignItems='center' >
                    <Grid item container alignItems='center' justifyContent='flex-end' >
                        <IconButton 
                        sx={{color: '#3D405A'}}
                        onClick={()=> setOpenDialog(false)}>
                            <CloseIcon />
                        </IconButton>
                     </Grid>
                    <Grid item container alignItems='center' justifyContent='center'>
                        <Typography sx={{color: '#172882', fontFamily: 'Rubik', fontSize: '24px', fontWeight: 700}}>
                            גורם מאשר חדש
                        </Typography>
                    </Grid>
                    
                </Grid>
            </DialogTitle>
                    <DialogContent>
                        <Grid item container direction='column' alignItems='center' justifyContent='center'>
                            <FormGroup>
                                <TextField 
                                    onChange={handleChange}
                                    placeholder="שם מלא*"
                                    variant='outlined'
                                    required
                                    dir="rtl"
                                    name='name'
                                    value={form.name}
                                    style={{ width: '374px'}}
                                    inputProps={{style: {
                                        fontWeight: 400, marginRight: '30px', WebkitBoxShadow: "0 0 0 1000px white inset",
                                    }}}
                                    InputProps={{
                                        style: {borderRadius: '40px', height: '50px',}}}
                                    InputLabelProps={{style: {color: '#757575', fontWeight: 400, fontSize: '13px'}}}
                                />
                                <TextField 
                                    onChange={handleChange}
                                    placeholder="תפקיד*"
                                    variant='outlined'
                                    required
                                    dir="rtl"
                                    name='role'
                                    value={form.role}
                                    style={{ width: '374px', marginTop: '15px'}}
                                    inputProps={{style: {
                                        fontWeight: 400, marginRight: '30px', WebkitBoxShadow: "0 0 0 1000px white inset",
                                    }}}
                                    InputProps={{
                                        style: {borderRadius: '40px', height: '50px',}}}
                                    InputLabelProps={{style: {color: '#757575', fontWeight: 400, fontSize: '13px'}}}
                                />
                                <TextField 
                                    onChange={handleChange}
                                    placeholder="כתובת מייל*"
                                    variant='outlined'
                                    required
                                    dir="rtl"
                                    name='email'
                                    value={form.email}
                                    style={{ width: '374px', marginTop: '15px'}}
                                    inputProps={{style: {
                                        fontWeight: 400, marginRight: '30px', WebkitBoxShadow: "0 0 0 1000px white inset",
                                    }}}
                                    InputProps={{
                                        style: {borderRadius: '40px', height: '50px'}}}
                                    InputLabelProps={{style: {color: '#757575', fontWeight: 400, fontSize: '13px'}}}
                                />
                                 <TextField
                                    name='acceptingRole'
                                    variant='outlined'
                                    placeholder="תפקיד שהגורם המאשר צריך לאשר*"
                                    select
                                    dir="rtl"
                                    value={form.acceptingRole}
                                    onChange={handleChange}
                                    SelectProps={{ IconComponent: () => null }}
                                    sx={{width: '374px', marginTop: '15px'}}
                                    InputProps={{
                                        startAdornment: null,
                                        endAdornment: <InputAdornment position="start" style={{marginLeft: '10px'}}><ChevronIcon color='#172882' opacity={1} /></InputAdornment>,
                                        style: {borderRadius: '40px', height: '50px'}}}
                                    InputLabelProps={{style: {color: '#757575', fontWeight: 400, fontSize: '13px'}}}
                                >
                                    {ROLE_OPTIONS.map((role, i) => (
                                     <MenuItem key={i} value={role}>
                                        <Typography align='right' sx={{width: '100%'}}>{role}</Typography>
                                     </MenuItem>
                                ))}
                                </TextField> 
                            <SaveButton onClick={tryAddNewForm}>אישור</SaveButton>
                            {error && <Typography sx={{color: 'red', fontSize: '12px', marginLeft: '10px', marginTop: '-10px'}}>All fields should be filled </Typography> }
                            <BorderButton cancel onClick={()=>setOpenDialog(false)}>ביטול</BorderButton>
                            </FormGroup>
                        </Grid>

                    </DialogContent>
        </Dialog>
    )
}

const SaveButton = styled.button`
background: linear-gradient(90deg, rgba(141,95,245,1) 0%, rgba(83,182,230,1) 35%);
border-radius: 40px;
border: 1px solid white;
color: white;
height: 50px;
width: 374px;
font-size: 18px;
font-family: Rubik;
font-weight: 700;
cursor: pointer;
margin-top: 41px;
margin-bottom: 15px
`



