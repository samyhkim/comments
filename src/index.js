import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content="Great blog post!"
      />
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
