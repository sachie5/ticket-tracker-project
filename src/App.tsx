import "./App.scss";
import { FormEvent, ChangeEvent, useState } from "react";
import staff from "./data/staff";
import StaffTile from "./components/StaffTile/StaffTile";
import SearchStaff from "./components/SearchStaff/SearchStaff";
import SearchRole from "./components/SearchRole/SearchRole";

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value;
    console.log(searchTerm)
    setSearchTerm(searchWord)
  }

  const [filterName, setFilterName] = useState<string>("");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const filterRole = event.currentTarget.value.replace(/-/g,"").toLowerCase();
    setFilterName(filterRole);
  }

  const filteredStaff = staff.filter(staff => {
    return staff.name.toLowerCase().includes(searchTerm) && staff.role.split(" ").join("").toLowerCase().includes(filterName);
  });

/*   const filteredRole = staff.filter(member => {
    return member.role.trim().toLowerCase()
  })
  console.log(filteredRole);
 */
  return (
    <><header className="header">
      <h1 className="header__heading">Ticket Tracker</h1>
    </header>
      <section className="tracker">
        <div className="tracker-search">
          <SearchStaff label="Search Staff" searchTerm={searchTerm} handleInput={handleInput} />
          <SearchRole name="Filter Role" filterName={filterName} handleSelect={handleSelect}/>
        </div>
        <StaffTile staff={filteredStaff}/>
      </section></>
  )
};



export default App;