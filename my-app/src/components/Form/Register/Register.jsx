import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import "./Register.css";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });
  /*   console.log(errors); */

  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/user";

  useEffect(() => {
    const connection = async () => {
      const data = await url;
      setUsers(data);
      /*  console.log(data); */
    };
    connection();
  }, [url]);

  const navigate = useNavigate();

  const onSubmit = (form) => {
    const userExist = users.map((user) => {
      if (user.email === form.email) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      console.log("user exist");
      navigate("/");
    } else {
      navigate("/");
      console.log("user not exist");
    }
  };

  return (
    <>
      <a
        href="#modal-opened-register"
        className="link-1-register"
        id="modal-closed-register"
      >
        REGISTER
      </a>

      <div className="modal-container-register" id="modal-opened-register">
        <div className="modal-register">
          <div classNameName="login-card-register">
            <div className="login-form-register">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="textbox">
                  <input
                    {...register("first_name", {
                      required: "username is required",
                      minLength: {
                        value: 5,
                        message: "username must be 3 characters long",
                      },
                      maxLength: {
                        value: 10,
                        message: "username must be 10 characters long",
                      },
                    })}
                    placeholder="First name"
                    type="text"
                  />
                </div>
                <p className="error_message">{errors.firstName?.message}</p>
                <br />
                <div className="textbox">
                  <input
                    {...register("last_name", {
                      required: "lastname is required",
                    })}
                    placeholder="Last name"
                    type="text"
                  />
                </div>
                <p className="error_message">{errors.lastName?.message}</p>
                <br />
                <div className="textbox">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email must be valid",
                      },
                    })}
                    placeholder="email"
                    type="email"
                  />
              
                </div>
                <p className="error_message">{errors.email?.message}</p>
                <br />
                <div className="textbox">
                  <input
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                        message:
                          "password must contain 6 characters , one uppercase,one lowercase,one number and one special character",
                      },
                    })}
                    placeholder="password"
                    type="password"
                  />
                </div>
                <p className="error_message">{errors.password?.message}</p>
                <br />
                <input type="submit" value="REGISTER" className="modal__btn" />
              </form>
            </div>
          </div>

          {/* <button type="submit "className="modal__btn" >
            REGISTER &rarr;
          </button> */}

          <a href="#modal-closed-register" className="link-2-register"></a>
        </div>
      </div>
    </>
  );
};

export default Register;
