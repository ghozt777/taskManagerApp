import { useTasks } from "./Context"
import { FcOvertime } from 'react-icons/fc'
export const LastChange = () => {
    const { lastChange } = useTasks()
    return(
        <div style={{display:'flex' , alignContent:'center' , paddingLeft:'30vh'}}>
            <FcOvertime/>
            <div className='last__change'>Last Change Made: {lastChange}</div>
        </div>
    )
}