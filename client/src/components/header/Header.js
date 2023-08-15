import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./Search";
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage=styled("img")({
    width:10,
    height:10,
    marginLeft:3
})
const header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:"55px"}}>
        <Component>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Logo_url"
            style={{ width: "75px" }}
          />
          <Box style={{display:"flex"}}>
            <SubHeading>
              Explore
              <Box component="span" style={{ color: "#FFE500" }}>
                {" "}
                Plus
              </Box>
            </SubHeading>
            <PlusImage
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="sublogo"
            />
          </Box>
        </Component>
        <Search></Search>
      </Toolbar>

    </StyledHeader>
  );
};

export default header;
