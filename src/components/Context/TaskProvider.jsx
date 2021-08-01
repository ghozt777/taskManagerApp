import { createContext, useContext, useEffect, useReducer, useState } from 'react' 
const DataContext = createContext()

export const useTasks = () => useContext(DataContext)


function reducer (prevState , action) {
    switch(action.type){
        
        case 'INITIAL_LOGIN':
            return[...action.payload]
        case 'ADD_TASK':
            return[...prevState , action.payload]
        case 'DELETE_TASK':
        let temp = []    
        for(let i = 0 ;i< action.payload.id ; i++) temp = [...temp , prevState[i]]
        for(let i = action.payload.id+1 ; i< prevState.length ; i++) temp = [...temp , prevState[i]]   
            return [...temp]
        case 'DELETE_ALL':
            return []
        default:
            return[...prevState]
    }
}


export const TaskProvider = ({children}) => {
     
    const [todo,setTodo] = useReducer(reducer , [])
    const [lastChange , setLastChange] = useState('')
    useEffect(() => {
        const data = localStorage.getItem('my-todo-list')
        const lastTime = localStorage.getItem('last-change')
        if(data){
            setTodo({
                type:'INITIAL_LOGIN',
                payload:JSON.parse(data)
            })
        }
        if(lastTime){
            setLastChange(JSON.parse(lastTime))
        }

    },[])


    useEffect(() => {
        const today = new Date()
        setLastChange(today.toString())
        localStorage.setItem('my-todo-list' , JSON.stringify(todo))
        localStorage.setItem('last-change' , JSON.stringify(lastChange))
    },[todo,lastChange])



    return(
         <>
            <DataContext.Provider value={{todo,setTodo,lastChange}}>
                {children}
            </DataContext.Provider>
         </>
     )
 }