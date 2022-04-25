import './App.css';
import 
{
  BrowserRouter as Router,
  Routes,
  Route,
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
    <>
    <div>Resume</div>
<img src="data:image/png;base64,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"></img>
    </>
  )
}



export default App;
