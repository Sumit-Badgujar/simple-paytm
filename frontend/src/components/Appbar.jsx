import { UserCircle } from "./UserCircle";


export function Appbar({user})
{

    return (
        <>
            <div className="flex  justify-between p-4 border-b-2 border-slate-500 shadow-md ">
                <div className="text-4xl font-bold  select-none">Payments App</div>
                <div className="flex ">
                    <div className="font-serif text-lg flex flex-col justify-center h-full mr-4 ">Hello, {user}</div>
                    <UserCircle  name="S"/>
                </div>
            </div>
        </>
    )
}  

