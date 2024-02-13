import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, white, white);
  .container {
    height: 100%;
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, white, white);
      z-index: -1;
    }
    .left {
      width: 100%;
      text-align: center;
      padding: 50px 0;
      .hero__heading {
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: '700';
        margin: 0 auto; /* Center align */
        width: 100%; /* Full width */
      }
      .hero__text {
        width: 100%; /* Full width */
        margin: 0 auto;
        margin-top: 1rem;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          font-size: 3rem;
        }
        .hero__text {
          max-width: 100%;
        }
      }
    }
  }
`;
