import React from 'react';
import styled from 'styled-components';
//atoms
import { Flex, Heading, Text, Thumbnail } from '../atoms';

const Details = styled.div`
	margin-left: 15px;
`;

function FoodItem({ name, thumbnail, desc }) {
	return (
		<Flex>
			<Thumbnail>{thumbnail}</Thumbnail>
			<Details>
				<Heading>{name}</Heading>
				<Text>{desc}</Text>
			</Details>
		</Flex>
	);
}

export default FoodItem;
