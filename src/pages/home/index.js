import React from 'react'
import HomeIndex from './components/index'

///this function is the Home, here call the function HomeIndex
export default function Home(props, match){
    return(
        <div className="col-md-12">
            <div className=" container">
                <HomeIndex  character={props.character} SetCharacter={props.SetCharacter} {...match}/>
            </div>
        </div>
    )
}