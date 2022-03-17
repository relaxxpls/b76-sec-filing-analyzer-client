import { Input, AutoComplete } from 'antd';
import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import styled from 'styled-components';

import {
  SearchPopular,
  SearchSuggestions,
} from '../components/PopularSearches';

const companies = [
  {
    name: 'Apple Inc',
    ticker: 'APL',
    cik: '001',
  },
  {
    name: 'Facebook Inc',
    ticker: 'FB',
    cik: '002',
  },
];

const Home = () => {
  const [search, setSearch] = useState([]);
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setSearch([value]);
  };

  const loading = false;
  // const options = [
  //   {
  //     value: 'hi',
  //     label: 'okk',
  //   },
  // ];

  useEffect(() => {
    // companies.find();

    setOptions;
  }, [search]);

  return (
    <Container>
      <Title>Gather.com</Title>

      <AutoComplete
        options={options}
        onSearch={handleSearch}
        notFoundContent={<SearchSuggestions />}
      >
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
          style={{ width: '30rem' }}
        />
      </AutoComplete>

      <SearchPopular />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 10rem 0;
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
