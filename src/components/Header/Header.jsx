import React from 'react';
import cl from './Header.module.css';
import logoImage from '../../assets/icon/logo.svg';
import { useNavigate } from 'react-router-dom'
import { CFormSelect } from '@coreui/react'

export default function Header({setUnit}) {
	const navigate = useNavigate();
	return (
		<header className={cl.header}>
			<div className={cl.wrapper}>
				<img src={logoImage} alt="Logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
				<div className={cl.logoText}>React weather</div>
			</div>
			<CFormSelect aria-label="Default select example" onChange={(e) => setUnit(e.target.value)} style={{ width: '110px', backgroundColor: '#4793FF', color: 'white' }}>
				<option value="Celsius">Celsius</option>
				<option value="Fahrenheit ">Fahrenheit </option>
			</CFormSelect>
		</header>
	)
}