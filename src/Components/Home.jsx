import React from 'react';
import { Container, Typography, Box, } from '@material-ui/core';


const Home = () => {

    return (
        <Container maxWidth="lg">
            <Box my={5}>
            <Typography variant="h2" component="h2" align="center">CRUD - JSON Server - Axios - ReactJS</Typography>
            {/* <Typography component="h2" align="center">Json Server</Typography> */}
            </Box>
        </Container>
    )
}

export default Home;