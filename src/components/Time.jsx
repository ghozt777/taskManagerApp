import { useState } from 'react'

export const Time = () => {
    
    const [time,setTime] = useState(new Date().toString())
    setInterval(() => {
        const today = new Date()
        setTime(today.toString())
    },1000)
    return(
        <div>
            {time}
        </div>
    )

}

