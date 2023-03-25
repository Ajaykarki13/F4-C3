
import React, {useState} from 'react';
import './Pincode.css'

const Pincode = ()=>
{
    const[pincode,setPincode] = useState('');
   const[datax,setDatax] = useState([])
    const[apidata,setapiData] = useState([])
   const[filtrd,setFiltrd] = useState([])

    const fetchData =(pin)=>
    {
        fetch(` https://api.postalpincode.in/pincode/${pin}`)
        .then((res=>res.json()))
        .then((d)=>{ setapiData(d[0].PostOffice);setDatax(d)})
        .catch(e=>console.log("error",e))
    }
        
    const handleChange = ({target}) =>
    {
        setPincode(target.value)
    }

    const handleClick = (e)=>
    {
        e.preventDefault();
        if(pincode.length!==6)
        {
            alert('enter correct pincode')
        }
        else
        {

         fetchData(pincode);
        }
    }
  
    const handleSearch = (e) =>
    {
        
        const input = e.target.value;
        const newfilter = apidata.filter(t=>{return input===t.Name})
        setFiltrd(newfilter);
    }
return(
<>  
                <h1>Enter Pincode</h1>
                <input type ="text" value={pincode} onChange={handleChange} /><br/><br/>
                <button onClick={handleClick} >LookUp</button><br/><br/>
            
 
    
{(!datax)?<p>Loading...</p>:
datax.map((x)=>
<div>
<h2>Pincode:{x.PostOffice[0].Pincode}</h2>
<h3>{x.Message} </h3>
</div>
)}
   <br/>
   <input type="search" onKeyDown={handleSearch} placeholder="Fiter by Name"/> <br/><br/>

   <div className='allcards'>
{
     filtrd.length===0?
     apidata.map((x,i)=>(

    <div className="cards"key={i}>
                <p>Name:-  {x.Name}</p> 
                <p>BranchType:-  {x.BranchType}</p>
                <p>District:-  {x.District}</p>
                <p>Division:-  {x.Division}</p>
                <p>DeliveryStatus:-  {x.DeliveryStatus}</p>
                <p>State:-  {x.State}</p>


    </div>
    )) :filtrd.map((x,i)=>(

    <div className="cards"key={i}>
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
export default Pincode;