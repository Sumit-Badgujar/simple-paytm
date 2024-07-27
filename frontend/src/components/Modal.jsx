import React from "react";
import { Button } from "./Button";

export function Modal({ show, message, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center w-11/12 max-w-md">
                <h2 className="text-xl font-semibold mb-4">{message}</h2>
                <Button type="button" name="Close" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={()=>setShowModal(false)}
                    onClick={onClose}
                />
                    
                
            </div>
        </div>
    );
}
