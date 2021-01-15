import './App.css';
import BasicLifeCycle from './components/BasicLifeCycle';
import BasicProps from './components/BasicProps'
import BasicState from './components/BasicState'

function App() {
  return (
    <div className="App">
      <BasicProps name ={"propsの基本"}/>
      <BasicState />
      <BasicLifeCycle />
    </div>
  );
}

export default App;
