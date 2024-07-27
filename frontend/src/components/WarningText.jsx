

export function WarningText({ text , totxt , tolink})
{
    return (
        <>
        <div className=" text-center px-3 py-2 m-2 select-none">
           <span className="font-thin text-base  select-none"
           >{text} </span>  
           <a className="font-bold italic underline select-none"
            href={tolink}>{totxt}</a>
        </div>
        </>
    )
}