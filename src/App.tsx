import './App.css';

import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import TopChannelsCard from './components/TopChannelsCard';

function App() {
  return (
    <>
      <Navbar />
      <div className="my-16 w-[588px]">
        <TopChannelsCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
