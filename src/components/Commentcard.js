import "../App.js"
export default function Commentcard(props) {
  console.log(props);

  const dateToTime = date => date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  });

    const dateString = props.item.createdAt;
    const userOffset = new Date().getTimezoneOffset()*60*1000;
    const localDate = new Date(dateString);
    const commenttime = dateToTime(localDate);
    return (
      <div className="comment-card">
        <div className="comment-row">
          <span className="commentor">{props.item.author}</span>
          <span className="comment-date"> {props.item.createdAt?.substr(0,10) + " " + commenttime}</span>
        </div>
        <p className="comment-text">{props.item.comment}</p>
      </div>
    );
}