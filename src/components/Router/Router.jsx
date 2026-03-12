import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Component } from 'react';
import Team from '../Team/Team';
import User from '../User/User';
import Form from '../Form/Form';



const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ]
  },

  {
    path: "/user",
    Component: User
  },
  {
    path: '/form',
    Component: Form
  },
  {
    path: '/team/:teamId',
    loader: ({params}) =>{
      return {name: "Team " + params.teamId}
    },
    Component: Team

  }
]);


export default Router
