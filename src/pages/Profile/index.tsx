import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="anddersonrs"
            name="Anderson Rodrigues"
            avatarUrl="https://avatars1.githubusercontent.com/u/10183881?s=460&u=657709fe67fd8d720e3e893d9f6f185d976ac96f&v=4"
            followers={9}
            following={18}
            company="undefined"
            location="Fortaleza, Brazil"
            email="anddersonrds@gmail.com.br"
            blog="linkedin.com/in/anddersonrs"
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(repo => (
                <RepoCard
                  key={repo}
                  username="anddersonrs"
                  reponame="clone-github"
                  description="Contains all of my Youtube lessons code"
                  language={repo % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
