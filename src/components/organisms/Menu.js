import React from 'react';
import styled from 'styled-components';
//molecules
import FoodItem from '../molecules/FoodItem';

const items = [
	{
		id: 1,
		name: 'Veggie Burger',
		thumbnail: '🍔',
		desc:
			'Super Veggie Burger contains fresh veggies and sauces. Eat as many as you can.',
	},
	{
		id: 2,
		name: 'French Fries',
		thumbnail: '🍟',
		desc:
			'Fresh french fries for junk lovers. I was an ugly potato but now see my worth!',
	},
	{
		id: 3,
		name: 'Baba ka Dhaba Salad',
		thumbnail: '🥗',
		desc:
			'Special Salad for health conscious people like you. Only available at Baba Ka dhaba!',
	},
];

const StyledMenu = styled.div`
	border: 2px dashed gray;
	padding: 30px;

	& > div {
		margin-bottom: 20px;
	}
`;

function Menu() {
	return (
		<StyledMenu>
			{items.map(i => (
				<FoodItem
					key={i.id}
					name={i.name}
					thumbnail={i.thumbnail}
					desc={i.desc}
				/>
			))}
		</StyledMenu>
	);
}

export default Menu;
