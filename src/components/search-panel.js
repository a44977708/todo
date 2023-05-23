import React from "react";

const SearchPAnel = () => {
    const saerchText = 'Type here to search';
    const searchStyle = {
     fontSize: '20px'
    };
    return <input 
    style={searchStyle}
    placeholder={saerchText} />;
 
}

export default SearchPAnel;