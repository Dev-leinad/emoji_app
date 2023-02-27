import React, {useState,useEffect} from 'react'
import { EmojiConst } from '../Emoji/EmojiCont'



export const Emoji = () => {
  const [search, setSearch]  =useState('')
  const [Data, setData]=useState([])
  const handleSearch = (e)=>{
        setSearch (e.target.value)
  }

  const handleSubmit =()=>{
    if (search !== '' && search!==null){
        fetch (`https://emoji-api.com/emojis?search=${search}&access_key=3d23ed1c17aa92e7a08cd1631a7e02b588a066a3`)  
        .then(Resp =>Resp.json())
        .then(Resp => setData(Resp))   

    }
    
  }

  useEffect (()=>{
    fetch ('https://emoji-api.com/emojis?access_key=3d23ed1c17aa92e7a08cd1631a7e02b588a066a3')  
    .then(Resp =>Resp.json())
    .then(Resp => setData(Resp))   

}, [])
        return (

          
            <>
                <div className='container'>
                    <div className='content-box'>
                        <h1>Emoji App </h1>

                        <div className="form">
                             <input 
                        type="text" 
                        value={search}
                        onChange={(e)=>handleSearch(e)}
                        
                        />
                        <button onClick={()=>handleSubmit()}>Search Emoji</button>
                        </div>
                       
                    </div>
                   <EmojiConst Datas={Data}  />
                </div>
            </>
          )
    }


// const Emoji = () => {
//   return (
//     <>
//         <div className='container'>
//             <div className='content-box'>
//                 {/* <h1>Emoji App </h1>
//                 <input 
//                 type="text" 
//                 onChange={} 
//                 value = {}
//                 /> */}
//                 <button>Search Emoji</button>
//             </div>
//            <EmojiConst />
//         </div>
//     </>
//   )
// }

export default Emoji