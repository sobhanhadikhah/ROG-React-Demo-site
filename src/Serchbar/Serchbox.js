import React from "react";
import 'tachyons';
const Serchbox = ({getterchnge})=>{
    return(
        <div className="tl pa2 ml1   b--black " >
        <input className="bg-dark-red white br4 pa2 " 
        type={`search`}
         placeholder= {`Search...`}  onChange = {getterchnge}  />

        </div>
    )
}
export default Serchbox;