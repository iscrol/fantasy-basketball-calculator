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

interface PlayerTableProps {
    players: Player[];
}

const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
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
                            <td>{index + 1}</td>
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
                            <td>{player.fgPct}</td>
                            <td>{player.ftPct}</td>
                            <td>{player.turnovers}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerTable;
