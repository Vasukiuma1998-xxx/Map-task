import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './components/Search';
import Book from './components/Book';
import "./style.css";
import img1 from "./assets/images/img1.jfif"
import img2 from "./assets/images/img2.jfif"
import img3 from "./assets/images/img3.jfif"
import img4 from "./assets/images/img4.jfif"
import img5 from "./assets/images/img5.jfif"


const root = ReactDOM.createRoot(document.getElementById('root'));

var users = [
  {

    name: "Jessica Koel",
    msg: "Hey, Joel i herer to help you out please...",
    time:"11:52",
    pic:img1
  },
  {
    name: "Komeial Bolger",
    msg: "I will send u all document as soon as....",
    time:"11:00",
    pic:img2
  },
  {
    name: "Tamara Suiale",
    msg: "We need to start the project",
    time:"11:30",
    pic:img3
  },
  {
    name: "Ajith sunnil",
    msg: "I suggest to start  new business",
    time:"11:52",
    pic:img4
  },
  {
    name: "Vijay patel",
    msg: "We are having meeting in the evening",
    time:"12:00",
    pic:img5
  }
]



root.render(
  <div>
    <Search></Search>
    {
      users.map(function (item) {
        return <Book name={item.name} msg={item.msg} time={item.time} pic={item.pic}></Book>
      })
    }
  </div>


)

