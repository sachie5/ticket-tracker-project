import "./App.scss";
import { useState } from 'react';
import Staff from "./types/Staff";
import staff from "./data/staff";
import StaffTile from "./components/StaffTile/StaffTile";


const App = () => {


 return (
  <><header className="title">
    <h1 className="title__heading">Ticket Tracker</h1>
    </header>
    <div className="tracker">
     <StaffTile />
   </div></>
 )
}


export default App;