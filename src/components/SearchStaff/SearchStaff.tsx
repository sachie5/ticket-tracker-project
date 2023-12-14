import { FormEventHandler } from "react";
import "./SearchStaff.scss";

type SearchStaffProps = {
    label: string;
    searchTerm: string;
    handleInput:FormEventHandler<HTMLInputElement>;
};

const SearchStaff = ({label, searchTerm, handleInput}: SearchStaffProps) => {
    return (
            <label htmlFor={label} className="tracker-search__staff">
                Search: <input type="text" id={label} name={label} value={searchTerm} onInput={handleInput} className="tracker-search_-staff-input"/>
            </label>
    )
}

export default SearchStaff;