import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <section className='Profiles'>
        <div className='Containers'>
          <h1>Our Employees</h1>
          <Cards />
        </div>
      </section>
    </div>
  );
}

export default App;
