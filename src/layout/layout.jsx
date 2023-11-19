import DataList from "../components/datalist";
import Form from "../components/form";
import { useState } from "react";

export default function Layout({list, setList}){

    const [completed, setCompleted] = useState(false);

    const handleCompleted = () => {
        setCompleted(!completed)
    }

    return(
    <div className="bg-white w-3/5 min-h-[500px] rounded-xl relative pb-6">
        <h1 className="text-center pt-5 text-3xl font-bold text-[#ff6600]">Task Tracker</h1>
        <div className="bg-[#ffa366] h-[5px] rounded-lg w-1/2 mx-auto mt-4"></div>
        <Form list={list} setList={setList} />
        <DataList list={list} setList={setList} completed={completed} setCompleted={setCompleted}/>

        {!completed?<button onClick={handleCompleted} className="absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-7 bg-[#79d2a6] w-1/4 rounded-lg py-1 text-[#006600] font-semibold">see completed only</button>
        :
        <button onClick={handleCompleted} className="absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-7 bg-[#e6e6e6] w-1/4 rounded-lg py-1 text-[#404040] font-semibold">See All Taks</button>}

    </div>
    )
}