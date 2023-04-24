import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ErrorResponse } from "@remix-run/router";


export const Forms = () => {
  

    const onSubmit = (data) => {
        console.log("Form submitted",data)
    }
     const schema  = yup.object().shape({
        name:yup.string().required("Your full name required"),
        age:yup.number().positive().integer().min(18).required(),
        email:yup.string().email().required(),
        password:yup.string().min(6).max(18).required(),
        confirmpassword:yup.string().oneOf([yup.ref('password'),null]).required()
     })
     const { register, handleSubmit,formState:{errors} } = useForm({resolver:yupResolver(schema)})

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{margin:20}}>
            <input className="textbox-clicked" type='text' placeholder="Enter your Name.." {...register("name")}></input><br/>
            <p>{errors.name?.message}</p>
            <input className="textbox-clicked" type='text' placeholder="Enter your Age.."{...register("age")}></input><br/>
            <input className="textbox-clicked" type='text' placeholder="Enter your Email.."{...register("email")}></input><br/>
            <input className="textbox-clicked" type='password' placeholder="Enter your Password.."{...register("password")}></input><br/>
            <input className="textbox-clicked" type='password' placeholder="Confirm Password.."{...register("confirmpassword")}></input><br/>
            <input type='submit'></input>
        </form>
    )
}