import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import {Card} from 'antd';

export const InfoCardPositive = ({title, content}) => {
  return (
    <Card style={{width: 400,
      background: 'dimgray',
      marginRight:'2rem',
      marginBottom:'0.5rem'}}>
     <div style={{display:'flex'}}>
       <HiArrowCircleUp size={20} color={'green'}/>
       <div>
       <p style={{paddingLeft:'0.5rem', color:'white'}}>{title} </p>
       <p style={{color:'lightgray'}}>{content}</p>
       </div>

     </div>
    
   </Card>
  )
}

export const InfoCardNegative = ({title, content}) => {
  return (
    <Card style={{width: 400,
      background: 'dimgray',
      marginRight:'2rem',
      marginBottom:'0.5rem'}}>
     <div style={{display:'flex'}}>
       <HiArrowCircleDown size={20} color={'red'}/>
       <div>
       <p style={{paddingLeft:'0.5rem', color:'white'}}>{title} </p>
       <p style={{color:'lightgray'}}>{content}</p>
       </div>

     </div>
    
   </Card>
  )
}