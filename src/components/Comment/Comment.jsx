import styles from './Comment.module.css';
import noAvatar from '../../icons/noAvat.png'

const Comment = ({avatar, nick, text} ) => {
 
    return (
        <div className={styles.content}>
              <div className={styles.comment}>
                <img className={styles.avatar} onerror={avatar = noAvatar } src={ avatar } alt="avatar"></img>
                <div className={styles.nickAndText}>
                    <span className={styles.nick}>{nick}</span>
                    <div >{text}</div>
                </div>
              </div>
        </div>
    )
}

export default Comment;