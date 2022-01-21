import styled from 'styled-components';
import { formatDate } from '../utils/dates';
import { UserGithubPageTypes } from './GitHubSearchPanel';


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.cardColor};
  padding: 32px 24px 48px 24px;
  border-radius: 15px;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 20px;
  margin-bottom: 34px;
`;

const Avatar = styled.div`
  img {
    border-radius: 50%;
  }
`;

const HeaderDescription = styled.div`
  font-size: 1.6rem;
  line-height: 23.7px;
  font-weight: 700;

  p {
    font-size: 1.3rem;
    line-height: 19.25px;
  }

  p:nth-of-type(1){
    color: ${({ theme }) => theme.blue};
    margin-top: 4px;
  }

  p:nth-of-type(2){
    color: ${({ theme }) => theme.gray};
    margin-top: 6px;
  }
`;

const UserDescription = styled.p`
  font-size: 1.3rem;
  line-height: 25px;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 24px;
`;

const List = styled.ul`
  background: ${({theme}) => theme.body};
  display: flex;
  justify-content: space-between;
  padding: 18px 15px;
  border-radius: 15px;
`;

const ListItem = styled.li``;

type CardProps = {
  user: UserGithubPageTypes;
}

function Card ({ user }: CardProps):JSX.Element {
  console.log(user)
  const { avatar_url, name, login, created_at, bio } = user;
  return (
    <Wrapper>
        <Header>
          <Avatar>
            <img src={avatar_url} alt="" />
          </Avatar>
          <HeaderDescription>
            <h2>{name}</h2>
            <p>@{login}</p>
            <p> Joined {formatDate(created_at)}</p>
          </HeaderDescription>
        </Header>
        <UserDescription>{bio}</UserDescription>
        <List>
          <ListItem>
            <h3>Repos</h3>
            <span>8</span>
          </ListItem>
          <ListItem>
            <h3>Followers</h3>
            <span>3938</span>
          </ListItem>
          <ListItem>
            <h3>Following</h3>
            <span>9</span>
          </ListItem>
        </List>
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