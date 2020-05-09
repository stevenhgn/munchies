import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { spacing, palette, typography } from '@material-ui/system';

// TODO: Need some refactor afterward.

const CardWrapper = styled(Card)`
  ${spacing};
  ${palette};
`;
const CardWrapperFlex = styled(Card)`
  ${spacing};
  ${palette};
  display: flex;
`;
const CardWrapperFlexColumn = styled(Card)`
  ${spacing};
  ${palette};
  display: flex;
  flex-direction: row;
`;
const CardWrapperFullWidth = styled(Card)`
  ${spacing};
  ${palette};
  width: 100%;
  height: 100%;
`;
const DivWrapperHalfWidth = styled.div`
	${spacing};
	${palette};
	max-width: 50%;
	display: flex;
	justify-content: center;
	border-radius: 15px;
`;
const CardActionsWrapper = styled(CardActions)`
  ${spacing};
  ${palette};
  ${typography};
`;
const CardActionAreaWrapper = styled(CardActionArea)`
  ${spacing};
  ${palette};
  ${typography};

  &.MuiCardActionArea-root {
    /* display: flex; */
    justify-content: center;
  }
`;
const CardContentWrapper = styled(CardContent)`
  ${spacing};
  ${palette};
  ${typography};
`;
const CardMediaWrapper = styled(CardMedia)`
  height: 150px;
  max-width: 400px;
`;

export {
	CardWrapper,
	CardActionsWrapper,
	CardActionAreaWrapper,
	CardContentWrapper,
	CardMediaWrapper,
	CardWrapperFullWidth,
	CardWrapperFlexColumn,
	CardWrapperFlex,
	DivWrapperHalfWidth
};
