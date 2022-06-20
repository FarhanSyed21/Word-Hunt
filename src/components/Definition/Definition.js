import React from "react";
import "./Definition.css";

const Definition = ({ word, category, meanings, LightMode }) => {
    return (
        <div className="meanings">

        {word === "" ? (    
            <span className='subTitle'>Start by typing a word in search</span>
        ) : (
            meanings.map((mean) => 
                mean.meanings.map((item) =>
                    item.definitions.map((def) => (
                        <div className="singleMean" 
                            style={{ backgroundColor: "white", color: "black" }}
                        >
                            <b>{def.definition}</b>
                            <hr style={{backgroundColor:"black", width:"100%"}}></hr>
                            {
                                def.example && (
                                    <span >
                                        <b>
                                           Example : </b>{def.example}
                                    </span>
                                )
                            }
                        
                        </div>
                    ))
            )))
        }
    </div>
    );
}

export default Definition