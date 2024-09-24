import logo from './logo.svg';
import './App.css';
//import TodoList from './pages/TodoLists';
import TodoList from './pages/TodoList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <Router>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">RESET APP</Link>
          </li>
          <li>
            <Link to="/application">BEGIN ADDING TASKS</Link> 
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" index element={<HomePage />} /> 
        <Route path="/application" element={<TodoList />} /> 
      </Routes>
    </Router>
  );
};

export default App;
