import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/digitech");
  };

  return (
    <div>
    <h1 onClick={handleClick} style={{ cursor: 'pointer' }}>Click</h1>
  </div>
  
  );
};

export default ContactPage;
