import React, {useState} from "react"

export default function MinutesToHours ({}) {

    const [amount, setAmount] = useState();
    const [flipped, setFlipped] = useState(false);
    
    const onChange=(e)=>{
      setAmount(e.target.value);
    }
    const onClick=(e)=>{
      setAmount("");
    }
    const onFlipped=()=>{
      setFlipped(current=>!current);
      setAmount(""); 
  
    }
    return (
      <div>
  
        <div>
        <label htmlFor="Minutes">Minutes</label>
        <input id="Minutes"placeholder="Minutes" type="number" value={flipped ? amount*60 : amount} onChange={onChange} disabled={flipped===true}/>
        </div>
  
        <h4>You want to convert {amount} minutes</h4>
  
        <div>
        <lable htmlFor="Hours">Hours</lable>
        <input id="Hours" value={flipped ? amount : Math.round(amount /60)} placeholder="Hours" type="number" disabled={flipped===false} onChange={onChange}/>
       </div>
  
       <button onClick={onClick}>reset</button>
       <button onClick={onFlipped}>{flipped ? "Turn back" : "Invert"}</button>
      </div>
    );

}