import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 28px;
`;

export const Container = styled.div`
  float: left;
  width: 625px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  img {
    width: 150px;
    height: 100px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const ListInfo = styled.div`
  flex: 1;
  margin-right: 10px;
  h3 {
    color: #333;
    font-size: 18px;
    line-height: 1.5;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: #999;
    font-size: 13px;
    line-height: 24px;
  }
`;

export const Right = styled.div`
  float: right;
  width: 280px;
`;

export const RecommendItem = styled.a`
  display: block;
  height: 44px;
  cursor: pointer;
  font-size: 18px;
  line-height: 44px;
  padding-left: 24px;
  border-radius: 5px;
  margin-bottom: 10px;
  &.clud {
    color: #fff;
    background-color: #ffb84e;
  }
  &.books {
    color: #c0903a;
    background-color: #f5e1bd;
  }
  &.publications {
    color: #508d85;
    background-color: #c1e4de;
  }
  &.etm {
    color: #4886a8;
    background-color: #b7d6ec;
  }
`;

export const WriterTitle = styled.div`
  color: #999;
  font-size: 14px;
  margin: 44px 0 20px;
`;

export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;
`;

export const WriterItem = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  .name {
    color: #2f2f2f;
    cursor: pointer;
    margin-bottom: 8px;
    &:hover {
      color: #ffb84e
    }
  }
  .desc {
    color: #969696;
    font-size: 12px;
  }
`;

export const Follow = styled.div`
  float: right;
  color: #42c02e;
  cursor: pointer;
`;