import React from 'react'

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				type='search' 
				placeholder='Search robots'
				className='pa2 va b--green bg-lightest-blue'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;