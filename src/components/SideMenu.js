import React from 'react'
import styled from 'styled-components'
import CandidatesIcon from './icons/CandidatesIcon'
import Logo from './icons/Logo'
import ManagementIcon from './icons/ManagementIcon'
import RequestIcon from './icons/RequestIcon'
import SettingsIcon from './icons/SettingsIcon'
import UsersIcon from './icons/UsersIcon'
import ExitIcon from './icons/ExitIcon'


const links = [
  {icon: <UsersIcon />, legend: 'סטטוס מועמדים'},
  {icon: <RequestIcon />, legend: 'שליחת ערכה חדשה'},
  {icon: <CandidatesIcon />, legend: 'מועמדים'},
  {icon: <SettingsIcon />, legend: 'הגדות'},
  {icon: <ManagementIcon />, legend: 'ניהול דף נחיתה'}
]

const SideMenu = () => {
  return (
    <MainContainer>
      <div style={{height: '80px', marginTop: '20px'}}>
        <Logo />
      </div>
      <div style={{   height: '80%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                      }}>
        <div>
        {links.map((link, i) => (
          <>
            <NavigationLink id={i}>
              <span style={{marginRight: '10px'}}>{link.legend}</span>{link.icon}
            </NavigationLink>
          </>
          
          ))}
          </div>
      </div>
          <div style={{display: 'flex',
                      justifyContent: 'center',
                      // alignItems: 'flex-end',
                      background: '#fff'}}>
            <Exit>
            <span style={{marginRight: '10px'}}>יציאה</span><ExitIcon />
            </Exit>
          </div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background: #FFFFFF;
  width: 15%;
  float: right;
  justify-content: center;
  height: 100%
`

const NavigationLink = styled.li`
  font-family: Rubik;
  list-style-type: none;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  justify-content: right;
  height: 73px;
  font-size: 18px;
  color: #172882;
  align-items: center;
  padding-right: 10px;
  width: 191px;
`

const Exit = styled.li`
  font-family: Rubik;
  list-style-type: none;
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  justify-content: right;
  height: 73px;
  font-size: 18px;
  color: #172882;
  align-items: center;
  padding-right: 10px;
  width: 191px;
  margin-top: 200px;

`

export default SideMenu