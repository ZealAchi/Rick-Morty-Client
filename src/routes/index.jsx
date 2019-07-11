import React,{memo, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from 'pages/home'
import Episodes from 'pages/episodes'
import Layout1 from 'layouts';
import Perfil from "../pages/home/components/perfil";

//this function is for the pages no found
function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          Page no found <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }


//this function is for the pages  found
  
export default memo(function Routes(props) {
  const [character, SetCharacter] = useState('');
  const [episode, SetEpisode] = useState('');
    return (
      <>
      <div style={{background:'linear-gradient(76213deg, rgb(171, 210, 19), rgb(87, 101, 116))'}}>

      <Router>
          <Switch>
          <Route path="/" exact render={(props)=>(<Layout1  character={character} SetCharacter={SetCharacter}  episode={episode} SetEpisode={SetEpisode} ><Home character={character} SetCharacter={SetCharacter} {...props}/></Layout1>)} /> 
          <Route path="/episodes" exact render={(props)=>(<Layout1 episode={episode}  character={character} SetCharacter={SetCharacter} SetEpisode={SetEpisode} ><Episodes episode={episode} SetEpisode={SetEpisode}  {...props}/></Layout1>)} /> 
           <Route path={`/personaje/:id`} render={props=> ( <Perfil {...props} /> )}/> 
          <Route component={NoMatch} />
          </Switch>
      </Router>
      {/* {console.log(character)} */}

      </div>      </>
    );
  })