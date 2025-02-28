import './App.css';

import { Navbar } from '@/components/Navbar/Navbar';
import { Button } from './components/ui/button';

function App() {
  console.log('test');
  return (
    <>
      <Navbar />
      <Button>Bienvenido/a a beerdin!</Button>
    </>
  );
}

export default App;
