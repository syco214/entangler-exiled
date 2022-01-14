import React from 'react';

import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faDiscord} from "@fortawesome/free-brands-svg-icons"
import { Settings } from './Settings';
import imageLogo from '../images/logo.svg';

const HeaderRoot = styled('div')({
  padding: 8,
  borderRadius: 4,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SocialLinks = styled('div')({});

const Logo = styled('img')({
  width: 100,
  height: 100,
});

const LogoContainer = styled('div')({
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Header() {
  return (
    <HeaderRoot>
      <SocialLinks>
        <Button
          href="https://discord.com/invite/mWtejvGMTQ"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </Button>
        <Button
          href="https://twitter.com/BountyHunterNFT"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Button>
      </SocialLinks>

      <LogoContainer>
        <Logo src={imageLogo} />
      </LogoContainer>

      <div>
        <Button style={{ visibility: 'hidden' }} disabled></Button>
        <Settings narrow={true} />
      </div>
    </HeaderRoot>
  );
}
