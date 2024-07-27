import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CircleWithName } from "../components/CircleWithName";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import axios from "axios"
import { useState } from "react";
import { Modal } from "../components/Modal";
import { useModalMessage } from "../hooks/useModalMessage";

export function Transfer()
{
    const [SearchParams] = useSearchParams();
    const id = SearchParams.get("id"); 
    const name = SearchParams.get("name"); 

    const [amount , setAmount ] = useState(0); 

    const { message, showModal, setShowModal, handleResponse, handleError } = useModalMessage();

    const handleTransfer = async ()=>{
        {
            try{
                if(amount == 0 ){
                    throw new Error("Enter amount");
                }

                const res =  await axios.post("http://localhost:3000/api/v1/account/transfer" ,{
                    to:id , 
                    amount
                }, {
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("token") 
                    }
                })
                handleResponse(res, "/dashboard")
            }catch(error){
                handleError(error)
            }
            
        }
    }
    

    return (
        <>

            <Card>
                <Heading lable="Transfer Money" /> <br /><br />
                <CircleWithName user={name} />
                
                <InputBox onChange={(e)=>{
                    setAmount(e.target.value);
                }}
                 labelName="Amount in RS" placeholder="Enter amount..." type="text"/>

                <Button onClick={handleTransfer}
                 type="button" name="Initiate Transfer" />
            </Card>

            <Modal 
             show={showModal}
             message={message}
             onClose={() => setShowModal(false)}
             />

            
        </>
    )
}