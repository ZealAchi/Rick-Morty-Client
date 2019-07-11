import React from 'react'
import { withRouter} from "react-router-dom";
import Navbar from 'components/Navbar'

// in this function call to Navbar
export default withRouter(function Header({match,character,episode,SetEpisode,SetCharacter}){
    return(
        <>
        {match.url === "/" ?   SetEpisode(""): SetCharacter("")}
        <Navbar  character={character} episode={episode} SetEpisode={SetEpisode}  SetCharacter={SetCharacter}/>
        </>
    )
})