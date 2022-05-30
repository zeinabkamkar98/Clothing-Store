import React from 'react';

import { Container } from '@mui/material';
import Menu from '../components/Menu';

const HomePage = () => {
    return (
        <>
            <Container disableGutters>
                <Menu></Menu>
            </Container>
        </>
    )
}

export default React.memo(HomePage);
