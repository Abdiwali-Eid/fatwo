import React from 'react';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
// import { Button } from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <Button variant="primary"
                            href="#services"> 
                        Explore 
                    </Button>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore the world with Technology Explore the world <br/> with Technology</h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </ParagraphText>
            <Button to="/question" tag={Link} className="hero__button">
              Waydii su'aal
            </Button>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
