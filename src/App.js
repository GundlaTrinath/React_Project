import './App.css';
// import { Container, Card, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './Components/profiles';

function App() {
  return (
    <div className="App">
      <section className='bg-light py-3'>
        <h1 className='text-dark mb-3'>Our Employees</h1>
        <div>
        <Profile/>
        </div>
      </section>
    </div>
  );
}

export default App;
