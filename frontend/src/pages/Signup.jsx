
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { WarningText } from "../components/WarningText";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "../components/Modal";
import { useModalMessage } from "../hooks/useModalMessage";



export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [message, setMessage] = useState("");
    // const [showModal, setShowModal] = useState(false);
    // const navigate = useNavigate();

    

    const { message, showModal, setShowModal, handleResponse, handleError } = useModalMessage();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
            });
            
            localStorage.setItem("token", response.data.token);
            // setMessage(response.data.message);
            // setShowModal(true);
            // setTimeout(() => navigate("/signin"), 2000); // Redirect after 2 seconds
            handleResponse(response , "/signin");
        } catch (error) {
            // setMessage("Error while signing up: " + (error.response?.data?.message || error.message));
            // setShowModal(true);
            handleError(error) ;
        }
    };

    return (
        <div className="m-0 p-0 h-screen w-full">
            <Card>
                <div className="p-4">
                    <Heading label="Create your account" />
                    <SubHeading label="Enter your details to get started now" />
                    <InputBox
                        labelName="First Name"
                        placeholder="Bob"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputBox
                        labelName="Last Name"
                        placeholder="Marley"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <InputBox
                        labelName="Email"
                        placeholder="bobmarley@gmail.com"
                        type="email"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputBox
                        labelName="Password"
                        placeholder="pass@12345"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        onClick={handleSignup}
                        type="submit"
                        name="Sign Up"
                    />
                    <WarningText text="Already have an account?" totxt="Login" tolink="/signin" />
                </div>
            </Card>

            <Modal 
                show={showModal}
                message={message}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}
