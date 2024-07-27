import { UserCircle } from "./UserCircle";


export function CircleWithName({user})
{

    return (
        <>
             <div className="flex items-center gap-3" >
                <div >
                    <UserCircle name={user[0].toUpperCase()} /> 
                </div>
                <div className="text-lg font-serif">
                    <h3>{user}</h3>
                </div>
            </div>
        </>
    )
}