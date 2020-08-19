import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { Wrapper, Container, Right } from './style';
import { actionCreators } from './store';

class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <List />
        </Container>
        <Right>
          <Recommend />
          <Writer />
        </Right>
      </Wrapper>
    );
  }

  componentDidMount() {
    this.props.updateHomeData();
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateHomeData() {
      dispatch(actionCreators.getHomeData());
    },
  };
};

export default connect(null, mapDispatch)(Home);
