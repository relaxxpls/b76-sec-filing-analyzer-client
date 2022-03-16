import { Card, Checkbox } from 'antd';
import styled from 'styled-components';

const CompanyCard = ({ title, description }) => (
  <StyledCard>
    <Checkbox>
      <h1>{title}</h1>
    </Checkbox>

    <p>{description}</p>
  </StyledCard>
);

export default CompanyCard;

const StyledCard = styled(Card)`
  height: 150px;
`;
