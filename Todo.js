import React, { useState } from 'react'

 function Todo() {
    const [activity, setactivity]= useState("");
    const [listdata, setlistdata] = useState([]);

    function addactivity(){
        // setlistdata([...listdata, activity])
        // console.log(listdata)
        setlistdata((listdata)=>{
            const updatedList =[...listdata, activity]
            console.log(updatedList)
            setactivity('');

            return updatedList
        })

    }
    function removeActivity(i){
        const updatedListData = listdata.filter((elem, id) =>{
            return i!= id;
            // return updatedList
        })
        setlistdata(updatedListData);

    }

  return (
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type='text' 
        placeholder='Add Activity'
        value={activity} 
        onChange={(e)=> setactivity(e.target.value)}
        />
        <button onClick={addactivity}> Add</button>
        <p className='list-heading'> Here is your list:{")"}</p>
        {listdata!=[]&& listdata.map((data, i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listdata'> {data} </div>
                    <div className='btn-position'><button onClick={() => removeActivity(i)}> Remove </button>

                    </div>

                </p>
                </>
            )
        })}
        </div>
  )
}
export default Todo;
