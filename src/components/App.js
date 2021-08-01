import { Display } from "./Display"
import { Input } from "./Input"
import { Time } from './Time'
import { LastChange } from "./LastChange"
import { AppBar , Toolbar , Typography} from '@material-ui/core'
import { BsCardChecklist } from 'react-icons/bs'
import './Styles/App.css'
export const App = () => {
  return(
    <>
    <AppBar position='relative' style={{backgroundColor:'#001f3f'}}>
      <Toolbar>
      <BsCardChecklist style={{marginRight:'2vh' , fontSize:'10vh'}}/>
      <Typography variant='h5'style={{paddingRight:'2rem'}}> Task Manager App </Typography>
      <Time />
      </Toolbar>
    </AppBar>
    <div className = 'root'>
      <div className='container'>
          <Input/>
          <Display/>
      </div>
      <LastChange/>
    </div>
    
    </>
  )
}