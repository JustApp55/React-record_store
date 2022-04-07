import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Songs from './components/Songs'
import Show from './components/Show'
import Edit from './components/Edit'
import Create from './components/Create'


function App() {
  return (
    <Router className="App">
       <nav id="home">
         <Link to='/'>Home</Link>
       </nav>
      <Routes className="route">
       <Route path='/' element={<Songs/>}/>
       <Route path='/:id' element={<Show/>}/>
       <Route path='/:id/edit' element={<Edit />} />
       <Route path='/create' element={<Create/>}/>
      </Routes>
    </Router>
  );
}



export default App;
