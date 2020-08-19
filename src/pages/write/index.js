import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <h2>写文章页面.。</h2>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin']),
  };
};

export default connect(mapState, null)(Write);
