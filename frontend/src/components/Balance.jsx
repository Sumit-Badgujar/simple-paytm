

export const Balance = ({ value }) => {
    return <div className="flex m-2 p-3">
        <div className="font-bold text-lg">
            Current balance :
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}