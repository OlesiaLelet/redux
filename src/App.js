
import './App.css';
import NewPost from './components/NewPost/NewPost';
import Posts from './components/Posts/Posts';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Posts/>}></Route>
          <Route path="newPost" element={<NewPost/>}></Route>
        </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
