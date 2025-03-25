import React from 'react'
import { useForm } from 'react-hook-form';
import Logo from "../assets/footer/FooterLogo.png"

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();
      const onSubmit = (data)=>{}
  return (
    <div>
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default LoginPage
