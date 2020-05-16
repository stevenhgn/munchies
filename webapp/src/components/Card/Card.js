import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StyledBox } from '../../components';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { spacing, palette, typography } from '@material-ui/system';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    // maxWidth: 500,
  },
  media: {
    height: 150,
  },
});

const MunchiesCard = (props) => {
	let priceRange = '';
	for (let i = 0; i < props.price_range; i++) {
		priceRange += '$';
	}
	const classes = useStyles();
	return (
		<Wrapper color={'primary'} className={classes.root}>
			<CardActionAreas>
				<CardMedia className={classes.media} image={props.image} title={props.name} />
				<CardContentWrapper bgcolor={'cardBackgroundColor'}>
					<Typography variant="body2" color={'primary'} component="div">
						<StyledBox color={'primary'}>{props.name}</StyledBox>
						<StyledBox color={'primary'}>{props.price} kr</StyledBox>
						<StyledBox>
							<StyledBox color={'money'} style={{ position: 'absolute', right: 20, bottom: 10 }}>
								{priceRange}
							</StyledBox>
						</StyledBox>
					</Typography>
				</CardContentWrapper>
			</CardActionAreas>
		</Wrapper>
	);
};

const Wrapper = styled(Card)`
  ${spacing};
  ${palette};
`;

const CardActionAreas = styled(CardActionArea)`
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

export default MunchiesCard;
