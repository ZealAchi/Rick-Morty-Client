import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";

//This class call to Navbar passing parametres for the search
class HeaderContainer extends Component {

  render() {    
    return <HeaderPresenter  SetEpisode={this.props.SetEpisode} episode={this.props.episode}  character={this.props.character} SetCharacter={this.props.SetCharacter} {...this.state} color={this.props.color} />;
  }
}

export default HeaderContainer;