'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap'
import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Merriweather', sans-serif;
  color: var(--grey);
  font-size: 2rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-left:5px;
  }
`;
