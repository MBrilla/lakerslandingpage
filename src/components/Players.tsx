import { useState, useEffect } from 'react';
import PlayerSilhouette from '../assets/lebronbronny.webp';
import { fetchLakersRoster, Player } from '../services/playerService';

interface PlayersProps {
  setShowPlayers: (show: boolean) => void;
}

const Players = ({ setShowPlayers }: PlayersProps) => {
  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const players = await fetchLakersRoster();
        setPlayersData(players);
      } catch (err) {
        setError('Failed to load roster data');
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  if (loading) {
    return <div className="players-container"><h2>Loading roster...</h2></div>;
  }

  if (error) {
    return <div className="players-container"><h2>{error}</h2></div>;
  }

  if (playersData.length === 0) {
    return <div className="players-container"><h2>No players found</h2></div>;
  }

  return (
    <div className="players-container">
      <button className="back-button" onClick={() => setShowPlayers(false)}>← Back to Team</button>
      <h2 className="section-title">Lakers Roster</h2>
      <div className="players-grid">
        {playersData.map((player) => (
          <div key={player.id} className="player-card">
            <div onClick={() => setSelectedPlayer(selectedPlayer === player.id ? null : player.id)}>
              <img src={player.imageUrl || PlayerSilhouette} alt={player.name} className="player-image" />
              <div className="player-info">
                <h3>{player.name}</h3>
              </div>
            </div>
            {selectedPlayer === player.id && (
              <div className="player-dropdown">
                <p className="player-number">#{player.number}</p>
                <p className="player-position">{player.position}</p>
                <div className="player-details">
                  <p>Height: {player.height}</p>
                  <p>Weight: {player.weight}</p>
                  </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;