import { useTasks } from './Context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export const Display = () => {
    const { todo , setTodo}  = useTasks()
    
    return(
        <>
            <div className='display'>
                <div>
                    <h1>
                        Your Tasks:
                    </h1>
                </div>
                <div className='spacer__main' ></div>
                <div>
                    <div className = 'list'>
                    {
                        todo.map((task,index) => {
                            return(
                                <>
                                <div className = 'task__list' >
                                    <div style={{fontSize:'3vh' , paddingRight:'2vh'}}>
                                        <div style={{color:'#5B21B6' ,  display:'inline' , paddingRight:'2vh'}}>{index+1}{".  "}</div>{task.description}{"  "}
                                    </div>
                                        <AiOutlineCloseCircle
                                        style={{color:'red' , fontSize:'4vh' , cursor:'pointer'}}
                                        onClick={() => setTodo({type:'DELETE_TASK' , payload:{id:index}})}></AiOutlineCloseCircle>
                                </div>
                                <div className='spacer'></div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}