
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Container from './Components/Layout/Container';
import Cards from './Components/Pages/Cards';





function App() {
  return (
    <div className="App">
      
      <ItemListContainer greeting="Bienvenidos!" />
      <Container>
      <Cards/>
      </Container>
      
      
     
    </div>
  );
}

export default App;
