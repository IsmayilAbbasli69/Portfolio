import React,{useState,useEffect} from 'react'
import Items from './Items'
import Contacts from './Contacts'
const List = () => {


  
const [data,setData]=useState([])
const [currenData,setCurrentData]=useState("")
const [items,setItems]=useState(0);
const [x,setX]=useState(0);
const [isChecked,setIsChecked]=useState(false);

const Check=(e)=>{
  if(e.target.checked){
    document.querySelectorAll('.li')[e.target.name].classList.add('checked');
   setItems(items=>items-1)
    
  }else{
    document.querySelectorAll('.li')[e.target.name].classList.remove('checked');
   setItems(items=>items+1)
  
  }
  setIsChecked(isChecked=>!isChecked)
  }
  


const addData=(e)=>{
  e.preventDefault()
  if(currenData !==""){

    setData([...data,currenData])
    setCurrentData('')
  }

}
  useEffect(() => {
    setX(document.querySelectorAll(".li.checked").length);


console.log(x)
  setItems(data.length-x)
  },[data,x])


  return (
    <div id='list' class="body">
      
    <form onSubmit={addData}>
      <h1>To Do List</h1>
      <div>
      <input type='text' value={currenData}   name='item' maxLength='31' onChange={(e)=>setCurrentData(e.target.value)}  placeholder='Add new item' />
      <button>Add</button>
      </div>
    </form>
    <Items item={data}  data={items}
  isChecked={isChecked}
  Check={Check}
   />
<Contacts items={items}/>
    </div>

  )
}

export default List
