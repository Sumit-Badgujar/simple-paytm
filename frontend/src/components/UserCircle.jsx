


export function UserCircle({name})
{

    return (
        <>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 select-none">
                <div className="flex flex-col justify-center h-full text-xl select-none">
                    {name}
                </div>
            </div>
        </>
    )
}