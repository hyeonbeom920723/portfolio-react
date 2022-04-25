import './App.css';
import 
{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/Nav';


{/* <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}>Home page</Route>
          <Route exact path='/resume' element={<Resume />}></Route>
        </Routes>
      </div>
    </Router> */}

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

        <Routes>
          <Route exact path='/' element={<Home />}>Home Page</Route>
          <Route exact path='/resume' element={<Resume />}>Resume</Route>
        </Routes>
       {/* <div>
          <ul className='lists'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='resume'>Go to Resume Page</Link></li>
          </ul>
        </div> */}
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>Home</div>
  )
}

function Resume() {
  return (
    <div>resume</div>
  )
}



export default App;
