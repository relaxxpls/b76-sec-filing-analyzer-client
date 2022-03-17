import { Input } from 'antd';
import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import styled from 'styled-components';

import PopularSearches from '../components/PopularSearches';

const Home = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const loading = false;

  return (
    <Container>
      <Title>Gather.com</Title>

      <StyledInput
        size="large"
        placeholder="Search for a company name, ID or type"
        allowClear
        maxLength={100}
        onChange={handleSearch}
        value={search}
        prefix={
          loading ? (
            <AiOutlineLoading size="18" />
          ) : (
            <HiOutlineSearch size="18" />
          )
        }
      />

      <PopularSearches />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 10rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
`;

const StyledInput = styled(Input)`
  height: 2.5rem;
  padding: 0 0.75rem;
  background: transparent;
  border: 2px solid gray;
  border-radius: 0.25rem;
  color: lightgray;

  .ant-input {
    color: white;
    font-size: 1.25rem;
    background: transparent;
    margin-left: 0.5rem;
  }

  .anticon-close-circle > svg {
    width: 0.75rem;
    height: 0.75rem;
    color: lightgray;
  }
`;
