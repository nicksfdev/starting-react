import React from "react";
import './App.css';
import PropTypes from 'prop-types';
import pokemon from "./pokemon.json"

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: '500px',
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Business List</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        gridColumnGap: "1rem",
      }}>
        <div>
          <input
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow pokemon={pokemon} key={pokemon.id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
