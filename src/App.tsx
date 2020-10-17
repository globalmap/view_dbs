import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import MainPage from './components/MainPage/MainPage';
import LayoutList from './components/LayoutList/LayoutList';
import { loader } from 'graphql.macro';

const App: React.FC = () => {
  // const GetAllAnime = loader("./graphQL/GetAllAnime.graphql");
  // const { data, loading } = useQuery(GetAllAnime);

  // if(loading) {
  //   return <h1>Loading...</h1>
  // } else {
  //   console.log(data.getAnime)
  // }
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/anime">
          <LayoutList currentPage={1} />
        </Route>
        <Route path="/movie">
          {/* <Movie data={data} currentPage={2} /> */}
          <LayoutList currentPage={2} />
        </Route>
        <Route path="/games">
          {/* <Games data={data} currentPage={3} /> */}
          <LayoutList currentPage={3} />
        </Route>
      </Switch>
    </>
  )
}

export default App;
