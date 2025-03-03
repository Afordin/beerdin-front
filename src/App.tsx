import MessageByAuthorCard from './components/MessageByAuthorCard';
import { RootLayout } from './layouts/RootLayout/RootLayout';

import './App.css';

function App() {
  return (
    <>
      <RootLayout>
        <div className="w-[480px]">
          <MessageByAuthorCard />
        </div>
      </RootLayout>
    </>
  );
}

export default App;
