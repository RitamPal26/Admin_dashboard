import { AuthPage } from "@refinedev/antd";
import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return <AuthPage type="register" />;
};
