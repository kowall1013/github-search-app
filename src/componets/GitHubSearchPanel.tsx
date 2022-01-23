import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { QUERIES } from '../constant';
import { SetDarkModeState, DarkModeState } from '../hooks/useDarkMode';
import Card from './Card';

const API =  'https://api.github.com/users/:username';

const Wrapper = styled.div`
  max-width: 573px;
  margin: 0 auto;

  @media ${QUERIES.laptopAndUp} {
    max-width: 730px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 38px;
  line-height: 38.5px;
`;

const ThemeMode = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;


  span {
    font-weight: 700;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    line-height: 19.25px;
    color: ${({ theme }) => theme.secendary};
  }
`;

const Search = styled.div`
  position: relative;
  display: flex;
  padding: 7px 7px 7px 16px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.cardColor};
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: nowrap;
`

const NoResultInfo = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.red};
  margin-right: 8px;

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.5rem;
    margin-right: 24px;
  }
`;

const IconSearchWrapper = styled.div`
  min-width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secendary};
  line-height: 25px;

  &:focus, &:active {
    outline: 1px solid transparent;
  }

  ::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

const SearchButton = styled.button`
  font-size: 1.4rem;
  line-height: 21px;
  font-weight: bold;
  padding: 11px 15px;
  background-color: ${({ theme }) => theme.blue};
  border: 1px solid transparent;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

type GitHubSearchPanelProps = {
  setMode: SetDarkModeState;
  mode: DarkModeState;
}

export interface UserGithubPageTypes {
  login: string;
  id: number | null;
  avatar_url: string;
  name: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number,
  created_at: string,
  company: string,
  organizations_url: string;
  message?: string | undefined;
}

const initUserGithubPage: UserGithubPageTypes = {
  login: '',
  id: null,
  avatar_url: '',
  name: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
  twitter_username: '',
  public_repos: 0,
  followers: 0,
  following: 0,
  created_at: '',
  company: '',
  organizations_url: '',
}

function GitHubSearchPanel({ setMode, mode }: GitHubSearchPanelProps):JSX.Element {
  const [githubPageUser, setGithubPageUser] = useState<UserGithubPageTypes>(initUserGithubPage);
  const [username, setUsername] = useState('')
  const [status, setStatus] = useState('')

  const fetchGitHubAccount = async(username: string) => { 
    try {
      setStatus('loading')
      const res = await fetch(API.replace(':username', username ));
      const data = await res.json();
      setGithubPageUser(data);
      setStatus('fulfilled')
    } catch (error) {
      setStatus('rejected')
    }
  }

  useEffect(() => {
    fetchGitHubAccount('octocat')
  }, [])

  function renderCard(status: string) {
    if (status === 'loading') return <p>Loading....</p>
    if (status === 'fulfilled') return  <Card user={githubPageUser}/>
    if (status === 'rejected') return  <p>Something goes wrong</p>
  }

  return (
    <Wrapper>
      <Header>
        <Title>devfinder</Title>
        <ThemeMode
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          {mode === 'light' ? <span>dark</span> : <span>light</span>}
          {mode === 'light' ? <img src="./assets/icon-moon.svg" alt="" /> : <img src="./assets/icon-sun.svg" alt="" />}
        </ThemeMode>
      </Header>
      <Search>
        <IconSearchWrapper>
          <img src="./assets/icon-search.svg" alt="search username" />
        </IconSearchWrapper>
        <SearchInput
         type="text"
         placeholder='Search GitHub username...'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
        />
        {githubPageUser.message === 'Not Found' ? <NoResultInfo>No result</NoResultInfo> : null}
        <SearchButton onClick={() => fetchGitHubAccount(username)}>Search</SearchButton>
      </Search>
      {renderCard(status)}
    </Wrapper>
  )
}

export default GitHubSearchPanel;
