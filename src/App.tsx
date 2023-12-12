import "./App.scss";
import { FormEvent, useState } from "react";
import staff from "./data/staff";
import StaffTile from "./components/StaffTile/StaffTile";
import SearchStaff from "./components/SearchStaff/SearchStaff";

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    setSearchTerm(searchWord)
  }

  const filteredStaff= staff.filter(staff=> {
    return staff.name.toLowerCase().includes(searchTerm)
  });

  return (
     <div className="tracker">
      <h1 className="tracker__heading">Ticket Tracker</h1>
        <SearchStaff label="Search Staff" searchTerm={searchTerm} handleInput={handleInput}/>
        <StaffTile staff={filteredStaff}/>
   </div>
 )
}


export default App;