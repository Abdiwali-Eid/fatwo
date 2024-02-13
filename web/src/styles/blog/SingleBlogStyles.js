import styled from 'styled-components';
'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap'
export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .authorProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .dhig {
    display: flex;
    justify-content: space-evenly;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .dhig {
      display: flex;
      flex-direction:column
    };
    .authorProfileImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
