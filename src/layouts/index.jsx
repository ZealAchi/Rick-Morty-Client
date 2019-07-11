import React,{memo} from 'react'
import Body from './Body';
import {withRouter} from 'react-router-dom'
import Header from './Header';

///this is  important  function because give application life(the magic it's in the children)
//In the function  passing parametres for Header and body
export default memo(withRouter(function Layout(props) {
    return(
        <>
        <Header episode={props.episode} SetEpisode={props.SetEpisode}  character={props.character} SetCharacter={props.SetCharacter}/>
            <Body ruta={props.match.path} >            
            {props.children}
            </Body>
        </>
    )
}));