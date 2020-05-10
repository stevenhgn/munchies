import styled from 'styled-components';
import { spacing, palette, typography, sizing } from '@material-ui/system';

const StyledH1 = styled.h1`
	${spacing};
	${palette};
	${typography};
	font-family: "Roboto", sans-serif;
	font-weight: 500;
`;

const StyledH3 = styled.h3`
	${spacing};
	${palette};
	${typography};
	font-family: "Roboto", sans-serif;
	font-weight: 500;
`;

export { StyledH1, StyledH3 };
