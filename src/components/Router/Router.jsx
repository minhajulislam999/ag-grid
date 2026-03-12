import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Component } from 'react';
import Team from '../Team/Team';



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
    path: '/team/:teamId',
    loader: ({params}) =>{
      return {name: "Team " + params.teamId}
    },
    Component: Team

  }
]);


export default Router
