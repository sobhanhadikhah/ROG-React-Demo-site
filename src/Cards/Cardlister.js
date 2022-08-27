import React from "react";
import 'tachyons';
import Card from "./Card";
//import Database from "../Database-site/Database";
const Cardlister = ({Data})=>{
    const Array_lister = Data.map((i,b)=>{
        return  <Card  key={b} id = {Data[b].id} 
        User = {Data[b].User}
         Email = {Data[b].Email} />
    }) 
    return(
        Array_lister
    )
}
export default Cardlister;