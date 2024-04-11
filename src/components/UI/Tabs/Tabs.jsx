import React, { useState } from 'react';
import cl from './Tabs.module.css';
import Forecast from '../../Forecast/Forecast';

export default function Tabs({ data,unit }) {
	return (
		<div className={cl.wrapper}>
			<div id='test'>
				<Forecast data={data} unit={unit} />
			</div>
		</div>
	)
}
