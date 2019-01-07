import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Leo"
          timeAgo="2:00PM"
          avatar={faker.image.avatar()}
          content={faker.company.bs()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gride"
          timeAgo="5"
          avatar={faker.image.avatar()}
          content={faker.company.bs()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Le grenny"
          timeAgo="7"
          avatar={faker.image.avatar()}
          content={faker.company.bs()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
