import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './globalStyles';
import { lightTheme, darkTheme } from "./Themes";
import GitHubSearchPanel from './componets/GitHubSearchPanel';
import { COLORS } from './constant';

const Wrapper = styled.div`
  min-height: 100%;
  padding: 32px 24px 80px 24px;
`;

function App() {
  const [theme, setTheme] = useState('light');

  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light') 
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <button onClick={themeToggler}>ChanegTheme</button>
        <GitHubSearchPanel />
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
