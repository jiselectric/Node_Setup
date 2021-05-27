import React, { useState } from 'react';
import axios from 'axios';

function Input() {
    // React -> Node : Server에서 React
    const [option, setOption] = useState(1);

    const onOption = (e) => {
      //console.log(e);
      setOption(e.target.value);
    };

    const handleSearch = (e) => {
      fetchItem();    
    };

    const fetchItem = async() => {
      const response = await axios("/api/", {
        params:{name:option}
      });
      //console.log(option);
      console.log(option);
      console.log(response.data);
    };

    return (
        <div>
          <h1> Select Node </h1>
           <select onChange={onOption}>
            <option value="1" defaultValue>
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
            <option value="3">
              Option 3
            </option>
          </select>
          <button onClick={handleSearch}> Send </button>
        </div>
    )
}

export default Input;
