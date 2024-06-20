import './App.css';
import Title from "./components/title/Title";
import HelpButton from './components/help-button/HelpButton';
import StatisticalButtons from './components/statistical-buttons/StatisticalButtons';
import PlayerTable from './components/player-table/PlayerTable';

function App() {
  return (
    <div>
      <HelpButton/>
      <Title/>
      <StatisticalButtons/>
      <PlayerTable/>
    </div>
  )
}

export default App
