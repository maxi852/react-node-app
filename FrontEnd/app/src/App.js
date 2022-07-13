import './assets/css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostsCreate from './components/PostCreate';
import Posts from './components/Posts';

function App() {
  return (
    <div className='all-page'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<PostsCreate />}></Route>
          <Route exact path='/articles' element={<Posts />}></Route>
        </Routes>     
      </Router>
    </div>
  );
}

export default App;
