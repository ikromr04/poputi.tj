// src/Places.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface Place {
  id: string;
  name: string;
  vicinity: string;
}

const Places: React.FC = () => {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/place/textsearch/json',
        {
          params: {
            query,
            key: 'AIzaSyCOu9Rl4oqL2JyXSBwIIHYqRyg8mQ1htaE',
          },
        }
      );
      setPlaces(response.data.results);
    } catch (error) {
      console.error('Error fetching places:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Places</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter place name"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <h2>{place.name}</h2>
            <p>{place.vicinity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Places;
