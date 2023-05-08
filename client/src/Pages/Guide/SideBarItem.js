import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SideBarItem({item}) {
  const  navigate = useNavigate()
    const [state, setState] = useState(0);

  console.log({item})
  return (
    <li class=""><button className={state ? 'gl' : 'gl__op'} onClick={() => {state ? setState(0) : setState(1)}}>{item.name}</button>
    {state? <ul>
        {item.nameItem.map((e) => ( <li class="hov__file"><span class="file"><button className='button__punkt' onClick={() => navigate(e.path)}>{e.name}</button></span></li>))}
        

     </ul> : <div></div>}
 </li>
  )
}
