import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import FormBackdrop from './components/Backdrop/FormBackdrop/FormBackdrop';
import MarketPlaceModal from './components/Modal/MarketPlaceModal/MarketPlaceModal';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {width < 768 && (
        <FormBackdrop onClick={() => {
        }}>
          <MarketPlaceModal/>
        </FormBackdrop>
      )}
      <Navigation/>
    </div>
  );
}

export default App;
