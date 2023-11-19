import { useState } from "react"
import Layout from "../layout/layout"

export default function Index({payload, setPayload}){

    const [list, setList] = useState([])

    return(
    <div className="w-full min-h-screen bg-[#ffd699] flex justify-center py-14">
        <Layout list={list} setList={setList}/>
    </div>
    )
}