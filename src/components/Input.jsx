import { useTasks } from './Context'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { AiFillDelete } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
export const Input = () => {
    const {setTodo} = useTasks()
    const [text,setText] = useState('')
    return(
        <>
        <div style={{ borderStyle:'solid' , borderColor:'#C4B5FD' , padding: '5vh 5vh 5vh 5vh' , borderRadius:'2rem'}} className='input'>
            <input 
                type='text' placeholder='so what are u up to today?'
                className='input input__todo'
                onFocus={(e) => e.target.value=" " }
                onChange = {(e) => setText(e.target.value)} />
            <div className= 'input btn'>
                <Button 
                    className='btn-add'
                    style={{marginBottom:'30%'}}
                    variant = 'contained' color = 'secondary'
                    onClick = { () => {
                        if(text===''){alert('Cannot Add Empty Task :(')}
                        else{setTodo({type:'ADD_TASK' , payload:{description:text}})}
                    } }>
                    <BiTask style={{ fontSize: '5vh' }}/>
                </Button>
                <Button 
                onClick={() => setTodo({type:'DELETE_ALL'})}
                variant = 'contained' color = 'secondary'>
                    <AiFillDelete style={{ fontSize: '5vh' }}/>
                </Button>
            </div>
        </div>
        </>
    )
}