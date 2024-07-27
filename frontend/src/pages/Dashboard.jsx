import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { InputBox } from "../components/InputBox";
import { Users } from "../components/Users";

import { userNameAtom } from "../atoms";
import { useRecoilValue } from 'recoil' ; 


export function Dashboard()
{
    const usernameRecoile = useRecoilValue(userNameAtom) ; 

    return (
        <>
            <div className="">
                <Appbar user={usernameRecoile} />
                {/* <Appbar user="User" /> */}
                <Balance value="50,000"/>

                <Users /> 
            </div>
        </>
    )
}