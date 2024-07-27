

export function InputBox({labelName , placeholder , type , onChange}) { 

    return ( 
        <>
            <label className="font-medium my-2 mx-1 text-left select-none"
            htmlFor="firstname">{labelName}</label> <br />
            <input 
            className="border-y-2 border-x-4  border-gray-300 rounded-md mx-1 py-1 px-3 mb-3 w-full focus:outline-none"
            onChange={onChange}
            type={type}     placeholder={placeholder} />
        </>
    )
}