import styled from 'styled-components';
import { QUERIES } from '../constant';
import { formatDate } from '../utils/dates';
import { UserGithubPageTypes } from './GitHubSearchPanel';


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.cardColor};
  padding: 32px 24px 48px 24px;
  border-radius: 15px;

  @media ${QUERIES.tabletAndUp} {
    padding: 40px;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 20px;
  margin-bottom: 34px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.div`
  img {
    border-radius: 50%;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const HeaderDescription = styled.div`
  h2 {
    font-size: 1.6rem;
    line-height: 38px;
    font-weight: 700;

    @media ${QUERIES.tabletAndUp} {
      font-size: 2.6rem;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 19.25px;

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.5rem;
    }
  }

  p:nth-of-type(1){
    color: ${({ theme }) => theme.blue};
    margin-top: 4px;

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.6rem;
    }
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

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.5rem;
  }
`;

const List = styled.ul`
  background: ${({theme}) => theme.body};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 18px 15px;
  margin-bottom: 24px;
  border-radius: 15px;
  width: 100%;
  height: 85px;

  @media ${QUERIES.tabletAndUp} {
    padding: 15px 32px;
    margin-bottom: 30px;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.gray};

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.3rem;
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;

    @media ${QUERIES.tabletAndUp} {
      font-size: 2.2rem;
    }
  }
`;



const FooterList = styled.ul`
  li {
    margin-bottom: 16px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

const FooterLink = styled.a`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 20px;
  gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  text-decoration: none;

  p {
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 220px;

    @media ${QUERIES.tabletAndUp} {
      font-size: 1.5rem;
    }
  }
`;

type CardProps = {
  user: UserGithubPageTypes;
}

function Card ({ user }: CardProps):JSX.Element {
  const { avatar_url, name, login, created_at, bio, location, blog, twitter_username, company, organizations_url } = user;
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
          <FooterList>
            <li>
              <FooterLink
               href='https://www.google.com/maps/place/San+Francisco,+Kalifornia,+Stany+Zjednoczone/@37.7576171,-122.5776844,11z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155'
               target="_blank"
               rel="noreferrer"
               >
                <img src="./assets/icon-location.svg" alt="" />
                <p>{location ? location : <span>Not available</span>}</p>
              </FooterLink>
            </li>
            <li>
              <FooterLink
               href={blog}
               target="_blank"
               rel="noreferrer"
              >
                <img src="./assets/icon-website.svg" alt="" />
                <p>{blog ? blog : <span>Not available</span>}</p>
              </FooterLink>
            </li>
            <li>
              <FooterLink
                href="www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/icon-twitter.svg" alt="" />
                <p>{twitter_username ? twitter_username : <span>Not available</span>}</p>
              </FooterLink>
            </li>
            <li>
              <FooterLink
                href={organizations_url}
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/icon-company.svg" alt="" />
                <p>{company ? company : <span>Not available</span>}</p>
              </FooterLink>    
            </li>
          </FooterList>
        </footer>
      </Wrapper>
  )
};

export default Card;