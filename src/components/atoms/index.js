import styled from 'styled-components';

export const Heading = styled.h3`
	font-weight: 400;
	color: gray;
`;

export const Text = styled.p`
	color: darkgray;
`;

export const Thumbnail = styled.span`
	font-size: 50px;
`;

//Layout atoms
export const Flex = styled.div`
	display: flex;
`;

export const Center = styled(Flex)`
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`;
