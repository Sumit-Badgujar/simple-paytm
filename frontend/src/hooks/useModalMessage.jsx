import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useModalMessage() {
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleResponse = (response, successRedirect) => {
        setMessage(response.data.message);
        setShowModal(true);
        if (successRedirect) {
            setTimeout(() => navigate(successRedirect), 2000); // Redirect after 2 seconds
        }
    };

    const handleError = (error) => {
        setMessage("Error: " + (error.response?.data?.message || error.message));
        setShowModal(true);
    };

    return { message, showModal, setShowModal, handleResponse, handleError };
}
