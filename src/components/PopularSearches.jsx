import { useEffect } from 'react';
import styled from 'styled-components';

const PopularSearches = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <span>Popular searches:</span>
      <div>
        <h3>Apple</h3>
        <h3>Microsoft</h3>
        <h3>Google</h3>
        <h3>Amazon</h3>
      </div>
    </Container>
  );
};

export default PopularSearches;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: white;

  span {
    color: gray;
    font-size: 1rem;
    margin-right: 1rem;
  }

  h3 {
    margin: 0.25rem;
    color: white;

    font-size: 18px;
    line-height: 25px;
    color: #cbd1d8;
  }

  div {
    display: flex;
  }
`;
