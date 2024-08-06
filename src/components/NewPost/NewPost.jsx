import { useSelector, useDispatch } from 'react-redux';
import styles from './NewPost.module.css';
import { useState } from 'react';
import { saveUser, clearPost} from '../../redux/postDataSlice';
import { NavLink } from 'react-router-dom';


const NewPost = () => {
   
   const [text, setText] = useState("");
   const [link, setLink] = useState("");
   const [user, setUser] = useState("");

   const today = new Date();

   const dispatch = useDispatch();

   const users = useSelector( (state) => state.postData.users);
   const posts = useSelector( (state) => state.postData.posts);
   

    const handlerChange = (event) => {
      const  {value} = event.target;
      setText(value);
        
    }
    const handlerChangeLink = (event) => {
        const  {value} = event.target;
        setLink(value);
          
      }
      const handlerChangeUser = (event) => {
        const  {value} = event.target;
        setUser(value);
        console.log(value);
        
          
      }


      const removeLastPost = () => {
        dispatch(clearPost())
      }

      const findNickAndAvatar = (users, user) =>{
       const oneUser = users.find(item => item.name===user)
       return oneUser;
      }
   
      const handlerSaveText = () => {
        const newPost = {
            text: text,
            link: link,
            user: user,
            id: posts.length+1,
            avatar: findNickAndAvatar(users, user).avatar,
            nickname: findNickAndAvatar(users, user).nickname,
            date: `${today.getDate()} ${today.toLocaleString("uk-UA", { month: "short" })}`,
            likesAmount: 0,
            commentsAmount: 0, 
            sharingsAmount: 0,  
            comments: [],
               

        



        
        }
        dispatch(saveUser(newPost));
        
        setText("");
        setLink("");
        setUser("");
    }


    return (
    <div className={styles.newPost}>
        <header  className={styles.newPost__header}>
            <h2  className={styles.header__title}>Create new post</h2>
            <NavLink to='/' className={styles.header__link} >Posts</NavLink>
        </header>
        <form  action="#" className={styles.form}>
            <input type="text" value={text} name='postText' onChange={handlerChange} placeholder='Text' className={styles.input}></input>
            <input type='text' value={link} name='linkPostPict' onChange={handlerChangeLink} placeholder='Link to picture'></input>
            <select name="authors" size={1} value={user} onChange={handlerChangeUser} required>
               
                  {users.map((item) => (
                     <option key={item.userId} value={item.name}>{item.name}</option>
                  ))
                  }
                
            </select>


    
            
            <button type='submit' onClick={handlerSaveText}>Save post</button>
            <button onClick={removeLastPost}>Remove last post</button>
            
        </form> 
    </div>
    )
}

export default NewPost;