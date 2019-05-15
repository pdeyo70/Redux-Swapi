import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetching } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(props) {
    // call our action
    this.props.fetching();
  }

  render() {
    console.log(this.props.characters)
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return ("Fetching data...")
      
    }
    return ( 
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  }
}

export default connect(
  mapStateToProps,
      /* action creators go here */
  { fetching }
)(CharacterListView);
