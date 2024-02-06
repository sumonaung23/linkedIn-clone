import React from 'react'
import { useNavigate } from "react-router-dom";

const useNavigate = () => {
    let instance = useNavigate();

    const navigate = (param) => {
        instance(param);
    }
}

export default useNavigate

