import React from "react";

import * as Styles from './styles';

import Navbar from '../../../../components/navbar';
import Divider from '../../../../components/divider';
import { Button } from '../../../../components/button';
import Platforms from '../../../../components/platforms';

import avatar from '../../../../assets/images/avatar.png';
import avatar2 from '../../../../assets/images/avatar2.png';
import mascot from '../../../../assets/images/mascot.png';

const BannerSection = () => {
    return (
        <Styles.BannerSection>
            <Navbar />
            <Divider />
            <Styles.BannerContainer>
                <Styles.BannerInfo>
                    <Styles.BannerText>
                        <h2>Welcome To</h2>
                        <h1>Fall Guys: Ultimate!</h1>
                        <p>Fall Guys is a free, cross-platform massively multiplayer party royal game. Clumsily compete in absurd obstacle courses with friends or build your very own chaotic course to share with the community. You’re invited to dive and dodge your way to victory in the pantheon of clumsy!</p>
                        <Button>Learn more</Button>
                        <Styles.BannerPlayers>
                            <img src={avatar} alt='Avatar' />
                            <img src={avatar2} alt='Avatar' />
                            <span className='transparent'>+ 20 million players</span>
                        </Styles.BannerPlayers>
                        <Styles.BannerDivider />
                        <Styles.BannerPlataforms>
                            <span className='transparent'>Integration with the biggest platforms in the world</span>
                            <Platforms
                                style={{
                                    margin: '20px',
                                }}
                            />
                        </Styles.BannerPlataforms>
                    </Styles.BannerText>
                </Styles.BannerInfo>

                <Styles.BannerMascotContainer>
                    <img src={mascot} alt='Mascot' />
                </Styles.BannerMascotContainer>

            </Styles.BannerContainer>
        </Styles.BannerSection>
    );
}

export default BannerSection;
