import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SetDarkModeState, DarkModeState } from '../hooks/useDarkMode';
import Card from './Card';

const API =  'https://api.github.com/users/:username';

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
  display: flex;
  padding: 7px 7px 7px 16px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.cardColor};
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`

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
}

function GitHubSearchPanel({ setMode, mode }: GitHubSearchPanelProps):JSX.Element {
  const [githubPageUser, setGithubPageUser] = useState<UserGithubPageTypes>(initUserGithubPage);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('')

  console.log('githubPageUser', githubPageUser)



  const fetchGitHubAccount = async(username: string) => { 
    try {
      const res = await fetch(API.replace(':username', username ));
      const data = await res.json();
      setGithubPageUser(data);
    } catch (error) {
      setError('something goes wrong')
    }
  }

  return (
    <div>
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
        <SearchButton onClick={() => fetchGitHubAccount(username)}>Search</SearchButton>
      </Search>
      <Card user={githubPageUser} />
    </div>
  )
}

export default GitHubSearchPanel;
