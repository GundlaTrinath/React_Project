import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './Components/Cards';
import Foo from './Components/Foo';

function App() {
  return (
    <div className="App">
      <section className='Profiles'>
        <div className='Containers'>
          <h1>Our Employees</h1>
          {/* <Cards /> */}
          <Foo/>
        </div>
      </section>
    </div>
  );
}

export default App;
