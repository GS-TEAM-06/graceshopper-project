import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCard } from "../store/card";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCard(id);
  }

  render() {
    const { singleCard } = this.props;
    return (
      <div>
        <h3>{singleCard.name}</h3>
        <h3>{singleCard.quantity}</h3>
        <img src={singleCard.imageUrl} />
        <h6>{singleCard.description}</h6>
        <h3>{singleCard.price}</h3>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singleCard: state.card,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCard: (id) => dispatch(fetchCard(id)),
  };
};

export default connect(mapState, mapDispatch)(Card);
