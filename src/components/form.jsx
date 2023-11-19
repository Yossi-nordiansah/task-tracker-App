import { useState, useRef } from "react"

export default function Form ({list, setList}){

    const inputRef = useRef();

    const [payload, setPayload] = useState(
        {
            id:null,
            task:'',
            status:'uncompleted'
        }
    ) 

    const handleOnChange = (event) => {
        setPayload(
            {   
                id:list.length+1,
                task:event.target.value,
                status:'uncompleted'
            }
        )
    }

    const handleSetList = (event) => {
        event.preventDefault();
        if(payload.task===''){
            alert('Masukkan List!')
        }
        else{
            setList([
                ...list,
                payload
            ]);
            inputRef.current.value='';
            setPayload(
                {   
                    id:null,
                    task:'',
                    status:'uncompleted'
                }
            )
        }
    }

    return(
        <form onSubmit={()=>handleSetList(event)} className="flex justify-between w-[69%] mx-auto mt-4 gap-3">
            <input id='input' ref={inputRef} type="text" placeholder="add task here ..." className="px-3 w-full py-[6px] bg-[#f2f2f2] outline-[#ff6600] rounded-md" onChange={()=>handleOnChange(event)}/>
            <button className="bg-[#ffd699] py-1 px-4 rounded-md text-[#ff6600]" type="submit">Add</button>
        </form>
    )
}