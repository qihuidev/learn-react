import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo } from '../style';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {list.map((item) => {
          const hasImg = item.get('imgUrl') ? (
            <img src={item.get('imgUrl')} alt="图片" />
          ) : (
              ''
            );
          return (
            <Link to={`/detail/${item.get('id')}`} key={item.get('id')}>
              <ListItem>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('content')}</p>
                </ListInfo>
                {hasImg}
              </ListItem>
            </Link>
          );
        })}
      </Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']),
  };
};

export default connect(mapState)(List);
