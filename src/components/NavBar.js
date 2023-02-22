import React from 'react'
import styled from 'styled-components'
import avatar from './icons/avatar.png'
import ChevronIcon from './icons/ChevronIcon'

const links = ['גורמים מאשרים', 'הרשאות', 'מרפאות ותפקידים', 'מסמכים וטפסים', 'ערכות קליטה']

const NavBar = () => {
  return (
   <AppBar>
    <div style={{width: '30%', display: 'flex', alignItems: 'center'}}>
            <div style={{marginLeft: '80px'}}>
                <ChevronIcon />
            </div>
        <div style={{marginLeft: '20px', padding: '100px 0'}}>
            <p style={{margin: 0, color: '#FFFFFF', fontSize: '18px', fontWeight: 700}}>
                ישראל אברהמסון-לוי
            </p>
            <p style={{margin: 0, color: '#FFFFFF', fontSize: '14px'}}>
                משתמש מערכת
            </p>
        </div>
        <div style={{marginLeft: '10px'}}>
            <img src={avatar} alt='avatar' height='50px' />
        </div>
    </div>
    <div style={{width: '70%', display: 'flex'}}>
            {links.map((link, i) => (
                <NavigationLink id={i}>
                    {link}
                </NavigationLink>
            ))}

    </div>
   </AppBar>
  )
}

const AppBar = styled.section`
height: 81px;
background: linear-gradient(90deg, rgba(141,95,245,1) 0%, rgba(83,182,230,1) 35%);
width: 85%;
display: flex;
`

const NavigationLink = styled.li`
  font-family: Rubik;
  list-style-type: none;
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  align-items: center;
  width: 100%;
  font-weight: 400;
  opacity: .6;
`



export default NavBar