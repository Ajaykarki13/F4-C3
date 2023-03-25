
/*
import React, {useState} from 'react';
import './data.css';
import { v4 as uuidv4 } from 'uuid';

const Data = (props) =>
{
    const[filterd,setFilterd] = useState(props.Mydata)

    const handleSearch = (e) =>
    {
        
        const input = e.target.value;
        const newfilter = props.Mydata.filter(t=>{return input===t.Name})
        setFilterd(newfilter);
    }

    return(
        <>
        {(!props.lala)?<p>Loading...</p>:
props.lala.map((x)=>
<div>
<h2>Pincode:{x.PostOffice[0].Pincode}</h2>
<h3>{x.Message} </h3>
</div>
)}
   <br/>
   <input type="search" onKeyDown={handleSearch} placeholder="Fiter by Name"/> <br/>

   <div className='allcards'>
     {
    
     filterd.map((x)=>(

    <div className="cards" key={uuidv4()}>
                <p>Name:-  {x.Name}</p> 
                <p>BranchType:-  {x.BranchType}</p>
                <p>District:-  {x.District}</p>
                <p>Division:-  {x.Division}</p>
                <p>DeliveryStatus:-  {x.DeliveryStatus}</p>
                <p>State:-  {x.State}</p>


    </div>
    ))}
</div>
    </>
    )
}
    

*/
