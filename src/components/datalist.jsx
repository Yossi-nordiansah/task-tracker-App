export default function DataList({ list, setList, completed}) {

    console.log(completed)

    const handleCompleted = (id) => {
        const newVal = list.map((items) => {
            if (Number(id) === Number(items.id)) {
                {
                    items.status = 'completed'
                }
            }
            return items
        })
        setList(newVal)
    }

    const handleDelete = (id)=>{
        const filtered = list.filter(items => items.id !== id)
        setList(filtered)
    }

    if (!completed) {
        return (
            <ul className="w-11/12 mx-auto mt-5 px-2">
                {list.map(items => (
                    items.status === 'completed' ?
                        <li key={items.id} className="px-3 py-2 mb-2 bg-[#79d2a6] rounded-lg items-center flex gap-3">
                            <h1 className="text-[#006600] font-bold text-ellipsis w-full">{items.task}</h1>
                            <button className="bg-white px-2 py-2 rounded-md active:outline active:outline-blue-500" onClick={() => handleCompleted(items.id)}>
                                <svg className="fill-[#006600]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            </button>
                            <button onClick={()=>handleDelete(items.id)} className="bg-white px-2 py-2 rounded-md active:outline active:outline-red-500">
                                <svg className="fill-[#ff6600]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                        </li> :
                        <li key={items.id} className="px-3 py-2 mb-2 bg-[#ffd699] rounded-lg items-center flex gap-3">
                            <h1 className="text-[#ff6600] font-bold text-ellipsis w-full">{items.task}</h1>
                            <button className="bg-white px-2 py-2 rounded-md active:outline active:outline-blue-500" onClick={() => handleCompleted(items.id)}>
                                <svg className="fill-[#ff6600]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            </button>
                            <button onClick={()=>handleDelete(items.id)} className="bg-white px-2 py-2 rounded-md active:outline active:outline-red-500">
                                <svg className="fill-[#ff6600]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                        </li>
                ))}
            </ul>)
    }
    else {
        return (
            <ul className="w-11/12 mx-auto mt-5 px-2">
                {list.map(items => (
                    items.status === 'completed' ?
                        <li key={items.id} className="px-3 py-2 mb-2 bg-[#79d2a6] rounded-lg items-center flex gap-3">
                            <h1 className="text-[#006600] font-bold text-ellipsis w-full">{items.task}</h1>
                            <button className="bg-white px-2 py-2 rounded-md active:outline active:outline-blue-500" onClick={() => handleCompleted(items.id)}>
                                <svg className="fill-[#006600] " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                            </button>
                            <button onClick={()=>handleDelete(items.id)} className="bg-white px-2 py-2 rounded-md active:outline active:outline-red-500">
                                <svg className="fill-[#ff6600]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </button>
                        </li> :
                        null
                ))}
            </ul>
        )
    }

}