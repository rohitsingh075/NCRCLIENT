// src/Components/NavigationHandler.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setNavigate } from "../api"; // adjust path if needed

const NavigationHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return null;
};

export default NavigationHandler;
