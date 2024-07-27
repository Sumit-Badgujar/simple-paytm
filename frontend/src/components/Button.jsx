

export function Button({type , name  , onClick}){

    return (
        <>
        <button onClick={onClick}
         className=" bg-slate-900 font-semibold rounded-2xl w-full hover:bg-slate-800 select-none text-white px-5 py-3  my-5 "
         type={type} >{name}</button>
        </>
    )
}