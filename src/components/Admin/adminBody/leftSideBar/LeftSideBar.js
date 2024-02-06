import React, {useState} from 'react'
import {FaUsers} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {IoSchool} from 'react-icons/io5'
import {BiLogOut} from 'react-icons/bi'
import {NavLink } from 'react-router-dom'
import './leftsidebar.css'
import { useTheme } from '../../../context/ThemeContext'


function LeftSideBar() {

 
    const {isNightMode} = useTheme()
   
    const [changeColor, setChangeColor] = useState(null)
    const handleItemClick = (item) => {
        setChangeColor(item);
      };
  return (
    <div className={isNightMode ? 'leftSideBar' : 'leftSideBar dark'}>
        <ul className='leftMenu'>
            <NavLink to='lid'>
                <li className='leftMenuItem' onClick={() => handleItemClick('lid')}><FaUserFriends className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}/><span className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}>Lidlar</span></li>
            </NavLink>
            <NavLink to='pupil'>
                <li className='leftMenuItem' onClick={() => handleItemClick('pupil')}><IoSchool className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}/><span className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}>O'quvchilar</span></li>
            </NavLink>
            <NavLink to='groups'>
            <li className='leftMenuItem' onClick={() => handleItemClick('group')}><FaUsers className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}/><span className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}>Guruhlar</span></li>
            </NavLink>
            </ul>
            <NavLink to='/login'>
            <div className='leftMenuItem'><BiLogOut className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}/> <span className={isNightMode ? 'darkleftColor' : 'darkleftColor dark'}>Chiqish</span></div>
            </NavLink>
            
    </div>
  )
}

export default LeftSideBar