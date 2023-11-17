import './App.css'
import { BearBox } from './components/BearBox';
import { AmzBox } from './components/AmzBox';


function App() {

  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox/>
      </div>
      <div>
        <AmzBox/>
      </div>
    </div>
  )
}

export default App;
