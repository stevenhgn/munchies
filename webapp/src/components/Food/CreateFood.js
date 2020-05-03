import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "../../shared/Box";
import {
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
} from "../../shared/CardWrapper";
import { createNewFood } from "../../api/foods";
import { makeStyles, CardActions, Divider } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    // maxHeight: 2000,
    // minWidth: 1000,
    // minHeight: 1000,
  },
  media: {
    height: 150,
    maxWidth: 400,
    marginLeft: "40%",
    marginRight: "30%",
  },
});
const CreateFood = () => {
  const [food, setFood] = useState("");
  return (
    <Wrapper
      bgcolor={"backgroundColor"}
      style={{
        position: "absolute",
        top: 90,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <SecondContentWrapper>
        <CardWrapperFullWidth
          bgcolor={"cardBackgroundColor"}
          style={{
            /*REMOVE */
            marginLeft: 100,
            marginRight: 50,
            marginTop: 100,
            width: "100%",
            height: "100%",
          }}
        >
          <CardActionAreaWrapper>
            <CardContentWrapper bgcolor={"cardBackgroundColor"}>
              <Typography variant="body2" color={"primary"} component="div">
                <Box color={"primary"}>DSADSA</Box>
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <CardActionsWrapper bgcolor={"cardBackgroundColor"}>
            <Button
              size="large"
              p={1}
              onClick={createNewFood}
              style={{ display: "end" }}
            >
              <Box color={"lightgreen"}>Send</Box>
            </Button>
          </CardActionsWrapper>
        </CardWrapperFullWidth>
      </SecondContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
`;
const SecondContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
`;
export default CreateFood;
