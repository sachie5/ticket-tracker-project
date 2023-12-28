import { ChangeEventHandler } from "react";
import "./SearchRole.scss";
import staff from "../../data/staff";


type SearchRoleProps = {
    name: string;
    filterName: string;
    handleSelect:ChangeEventHandler<HTMLSelectElement>;
};

const SearchRole = ({ name, filterName, handleSelect } : SearchRoleProps) => {

const staffRoles = staff.map(staff => staff.role);
const roles = [...new Set(staffRoles)];
console.log(roles);

    return (
        <><label className="tracker-search__filter tracker-search__filter--label" htmlFor={name}>Filter </label>
        <select className="tracker-search__filter tracker-search__filter--select" name={filterName} id={name} onChange={handleSelect}>
                <option value=""></option>
                {roles.map (role => (<option value={role.toLowerCase().split(" ").join("")} key={role}> {role}</option>))}
            </select>
            </>
        )
}

export default SearchRole;