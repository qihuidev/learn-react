import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { WriterTitle, WriterSwitch, WriterItem, Follow } from '../style';

class Writer extends Component {
  render() {
    const { writer } = this.props;
    return (
      <Fragment>
        <WriterTitle>
          推荐作者
          <WriterSwitch>换一批</WriterSwitch>
        </WriterTitle>
        {writer.map((item) => {
          return (
            <WriterItem key={item.get('id')}>
              <div className="name">
                {item.get('name')}
                <Follow>+关注</Follow>
              </div>
              <p className="desc">{item.get('desc')}</p>
            </WriterItem>
          );
        })}
      </Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    writer: state.getIn(['home', 'writer']),
  };
};

export default connect(mapState)(Writer);
