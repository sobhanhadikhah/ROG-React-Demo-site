import React from "react";
import 'tachyons';

const Card = ({id,User,Email})=>{
    return(
        <div className="bg-black red dib br3 grow tc pa2 ma3 "  >
            <img src={`https://robohash.org/${id}`}  alt="img" />
            <div className="tc" >
                <h3> {User}  </h3>
                <p> {Email} </p>
                <div className="tl pa3 ml2 f4 " >
                <button  className="br4 w-40 pa1 bg-red  pointer " >
                 Buy </button>

                </div>
            </div>
        </div>
    )
}
export default Card;