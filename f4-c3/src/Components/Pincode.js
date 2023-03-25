
import React, { useState } from 'react';
import './Pincode.css'
import { v4 as uuidv4 } from 'uuid';
const Pincode = () => {
    const [pincode, setPincode] = useState('');
    const [datax, setDatax] = useState([])
    const [apidata, setapiData] = useState([])
    const [filtrd, setFiltrd] = useState([])

    const fetchData = (pin) => {
        fetch(` https://api.postalpincode.in/pincode/${pin}`)
            .then((res => res.json()))
            .then((d) => { setapiData(d[0].PostOffice); setDatax(d) })
            .catch(e => console.log("error", e))
    }

    const handleChange = ({ target }) => {
        setPincode(target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (pincode.length !== 6) {
            alert('enter correct pincode')
        }
        else {

            fetchData(pincode);
            setFiltrd([]);
        }
    }

    const handleSearch = (e) => {

        const input = e.target.value;
        const newfilter = apidata.filter(t => { return input === t.Name })
        setFiltrd(newfilter);
    }
    return (
        <>
            <h1>Enter Pincode</h1>
            <input type="text" value={pincode} onChange={handleChange} /><br /><br />
            <button onClick={handleClick} >LookUp</button><br /><br />



            {
                datax.map((x) =>
                    <div>
                        <h2>Pincode:{x.PostOffice[0].Pincode}</h2>
                        <h3>{x.Message} </h3>
                    </div>
                )}
            <br />
            <input type="search" onKeyDown={handleSearch} placeholder="Fiter by Name" /> <br /><br />

            <div className='allcards'>
                {
                    filtrd.length === 0 ?
                        apidata.map((x, i) => (

                            <div className="cards">
                                <p key={uuidv4()}>Name:-  {x.Name}</p>
                                <p key={uuidv4()}>BranchType:-  {x.BranchType}</p>
                                <p key={uuidv4()}>District:-  {x.District}</p>
                                <p key={uuidv4()}>Division:-  {x.Division}</p>
                                <p key={uuidv4()}>DeliveryStatus:-  {x.DeliveryStatus}</p>
                                <p key={uuidv4()}>State:-  {x.State}</p>


                            </div>
                        )) : filtrd.map((x, i) => (

                            <div className="cards" key={i}>
                                <p key={uuidv4()}>Name:-  {x.Name}</p>
                                <p key={uuidv4()}>BranchType:-  {x.BranchType}</p>
                                <p key={uuidv4()}>District:-  {x.District}</p>
                                <p key={uuidv4()}>Division:-  {x.Division}</p>
                                <p key={uuidv4()}>DeliveryStatus:-  {x.DeliveryStatus}</p>
                                <p key={uuidv4()}>State:-  {x.State}</p>


                            </div>
                           
                        ))}
            </div>
        </>
    )
}
export default Pincode;