import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { Wrapper, Container, Right } from '../home/style';

class Detail extends Component {
  render() {
    console.log('props', this.props)
    return (
      <Wrapper>
        <Container>DETAIL.</Container>
        <Right></Right>
      </Wrapper>
    );
  }

  componentDidMount() {
    this.props.updateDetailData(this.props.match.params.id)
  }
}


const mapState = (state) => {
  return {
    detail: state.getIn(['detail', 'detail']),
  };
};


const mapDispatch = (dispatch) => {
  return {
    updateDetailData(id) {
      dispatch(actionCreators.getDetailData(id))
    }
  };
};

export default connect(mapState, mapDispatch)(Detail);
