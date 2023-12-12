import "./App.scss";
import { FormEvent, ChangeEvent, useState } from "react";
import staff from "./data/staff";
import StaffTile from "./components/StaffTile/StaffTile";
import SearchStaff from "./components/SearchStaff/SearchStaff";
import SearchRole from "./components/SearchRole/SearchRole";

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value.;
    setSearchTerm(searchWord)
  }

  const filteredStaff = staff.filter(staff => {
    return staff.name.toLowerCase().includes(searchTerm)
  });

  const [filterName, setFilterName] = useState<string>("");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const filterRole = event.currentTarget.value;
    setFilterName(filterRole);
  }

  const filteredRole = staff.filter(member => filterName === "" || filterName === member.role.trim().toLowerCase())

  return (
    <><header className="header">
      <h1 className="header__heading">Ticket Tracker</h1>
      <SearchStaff label="Search Staff" searchTerm={searchTerm} handleInput={handleInput} />
      <SearchRole name="Filter Role" role={filterName} handleSelect={handleSelect}/>
    </header>
      <div className="tracker">
        <StaffTile staff={filteredStaff} role={filteredRole}/>
      </div></>
  )
}


export default App;