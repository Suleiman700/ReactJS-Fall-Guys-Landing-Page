import React from 'react';

import * as Styles from './styles';

import { Button, ButtonReverse } from '../../../../components/button';

import mascot from '../../../../assets/images/mascot2.png';

const BuySection = () => {
    return (
        <Styles.BuySection>
            <Styles.BuyContainer>
                <Styles.BuyMascot src={mascot} alt='Mascot' id='section-get-game' />
                <Styles.BuyInfo>
                    <h3>Fall Guys</h3>
                    <h2>It's Spectacular</h2>
                    <span>Fall Guys is a free, cross-platform massively multiplayer party royal game. Clumsily compete in absurd obstacle courses with friends or build your very own chaotic course to share with the community. You’re invited to dive and dodge your way to victory in the pantheon of clumsy!</span>
                    <Styles.BuyButtons>
                        <ButtonReverse className='small'>Learn more</ButtonReverse>
                        <Button className='small'>Get it now!</Button>
                    </Styles.BuyButtons>
                </Styles.BuyInfo>
            </Styles.BuyContainer>
        </Styles.BuySection>
    );
}

export default BuySection;
