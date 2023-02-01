import React from 'react'

const Items = ({item,data,isChecked,Check}) => {



  return (
    <div id='items'>
     
{
item.map((item,index)=>(
    <div id='item'>
    <div>
<li key={index} class="li">
{item}
</li></div>
<div>
<input type='checkbox' name={index} value={isChecked} onChange={Check}  />
</div>
</div>



))}






</div>

   
  )
}

export default Items
