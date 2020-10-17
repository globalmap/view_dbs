import React from 'react';
import { Button, Typography } from 'antd';
import s from './MainPage.module.scss';

const { Title } = Typography;

const MainPage: React.FC = () =>  (
  <>
    <Title style={{textAlign: "center", marginTop: "1em"}}>List APIs</Title>
    <div className={s.main}>
      <Button
        className={`${s.buttonAnime} ${s.button}`}
        block
        type="primary"
        href="/anime"
      >
        Anime
      </Button>
      <Button
        block
        className={`${s.buttonMovie} ${s.button}`}
        href="/movie"
      >
        Movie
      </Button>
      <Button
        block
        className={`${s.buttonGames} ${s.button}`}
        href="/games"
      >
        Games
      </Button>

    </div>
  </>
)

export default MainPage;