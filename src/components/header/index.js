import React from 'react';
import { useNavigate } from 'react-router-dom'

const MyHeader = () => {
	const location = useNavigate()

	return (
		<>
			<div className='d-flex justify-content-between align-items-center'
				style={{
					padding: '2rem',
					borderBottom: '1px solid #B4B4B4'
				}}
			>
				<h5
					style={{
						marginBottom: '0',
						fontSize: '16px',
						fontWeight: '700',
						color: '#00466E'
					}}
				>
					LIVE WEBSITE TRACKING
				</h5>
				<p
					style={{
						marginBottom: '0',
						fontSize: '12px',
						color: '#006B6E'
					}}
				>
					Currently Accessing 4 Websites
				</p>
			</div>
		</>
	);
}
export default MyHeader