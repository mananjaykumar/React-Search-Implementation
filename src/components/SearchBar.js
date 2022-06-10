import { useState } from "react";
import './SearchBar.css';

const products = [
    "hair dryer",
    "comb",
    "heat protector",
    "hair wax",
    "powder Wax",
    "perfume",
    "nail paint",
    "smartphones",
    "mobile",
    "earphones",
    "redmi",
    "iphone",
];

const SearchBar = () => {
    const [searchVal, setSearchVal] = useState("");
    const [filteredVal, setFilteredVal] = useState([]);
    const handleSearch = searchQuery => {
        // products.map(product => {
        //     if(searchQuery != ""){
        //         if(product.includes(searchQuery.toLowerCase())){
        //             setFilteredVal([product]);
        //         }
        //     }else{
        //         setFilteredVal(['Search anything']);
        //     }
            
            
        // })
        const result = products.filter(product => product.includes(searchQuery.toLowerCase()));
        // console.log("In result", result);
        if(searchQuery.length != 0){
            if(result.length !== 0){
                setFilteredVal([...result]);
            }else{
                setFilteredVal(["Not Found!"]);
            }
        }else{
            setFilteredVal(["Search anything"]);
        }
        
    }
    const searchValueChangeHandler = (event) => {
        setSearchVal(event.target.value);
        handleSearch(event.target.value);
    }
    return(
        <div className="search-container">
            <input className="search-field" type="text" value={searchVal} onChange={searchValueChangeHandler}/>
            <h2>Searched Product is: 
                {
                    filteredVal.map(val => {
                        return(
                            <p className="searchedVal" key={val.toString()}>{val.charAt(0).toUpperCase() + val.slice(1)}</p>
                        )
                    })
                }
            </h2>
        </div>
    );
}

export default SearchBar;