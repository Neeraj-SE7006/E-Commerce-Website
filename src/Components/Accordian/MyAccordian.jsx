import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MyAccordian = ({question, answer}) => {
    const [show, setshow] = useState(false);
  return (
    <>
     <div className='main-heading'>
        <p onClick={()=>setshow(!show)} >{show? <RemoveIcon /> : <AddIcon />} </p>
        <h3>{question}</h3>
        </div>
        {show && <p className='answers'>{answer}</p>}
    </>
  )
}

export default MyAccordian;