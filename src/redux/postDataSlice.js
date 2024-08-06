import { createSlice } from '@reduxjs/toolkit';

const ANAKIN_IMAGE="https://i.pinimg.com/564x/8f/3d/a0/8f3da08bfc4ed75e1dbb45cfcaf97578.jpg"
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const insideOut2 = "https://pbs.twimg.com/media/GQAINf-bEAEjd0N?format=jpg&name=900x900";
const anxiety ="https://pbs.twimg.com/profile_images/1666739253248921600/APFLohJ1_400x400.jpg";
const TEDTALKS ="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_400x400.jpg";
const TEDAI = "https://pbs.twimg.com/media/GOHR-MbWYAAo7LM?format=jpg&name=900x900";


const initialState = {
  posts: [
      { user: "Anakin Skywalker", 
        nickname:"@dart_vader",
        avatar:  ANAKIN_IMAGE, 
        date: "26 лют.", 
        text: "WTF? Who is Ray? Why is she Skywalker? Luke...?",
        postPict: RAY_IMAGE,
        likesAmount: 887,
        commentsAmount: 0, 
        sharingsAmount: 222,
        id: 1,
        comments: [],
      },
      { user: "TED TALKS", 
        nickname: "@TEDtalks",
        avatar:  TEDTALKS, 
        date: "21 трав.", 
        text: 
        `When it comes to AI, what's real and what's just hype? Join host <a href="https://x.com/bilawalsidhu">@BilawalSidhu</a> 
        as he explores the future of tech with experts, artists, journalists and more.
        Listen to The TED AI Show wherever you get your podcasts: <a href="http://t.ted.com/w7h9trI">t.ted.com/w7h9trI</a>`,
        postPict: TEDAI,
        likesAmount: 4322,
        commentsAmount: 0, 
        sharingsAmount: 321,
        id:2,
        comments: []
      },
      { user: "Anxiety", 
        nickname: "@thedailymsgs",
        avatar: anxiety, 
        date: "10 лип.", 
        text: "When you grow.",
        postPict: insideOut2,
        likesAmount: 800,
        commentsAmount: 0, 
        sharingsAmount: 146,
        id:3,
        comments: []
      }

  ],
  users: [ 
    {name:"Anakin Skywalker",
     nickname: "@dart_vader",
     avatar: ANAKIN_IMAGE,
     userId:1

  },
  {
    name:"TED TALKS",
    nickname: "@TEDtalks",
    avatar:  TEDTALKS,
    userId:2
  } ,
  {
    name:"Anxiety",
    nickname: "@thedailymsgs",
    avatar:  anxiety,
    userId:3
  },
  {
    name:"Emma_Antoniuk",
    nickname:"@emmocean",
    avatar: 'https://vikna.tv/wp-content/uploads/2021/12/21/emma-antonyuk-467x467.png',
    userId:4
  }, 
  {
    name:  "Petro_Poroshenko",
    nickname:"@Poroshenko",
    avatar: 'https://static.rada.gov.ua/dep_img9/es1.jpg',
    userId:5
  },
 ],

  
}


export const postDataSlice = createSlice({
  name: 'postData',
  initialState,
   reducers: {
    saveUser (state=initialState, actions) {
      state.posts.push({text: actions.payload.text,
      link: actions.payload.link,
      user:  actions.payload.user,
      id:  actions.payload.id,
      avatar: actions.payload.avatar,
      nickname: actions.payload.nickname,
      date: actions.payload.date,
      likesAmount: actions.payload.likesAmount,
      commentsAmount: actions.payload.commentsAmount, 
      sharingsAmount: actions.payload.sharingsAmount,
      comments:  actions.payload.comments,
       })
      
    },
    clearPost (state=initialState) {

      state.posts.pop();
    
    },
    addComment (state=initialState, actions) {
       
     
    const findedPost= state.posts.find(item => item.id===actions.payload.userId);
    findedPost.comments.push(actions.payload)

    }
  
  }
   })

// Action creators are generated for each case reducer function
export const { saveUser, clearPost, addComment} = postDataSlice.actions

export default postDataSlice.reducer;