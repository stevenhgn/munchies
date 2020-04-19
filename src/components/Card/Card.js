import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
    secondary: '#dddd',
  },
};
const CardElement = () => {
  const classes = useStyles();
  var currColor = "primary";
  // var currColor = this.props.Color;
    return (
        <CardWrapper>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.hennig-olsen.no/wp-content/uploads/2020/02/HOI-L1-1160x800-450ml-Oreo-580x400.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color={currColor} component="p">
                Insane god is
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardWrapper>
    )
};

const CardWrapper = styled(Card)`
  margin: 10px;
  max-width: 500px;
`;

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

export default CardElement