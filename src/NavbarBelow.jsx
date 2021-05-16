import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Button from '@material-ui/core/Button';

const Box = styled.div`${palette}${spacing}${typography}`;
// or import Box from '@material-ui/core/Box';

const theme = createMuiTheme();

export default function Demo() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Box
          color="#000"
          textAlign ="center"
          bgcolor="background.paper"
          fontFamily="system-ui"
          fontSize ="400%"
          fontWeight ="100"
          marginBottom ="-6%"
          // fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 3, sm: 3, md: 4 }}
        >
          Welcome to Food's
        </Box>
        <Box
         color="#000"
         textAlign ="center"
         bgcolor="background.paper"
         fontFamily="system-ui"
         fontSize ="400%"
         fontWeight ="100"
         p={{ xs: 3, sm: 3, md: 4 }}
        >
          Kitchen
        </Box>
        <Button variant="contained" color="primary"style={{margin: '0 auto', display: "flex"}}>
        GO TO MENU
      </Button>
      </ThemeProvider>
    </NoSsr>
  );
}