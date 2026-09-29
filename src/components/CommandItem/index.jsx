import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment} = props
  const {uniqueNo, name, commentText} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const onDelete = () => {
    deleteComment(uniqueNo)
  }

  return (
    <div>
      <li className="list-item">
        <div className="intial-and-comment-container">
          <p className="initial">{initial}</p>
          <div className="name-and-comment-container">
            <p className="name-text">{name}</p>
            <p className="comment-text">{commentText}</p>
          </div>
        </div>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="cross"
            className="delete-img"
            onClick={onDelete}
          />
        </button>
      </li>
      <hr className="horizontal-line" />
    </div>
  )
}

export default CommentItem
