import './ageCalculator.css'
import { useState } from "react"
import moment from "moment"

const AgeCalculator=()=>{
    const[date, setDate] = useState(new Date())
    const[years, setYears] = useState(0)
    const[months, setMonths] = useState(0)
    const[days, setDays] = useState(0)   

    function calcular(){
        const date1 = moment(new Date())
        const date2 = moment(date)
        const y = date1.diff(date2, "year")
        setYears(y)
        date2.add(y,"years")
        const m = date1.diff(date2, "months")
        setMonths(m)
        date2.add(m,"months")
        setDays(date1.diff(date2, "days"))        
    }

    return(
        <div className="age-container">
            <div className='age-input'>
                <input className='fecha' type="date" onChange = {(e)=>setDate(e.target.value)} value={date}/>
                <button className='boton' onClick={calcular}>Calcular</button>
            </div>            
            <div className='result'>
            <label className='label'>Years: {years} </label>            
            <label className='label'>Months: {months} </label>
            <label className='label'>Days: {days} </label>
            </div>
            
        </div>
    )
}
export default AgeCalculator