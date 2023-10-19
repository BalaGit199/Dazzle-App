import React from 'react';
import './registerationcomponent.css';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signup } from '../../ReduxSlicers/SignUpSlicer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { shop_list } from '../../Service/api';
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";

function Registerationcomponent() {


    const regDispatch = useDispatch();
    const signupdata =useSelector(state => state.signup.value);

    const passregix = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/";

    const registerSchema = yup.object().shape({
        regname:yup.string().required("Name is Required"),
        email:yup.string().email("Enter the proper email").required('This field is required'),
        password:yup.string().min(5,"Needs Minimum 5 characters").required('This fleid is required'),
        username:yup.string().required("Username is Required"),
        mobnumber:yup.number().positive().integer().required("This field is required"),
        confirmpassword:yup.string().oneOf([yup.ref('password'),null],"password and confirm password are't match").required('This field is required')
    })
  

    const onSubmit = () =>{


        console.log("valuess",values);
        console.log("singup data",signupdata)
    }
   const {values,handleBlur,handleChange,touched,errors,handleSubmit} = useFormik({

    initialValues:{
        regname:'',
        email:'',
        password:'',
        username:'',
        mobnumber:'',
        confirmpassword:''

    },
    validationSchema:registerSchema,
    onSubmit

   });
   console.log("errors",errors);


  return (
    <div className="registeration-main-container">

        <div className="registeraton-container">

            <form className="register-outer-container" onSubmit={handleSubmit}>
            
            <span className='register-user-circle'>
                <FaUserCircle/>
            </span>


           <div className="register-inner-container">
           <div className="registeration-header">
                Registeration
                <span className='register-underline'></span>
            </div>
            <div className="register-content-container">
            <div className="left-side-container">
                <div className="register-item register-fullname">
                    <label>Full Name</label>
                    <input placeholder='Enter the Name'
                    id='regname'
                    value={values.regname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={errors.regname ? "errorvalueinput":''}
                    />
                    {errors.regname && touched.regname && <span className='error-span'>{errors.regname}</span>}
                </div>
                <div className="register-item register-email">
                <label>Email</label>
                    <input placeholder='Enter Email'
                    id='email'
                    value={values.email}
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={errors.email ? "errorvalueinput" : 'alter'}
                    />
                {errors.email && touched.email && <span className='error-span'>{errors.email}</span>}
                </div>
                <div className="register-item register-password">
                <label>Password</label>
                    <input placeholder='Enter the Password'
                    id="password"
                    value={values.password}
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
               {errors.password && touched.password && <span className='error-span'>{errors.password}</span>}

                </div>
            </div>
            <div className="right-side-conatiner">
                <div className="register-item register-username">
                <label>Username</label>
                <input placeholder='Enter Your UserName'
                id='username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.username && touched.username && <span className='error-span'>{errors.username}</span>}
                </div>
                <div className="register-item register-mobnumber">
                <label>Phone Number</label>
                <input placeholder='Enter Your Number'
                type='number'
                id='mobnumber'
                value={values.mobnumber}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.password && touched.mobnumber && <span className='error-span'>{errors.mobnumber}</span>}
                </div>
                <div className="register-item register-confirm-password">
                <label>Confirm Password</label>
                <input placeholder='Confirm Your Password'
                 id='confirmpassword'
                 type="password"
                 value={values.confirmpassword}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                {errors.confirmpassword && touched.confirmpassword && <span className='error-span'>{errors.confirmpassword}</span>}
                </div>

            </div>
            </div>

            <div className="register-submit-btn">
                <Button  variant="contained" size="small" type='submit' onClick={() => 
                 regDispatch(signup(values))}>Register</Button>
            </div>
           </div>

            </form>

        </div>

    </div>
  )
}

export default Registerationcomponent;