import { Box, Container, Typography } from "@mui/material";
import { getCurrentDate } from "@/utils/getCurrentDate";
import React from "react";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <Box>
        <Container>
          <h1 className="text-6xl font-bold text-center py-2">
            The Dragon News
          </h1>
          <Typography
            color="gray"
            variant="body2"
            textAlign="center"
            className="my-2"
          >
            Journalism Without Fear or Favour
          </Typography>
          <Typography textAlign="center">{currentDate}</Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
