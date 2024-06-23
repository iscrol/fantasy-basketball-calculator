import React from 'react';
import styles from './PlayerTable.module.css';

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

const PlayerTable: React.FC = () => {
    // Dummy data for players
    const players: Player[] = [
        { name: 'Player 1', team: 'OKC', position: 'PG', value: 95, games: 30, minutes: 35, points: 25, rebounds: 10, assists: 5, steals: 2, blocks: 1, threePM: 3, fgPct: 0.45, ftPct: 0.85, turnovers: 2 },
        { name: 'Player 2', team: 'LAC', position: 'SF', value: 90, games: 32, minutes: 33, points: 20, rebounds: 8, assists: 7, steals: 1, blocks: 0, threePM: 4, fgPct: 0.50, ftPct: 0.90, turnovers: 3 },
        { name: 'Player 3', team: 'PHX', position: 'C',value: 85, games: 28, minutes: 36, points: 15, rebounds: 5, assists: 10, steals: 3, blocks: 1, threePM: 2, fgPct: 0.55, ftPct: 0.75, turnovers: 1 },
        // Add more dummy players as needed
    ];

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Value</th>
                        <th>Games</th>
                        <th>Minutes</th>
                        <th>Points</th>
                        <th>Rebounds</th>
                        <th>Assists</th>
                        <th>Steals</th>
                        <th>Blocks</th>
                        <th>3PM</th>
                        <th>FG%</th>
                        <th>FT%</th>
                        <th>Turnovers</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td> {/* Rank column */}
                            <td>{player.name}</td>
                            <td>{player.team}</td>
                            <td>{player.position}</td>
                            <td>{player.value}</td>
                            <td>{player.games}</td>
                            <td>{player.minutes}</td>
                            <td>{player.points}</td>
                            <td>{player.rebounds}</td>
                            <td>{player.assists}</td>
                            <td>{player.steals}</td>
                            <td>{player.blocks}</td>
                            <td>{player.threePM}</td>
                            <td>{(player.fgPct * 100).toFixed(1)}%</td>
                            <td>{(player.ftPct * 100).toFixed(1)}%</td>
                            <td>{player.turnovers}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerTable;
