import './App.css';
import Navigation from './navigation/navigation';
import { ModalProvider } from './components/modals/ModalContext';

function App() {


  return (
    <div className="App">
      <ModalProvider>
        <Navigation/>
      </ModalProvider>
    </div>
  );
}

export default App;
