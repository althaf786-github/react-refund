
import './App.css';
import * as ReactBootstrap from "react-bootstrap";


const App = () => {
  const players = [
    {position: "forward", Name: "jefin", Team: "brazil"},
    {position: "backward", Name: "hussian", Team: "britan"},
    {position: "center", Name: "huon", Team: "america"},
    {position: "back", Name: "althaf", Team: "india"},
  ]
  const renderplayer = (player, index) => {
    return(
      <tr key={index}>
        <td>{player.position}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
      </tr>
    )
  }
  return (
    <div className="App">
      <h2>REFUND TABLE</h2>
      <ReactBootstrap.Table striped bordered hover>

  <thead>
    <tr>
      
      <th>refund id</th>
      <th>transaction id</th>
      <th>amount</th>
      <th>credited on</th>
      <th>status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1246854780</td>
      <td>5478123698</td>
      <td>RS.1000</td>
      <td>feb 21 2021,5.34 AM</td>
      <td>processed</td>
    </tr>
    <tr>
      <td>1247865897</td>
      <td>5214875001</td>
      <td>RS.2100</td>
      <td>mar 14 2021,10.15 AM</td>
      <td>processed</td>
    </tr>
    <tr>
      <td>1258741236</td>
      <td>5698745125</td>
      <td>RS.4500</td>
      <td>jan 01 2020,12.36 PM</td>
      <td>processed</td>
    </tr>
  </tbody>
</ReactBootstrap.Table>
    
    </div>
  );
}

export default App;
