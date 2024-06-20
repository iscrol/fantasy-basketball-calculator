import './App.css';
import Title from "./components/title/Title";
import HelpButton from './components/help-button/HelpButton';
import StatisticalButtons from './components/statistical-buttons/StatisticalButtons';

function App() {
  return (
    <div>
      <HelpButton/>
      <Title/>
      <StatisticalButtons/>
    </div>
  )
}

export default App
