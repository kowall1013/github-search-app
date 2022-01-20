import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './globalStyles';
import useDarkMode from './hooks/useDarkMode';
import {lightMode, darkMode} from './Themes';
import GitHubSearchPanel from './componets/GitHubSearchPanel';

const Wrapper = styled.div`
  min-height: 100%;
  padding: 32px 24px 80px 24px;
`;

function App() {
  const [mode, setMode] = useDarkMode();

  return (
    <ThemeProvider theme={mode === 'dark' ? darkMode : lightMode}>
      <Wrapper>
        <GitHubSearchPanel
          setMode={setMode}
          mode={mode}
        />
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
