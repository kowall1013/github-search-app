import styled from 'styled-components';
import { COLORS } from '../constant';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 38px;
  color: ${COLORS.darkMode.white};
  line-height: 38.5px;
`;

const ThemeMode = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;


  span {
    font-weight: 700;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    line-height: 19.25px;
  }
`;

function GitHubSearchPanel():JSX.Element {


  return (
    <div>
      <Header>
        <Title>devfinder</Title>
        <ThemeMode>
          <span>light</span>
          <img src="./assets/icon-sun.svg" alt="" />
        </ThemeMode>
      </Header>
    </div>
  )
}

export default GitHubSearchPanel;
