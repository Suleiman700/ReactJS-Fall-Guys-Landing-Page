import React from 'react';
import * as Styles from './styles';

import { Container } from '../container';
import Logo from '../logo';

const Navbar = () => {
    return (
        <Container>
            <Styles.NavbarContainer>
                <Logo className='min' />
                <Styles.NavbarMenu>
                    <li><a href="#section-get-game" style={{color: 'white'}}>Gallery</a></li>
                    <li><a href="#section-get-game" style={{color: 'white'}}>Download</a></li>
                </Styles.NavbarMenu>
            </Styles.NavbarContainer>
        </Container>
    );
}

export default Navbar;
