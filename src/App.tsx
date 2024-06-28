import { useState, useEffect } from 'react';
import './App.css';
import Title from "./components/title/Title";
import HelpButton from './components/help-button/HelpButton';
import StatisticalButtons from './components/statistical-buttons/StatisticalButtons';
import PlayerTable from './components/player-table/PlayerTable';

interface Player {
    name: string;
    team: string;
    position: string;
    value: number;
    games: number;
    minutes: number;
    points: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
    threePM: number;
    fgPct: number;
    ftPct: number;
    turnovers: number;
}

function App() {
    // State to hold players data
    const [players, setPlayers] = useState<Player[]>([]);
    // State to manage which statistics are active
    const [activeStats, setActiveStats] = useState<string[]>(["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"]);

    // Function to fetch player data based on active statistics
    const fetchPlayers = async () => {
        try {
            const statsQuery = activeStats.join('&stats=');
            const apiUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${apiUrl}?stats=${statsQuery}`);
            const data: Player[] = await response.json();
            setPlayers(data);
        } catch (error) {
            console.error('Failed to fetch players:', error);
        }
    };

    // Effect to fetch players when activeStats changes
    useEffect(() => {
        fetchPlayers();
    }, [activeStats]);

    // Function to handle toggling statistics
    const handleToggleStat = (stat: string) => {
        setActiveStats(prev => 
            prev.includes(stat) ? prev.filter(s => s !== stat) : [...prev, stat]
        );
    };

    return (
        <div>
            <header>
                <HelpButton />
            </header>
            <Title />
            <StatisticalButtons activeStats={activeStats} onToggleStat={handleToggleStat} />
            <PlayerTable players={players} />
        </div>
    );
}

export default App;
