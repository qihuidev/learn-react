import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RecommendItem } from '../style';

class Recommend extends Component {
  render() {
    const { recommend } = this.props;
    return (
      <Fragment>
        {recommend.map((item) => {
          return (
            <RecommendItem
              className={item.get('class')}
              key={item.get('class')}
            >
              {item.get('name')}
            </RecommendItem>
          );
        })}
      </Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    recommend: state.getIn(['home', 'recommend']),
  };
};

export default connect(mapState)(Recommend);
