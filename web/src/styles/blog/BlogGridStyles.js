import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 2rem;
  padding: 10px;
  grid-template-columns:1fr;
  
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
   
  }
`;
