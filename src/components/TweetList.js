function TweetList(props) {
  return (
    <div className="TweetList">
      <h2>TweetList </h2>
      {props.children}
      <br />
      <hr />
    </div>
  );
}
 
export default TweetList;