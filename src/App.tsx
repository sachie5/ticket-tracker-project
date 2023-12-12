import "./App.scss";
import staff from "./data/staff";
import StaffTile from "./components/StaffTile/StaffTile";

const App = () => {
  return (
     <div className="tracker">
      <h1 className="tracker__heading">Ticket Tracker</h1>
        <StaffTile staff={staff}/>
   </div>
 )
}


export default App;