import { Button } from "@material-ui/core";
import React from "react";
import "../css/LoginPage.css";

function LoginPage() {
  return (
    <div className='loginPage'>
      <div className='loginPage__top'>
        <h1 className='loginPage__topTitle'>Welcome to Expense App</h1>
        <h4>
          "<u>The only manager we need to monitor our expenses</u>"
        </h4>
      </div>
      <div className='loginPage__top'>
        <Button variant='contained' color='primary'>
          Sign in with{" "}
          <img
            style={{ width: "30px", marginLeft: 10 }}
            src='https://p7.hiclipart.com/preview/249/19/631/google-logo-g-suite-google-guava-google-plus.jpg'
            alt='Google'
          />
        </Button>
      </div>
      <div className='loginPage__bottom'>
        <img
          clasName='loginPage__bottomCloud'
          alt='loginPage__bottomCloud'
          src='https://discord.com/assets/690c2345bcaaaa50b71548231a26b696.svg'
        />
      </div>
    </div>
  );
}

export default LoginPage;
