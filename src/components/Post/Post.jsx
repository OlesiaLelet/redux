import styles from './Post.module.css';
import comments from "../../icons/chat.png";
import sharings from "../../icons/share.png";
import like from "../../icons/heart.png";
import download from "../../icons/download.png";
import verify from "../../icons/verify.png";
import { useSelector, useDispatch } from 'react-redux';
import { addComment} from '../../redux/postDataSlice';

import { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';




const Post = ({name, avatar, photo, nickname, date, text, commAmount, sharingsAmount, likesAmount, id, commentsOfPost}) => {

 
 
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    newComment: "",
    nick: "",
    avatarComment: "",
  });

  const [isLike, setIsLike] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isComment, setIsComment] = useState(false);



  

  const handlerValues= (event) => {

    const {value, name} = event.target;

    setValues({
      ...values, 
      [name]: value
    })
    ;
    
  }

  


  


  const handlerLike = () => {
    setIsLike(!isLike);
  };
  const handlerShare = () => {
    setIsSharing(!isSharing);

  };
  const handlerComment = () => {
    setIsComment(!isComment);

  };
console.log(isComment);

  

 const posts = useSelector( (state) => state.postData.posts);
//  const findedPost= posts.find(item => item.id===id)
//  console.log(findedPost);
 

   const handlerSaveComment = () => {

    const commentWithId = {...values, 
      userId: id,
      id: commentsOfPost.length+1,
    }
   dispatch(addComment(commentWithId));
      setValues({
    newComment: "",
    nick: "",
    avatarComment: "",
  })
   
      
  }
   useEffect (()=> {

   }, [comments])
  


    return  (<div className={styles.post}>
    <div className={styles.post__user}>
       <img className={styles.user__avatar} src={avatar} alt="avatar"></img>
       <span className={styles.user__name}>{name}</span>
       <img className={styles.user__sign} src={verify} alt="verified"></img>
       <span className={styles.user__nickname}>{nickname}</span>
       <span className={styles.user__date}>{date}</span>
    </div>
    <div className={styles.post__text} dangerouslySetInnerHTML= {{__html: text}}></div>
    <img className={styles.post__pict} src={photo ? photo : 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'} alt="post_pict"></img>
    <div className={styles.post__details}>
        <div className={styles.details__coments}>
          <img className={styles.comments__icon} src={comments} alt='comments__icon' onClick={handlerComment}></img>  
          <span className={styles.comments__amount}>{ commentsOfPost.length>0 ? commentsOfPost.length: ""}</span>
        </div>

        <div className={styles.details__sharings}>
          <img className={styles.comments__icon} src={sharings} alt='sharings__icon' onClick={handlerShare}></img> 
          <span className={styles.sharings__amount}>{isSharing? sharingsAmount+1: sharingsAmount>0 ?sharingsAmount :''}</span> 
        </div>

        <div className={styles.details__likes}>
          <img className={styles.comments__icon} src={like} alt='like__icon' onClick={handlerLike}></img>
          <span className={styles.likes__amount}>{ isLike ? likesAmount+1: likesAmount>0? likesAmount: ''}</span>
        </div>

        <div className={styles.details__download}>
          <img className={styles.comments__icon} src={download} alt='download__icon'></img>
        </div>
  </div>
  {isComment ? 
  <div>
  <div className={styles.newComment}>
    <input type='text' placeholder='nick' value={values.nick} onChange={handlerValues} name="nick" ></input>
    <input type='text' placeholder='write your comment' value={values.newComment} onChange={handlerValues} name="newComment"></input>
    <input type='text' placeholder='link to your avatar' value={values.avatarComment} onChange={handlerValues} name="avatarComment"></input>
    <button type='submit' onClick={handlerSaveComment}>publish</button>
  </div>
  <ul>{commentsOfPost.map( item => (
    <li key={item.id}>
      <Comment avatar={item.avatarComment} nick={item.nick} text={item.newComment}/> 
    </li>
  )
  )}
  </ul> 
  </div>
  : ''}

  
   
   
  
</div>)

    
}
export default Post;