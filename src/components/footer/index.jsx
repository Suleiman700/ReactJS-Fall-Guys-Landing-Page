import React from 'react';

import * as Styles from './styles';

import Logo from '../logo';
import Divider from '../divider';
import Platforms from '../platforms';

import classification from '../../assets/images/classification.png';
import {ReactComponent as ArrowUp} from '../../assets/images/arrow_up.svg';

const Footer = () => {
    return (
        <Styles.FooterSection>
            <Styles.FooterContainer>
                <Styles.FooterHeader>
                    <Logo className='small' />
                    <div className='transparent'>
                        <a href="#" style={{color: 'white'}}>
                            <ArrowUp width={15} /> Back to top
                        </a>
                    </div>
                </Styles.FooterHeader>
                <Styles.FooterNav>
                    <div className='nav-menu'>
                        <ul>
                            <li><a href='#'>Start</a></li>
                            <li><a href='#'>Current season</a></li>
                            <li><a href='#'>Previous seasons</a></li>
                            <li><a href='#'>News</a></li>
                            <li><a href='#'>Get it now</a></li>
                        </ul>
                    </div>
                    <img src={classification} alt='Parental rating' />
                </Styles.FooterNav>
                <Divider />
                <Styles.FooterCopyright>© 2023 Mediatonic Limited. All rights reserved. The Mediatonic logo and the Fall Guys logo and characters are trademarks of Mediatonic Limited. The Epic Games logo is a trademark or registered trademark of Epic Games, Inc. in the US and elsewhere.</Styles.FooterCopyright>
                <Styles.FooterBottom>
                    <div>
                        <a href='#'>Terms of services</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>License Agreement</a>
                    </div>
                    <Platforms />
                </Styles.FooterBottom>
            </Styles.FooterContainer>
        </Styles.FooterSection>
    );
}

export default Footer;
