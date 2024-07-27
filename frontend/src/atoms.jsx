import {atom } from "recoil" ; 

export const userNameAtom  = atom ({
    key:"userNameAtom", 
    default:"User"
})

export const userBalanceAtom  = atom ({
    key:"userBalanceAtom", 
    default:"0"
})