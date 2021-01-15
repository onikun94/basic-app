import './App.css';
import BasicHooks from './components/BasicHooks';
import BasicLifeCycle from './components/BasicLifeCycle';
import BasicProps from './components/BasicProps'
import BasicState from './components/BasicState'

function App() {
  return (
    <div className="App">
      <BasicProps name ={"propsの基本"}/>
      <BasicState />
      <BasicLifeCycle />
      <BasicHooks />
    </div>
  );
}

export default App;
