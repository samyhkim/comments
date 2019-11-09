import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="Great blog post!"
        />
      </ApprovalCard>
      <CommentDetails
        author="Alex"
        timeAgo="Today at 2:00AM"
        avatar={faker.image.avatar()}
        content="Informative. Thanks!"
      />
      <CommentDetails
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        avatar={faker.image.avatar()}
        content="Looks great."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
