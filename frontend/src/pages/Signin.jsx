import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { WarningText } from "../components/WarningText";
import { Modal } from "../components/Modal";
import { useModalMessage } from "../hooks/useModalMessage";
import axios from "axios";

import { useSetRecoilState } from "recoil";
import { userBalanceAtom, userNameAtom } from "../atoms";


export function Signin()
{
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const { message, showModal, setShowModal, handleResponse, handleError } = useModalMessage();

    //recoile 
    const setUsernameRecoil = useSetRecoilState(userNameAtom);



    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            });
            setUsernameRecoil(username);
            
            localStorage.setItem("token", response.data.token);
            handleResponse(response, "/dashboard");
            console.log("username " + response.data)
        } catch (error) {
            handleError(error);
        }
    };

    return(
        <>  
        <div className="m-0 p-0 h-screen w-full">
            <Card>
                <div className="  ">
                    <Heading lable ="Welcome back!"/> 
                    <SubHeading lable ="Enter your credentials to access your account"/> 
                    <InputBox labelName="Email" placeholder="bobmarley@gmail.com" type="email" 
                    onChange={(e)=>{setUsername(e.target.value)}}/>
                    <InputBox labelName="Password" placeholder="pass@12345" type="password" 
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Button type="submit" name="Sign In"  
                    onClick={handleLogin}/>  

                    <WarningText text="Dont have an account?" totxt="Sign Up" tolink="/signup"/>
                </div>
            </Card>

            <Modal
            show={showModal}
            message={message}
            onClose={() => setShowModal(false)} 
            />
        </div>
        
            
        </>
    )
}