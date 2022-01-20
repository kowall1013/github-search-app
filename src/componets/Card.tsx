import styled from 'styled-components';
import { formatDate } from '../utils/dates';
import { UserGithubPageTypes } from './GitHubSearchPanel';


const Wrapper = styled.div``;

type CardProps = {
  user: UserGithubPageTypes;
}

function Card ({ user }: CardProps):JSX.Element {
  const { avatar_url, name, login, created_at } = user;
  return (
    <Wrapper>
        <header>
          <div>
            <img src={avatar_url} alt="" />
          </div>
          <h2>{name}</h2>
          <p>@{login}</p>
          <p> Joined {formatDate(created_at)}</p>
        </header>
        <p>Description</p>
        <div>
          <ul>
            <li>
              <h3>Repos</h3>
              <span>8</span>
            </li>
            <li>
              <h3>Followers</h3>
              <span>3938</span>
            </li>
            <li>
              <h3>Following</h3>
              <span>9</span>
            </li>
          </ul>
        </div>
        <footer>
          <ul>
            <li>
              <img src="" alt="" />
              <p>San Francisco</p>
            </li>
          </ul>
        </footer>
      </Wrapper>
  )
};

export default Card;