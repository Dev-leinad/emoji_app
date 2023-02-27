import React from 'react';

import { useState, useEffect  } from 'react';


export const EmojiConst = () =>{
    const [Data, SetData] =useState([]);



    useEffect (()=>{
        fetch ('https://emoji-api.com/emojis?access_key=3d23ed1c17aa92e7a08cd1631a7e02b588a066a3')  
        .then(Resp =>Resp.json())
        .then(Resp => SetData(Resp))   

    }, [])

    return(
        <>

           {
            Data.map((emojis, index)=>{
              return   <div className="card" >
              <div className="card-cont" key={index}>
                   <p className="emoji-character">{emojis.character}</p>
              <p className="emoji-name">{emojis.slug}</p>
              </div>
             
          </div>
            })
           }
        
        </>
    )
}

