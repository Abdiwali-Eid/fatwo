import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-block;
  border-radius: 12px;
  
  .img {
    height: 250px;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
  }
  .title {
    margin-bottom: 0.5rem;
   
  }
 
  .ciwaan{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    background-color: white;
  }
  .publishedAt {
    margin-bottom: 0.3rem;
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      margin-bottom: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }
`;
