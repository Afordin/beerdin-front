import './App.css';

import { Navbar } from '@/components/Navbar/Navbar';
import MessageByAuthorCard from './components/MessageByAuthorCard';

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16 w-[480px]">
        <MessageByAuthorCard />
      </div>
    </>
  );
}

export default App;
