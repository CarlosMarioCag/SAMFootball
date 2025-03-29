import { useState, useEffect } from "react";
import "./App.css";

interface Team {
  name: string;
  city: string;
  stadium: string;
  capacity: number;
}

interface Country {
  name: string;
  teams: Team[];
}

const mockData: Country[] = [
  {
    name: "England",
    teams: [
      {
        name: "Manchester United",
        city: "Manchester",
        stadium: "Old Trafford",
        capacity: 74310,
      },
      {
        name: "Liverpool FC",
        city: "Liverpool",
        stadium: "Anfield",
        capacity: 53394,
      },
      {
        name: "Arsenal FC",
        city: "London",
        stadium: "Emirates Stadium",
        capacity: 60704,
      },
      {
        name: "Chelsea FC",
        city: "London",
        stadium: "Stamford Bridge",
        capacity: 40341,
      },
      {
        name: "Manchester City",
        city: "Manchester",
        stadium: "Etihad Stadium",
        capacity: 55017,
      },
      {
        name: "Tottenham Hotspur",
        city: "London",
        stadium: "Tottenham Hotspur Stadium",
        capacity: 62850,
      },
      {
        name: "West Ham United",
        city: "London",
        stadium: "London Stadium",
        capacity: 60000,
      },
      {
        name: "Aston Villa",
        city: "Birmingham",
        stadium: "Villa Park",
        capacity: 42785,
      },
      {
        name: "Leicester City",
        city: "Leicester",
        stadium: "King Power Stadium",
        capacity: 32262,
      },
      {
        name: "Everton FC",
        city: "Liverpool",
        stadium: "Goodison Park",
        capacity: 39414,
      },
      {
        name: "Leeds United",
        city: "Leeds",
        stadium: "Elland Road",
        capacity: 37890,
      },
      {
        name: "Newcastle United",
        city: "Newcastle",
        stadium: "St James' Park",
        capacity: 52305,
      },
      {
        name: "Wolverhampton",
        city: "Wolverhampton",
        stadium: "Molineux Stadium",
        capacity: 32050,
      },
      {
        name: "Crystal Palace",
        city: "London",
        stadium: "Selhurst Park",
        capacity: 25486,
      },
      {
        name: "Brighton",
        city: "Brighton",
        stadium: "Falmer Stadium",
        capacity: 30750,
      },
      {
        name: "Fulham",
        city: "London",
        stadium: "Craven Cottage",
        capacity: 19359,
      },
      {
        name: "Brentford FC",
        city: "London",
        stadium: "Brentford Community Stadium",
        capacity: 17250,
      },
      {
        name: "Nottingham Forest",
        city: "Nottingham",
        stadium: "City Ground",
        capacity: 30445,
      },
      {
        name: "AFC Bournemouth",
        city: "Bournemouth",
        stadium: "Vitality Stadium",
        capacity: 11364,
      },
      {
        name: "Southampton FC",
        city: "Southampton",
        stadium: "St Mary's Stadium",
        capacity: 32384,
      },
    ],
  },
  {
    name: "Spain",
    teams: [
      {
        name: "Real Madrid",
        city: "Madrid",
        stadium: "Santiago Bernabéu",
        capacity: 81044,
      },
      {
        name: "FC Barcelona",
        city: "Barcelona",
        stadium: "Camp Nou",
        capacity: 99354,
      },
      {
        name: "Atlético Madrid",
        city: "Madrid",
        stadium: "Wanda Metropolitano",
        capacity: 68456,
      },
      {
        name: "Valencia CF",
        city: "Valencia",
        stadium: "Mestalla",
        capacity: 55000,
      },
      {
        name: "Sevilla FC",
        city: "Seville",
        stadium: "Ramón Sánchez Pizjuán",
        capacity: 43883,
      },
      // ... more Spanish teams (add up to 20 per country)
      {
        name: "Real Betis",
        city: "Seville",
        stadium: "Benito Villamarín",
        capacity: 60721,
      },
      {
        name: "Athletic Bilbao",
        city: "Bilbao",
        stadium: "San Mamés",
        capacity: 53289,
      },
      {
        name: "Villarreal CF",
        city: "Villarreal",
        stadium: "Estadio de la Cerámica",
        capacity: 23500,
      },
      {
        name: "Real Sociedad",
        city: "San Sebastián",
        stadium: "Reale Arena",
        capacity: 40000,
      },
      {
        name: "RCD Espanyol",
        city: "Barcelona",
        stadium: "RCDE Stadium",
        capacity: 40500,
      },
      {
        name: "Getafe CF",
        city: "Getafe",
        stadium: "Coliseum Alfonso Pérez",
        capacity: 17393,
      },
      {
        name: "Levante UD",
        city: "Valencia",
        stadium: "Estadio Ciudad de Valencia",
        capacity: 26354,
      },
      {
        name: "Granada CF",
        city: "Granada",
        stadium: "Nuevo Los Cármenes",
        capacity: 19336,
      },
      {
        name: "CA Osasuna",
        city: "Pamplona",
        stadium: "Estadio El Sadar",
        capacity: 23576,
      },
      {
        name: "Rayo Vallecano",
        city: "Madrid",
        stadium: "Estadio de Vallecas",
        capacity: 14708,
      },
      {
        name: "Elche CF",
        city: "Elche",
        stadium: "Estadio Manuel Martínez Valero",
        capacity: 33732,
      },
      {
        name: "Cádiz CF",
        city: "Cádiz",
        stadium: "Estadio Nuevo Mirandilla",
        capacity: 20724,
      },
      {
        name: "RCD Mallorca",
        city: "Palma",
        stadium: "Visit Mallorca Estadi",
        capacity: 23142,
      },
      {
        name: "Deportivo Alavés",
        city: "Vitoria-Gasteiz",
        stadium: "Mendizorrotza",
        capacity: 19840,
      },
      {
        name: "Celta Vigo",
        city: "Vigo",
        stadium: "Estadio de Balaídos",
        capacity: 29000,
      },
    ],
  },
  {
    name: "Germany",
    teams: [
      {
        name: "Bayern Munich",
        city: "Munich",
        stadium: "Allianz Arena",
        capacity: 75000,
      },
      {
        name: "Borussia Dortmund",
        city: "Dortmund",
        stadium: "Signal Iduna Park",
        capacity: 81365,
      },
      // ... more German teams (add up to 20 per country)
      {
        name: "RB Leipzig",
        city: "Leipzig",
        stadium: "Red Bull Arena",
        capacity: 47069,
      },
      {
        name: "Bayer 04 Leverkusen",
        city: "Leverkusen",
        stadium: "BayArena",
        capacity: 30210,
      },
      {
        name: "Borussia Mönchengladbach",
        city: "Mönchengladbach",
        stadium: "Borussia-Park",
        capacity: 54010,
      },
      {
        name: "Eintracht Frankfurt",
        city: "Frankfurt",
        stadium: "Deutsche Bank Park",
        capacity: 51500,
      },
      {
        name: "VfL Wolfsburg",
        city: "Wolfsburg",
        stadium: "Volkswagen Arena",
        capacity: 30000,
      },
      {
        name: "1. FC Köln",
        city: "Cologne",
        stadium: "RheinEnergieStadion",
        capacity: 49698,
      },
      {
        name: "SC Freiburg",
        city: "Freiburg",
        stadium: "Europa-Park Stadion",
        capacity: 34700,
      },
      {
        name: "TSG 1899 Hoffenheim",
        city: "Sinsheim",
        stadium: "PreZero Arena",
        capacity: 30150,
      },
      {
        name: "1. FSV Mainz 05",
        city: "Mainz",
        stadium: "MEWA ARENA",
        capacity: 34034,
      },
      {
        name: "FC Augsburg",
        city: "Augsburg",
        stadium: "WWK ARENA",
        capacity: 30660,
      },
      {
        name: "VfB Stuttgart",
        city: "Stuttgart",
        stadium: "Mercedes-Benz Arena",
        capacity: 60449,
      },
      {
        name: "Hertha BSC",
        city: "Berlin",
        stadium: "Olympiastadion",
        capacity: 74475,
      },
      {
        name: "Arminia Bielefeld",
        city: "Bielefeld",
        stadium: "SchücoArena",
        capacity: 27300,
      },
      {
        name: "VfL Bochum",
        city: "Bochum",
        stadium: "Vonovia Ruhrstadion",
        capacity: 27599,
      },
      {
        name: "SpVgg Greuther Fürth",
        city: "Fürth",
        stadium: "Sportpark Ronhof Thomas Sommer",
        capacity: 16626,
      },
      {
        name: "FC Ingolstadt 04",
        city: "Ingolstadt",
        stadium: "Audi Sportpark",
        capacity: 15200,
      },
      {
        name: "SV Sandhausen",
        city: "Sandhausen",
        stadium: "BWT-Stadion am Hardtwald",
        capacity: 15414,
      },
    ],
  },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const selectedCountryData = mockData.find(
      (country) => country.name === selectedCountry
    );
    if (selectedCountryData) {
      setTeams(selectedCountryData.teams);
    } else {
      setTeams([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="board-container">
      <div className="wp-title">
        {" "}
        <strong> SAM</strong> Football{" "}
      </div>

      <div className="input-container">
        <div className="selector-league-label">Equipos de la Liga:</div>
        <select
          className="selector-league"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select a country</option>
          {mockData.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="panel-container">
        <div className="teams-table-container">
          <table>
            <thead>
              <tr style={{ backgroundColor: "#000000" }}>
                <th>Team</th>
                <th>City</th>
                <th>Stadium</th>
                <th>Capacity</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.name}>
                  <td>{team.name}</td>
                  <td>{team.city}</td>
                  <td>{team.stadium}</td>
                  <td>{team.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sam-football-version">
        <h6>SAM Football v.0.0.1</h6>
      </div>
    </div>
  );
}

export default App;
