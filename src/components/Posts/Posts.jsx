import styles from './Posts.module.css';
import Post from '../Post/Post.jsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';




function Posts() {
    const data = useSelector ( (state) => state.postData.posts);


  return (
    <div className={styles.content}>
      <NavLink to="newPost" className={styles.content__link}>Create posts</NavLink>
      
      <ul> {data.map((item) => (
        <li key={item.id }> 
          <Post name={item.user} avatar={item.avatar} nickname={item.nickname} date={item.date} text={item.text} photo={item.postPict } 
      commAmount = {item.commentsAmount} sharingsAmount = {item.sharingsAmount} likesAmount = {item.likesAmount} id={item.id} commentsOfPost={item.comments}/>
      </li>
    
       ))} 
      </ul>
  
   
    </div>
  
    
  )
}
export default Posts;
