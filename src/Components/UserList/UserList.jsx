import React, { Component } from 'react'
import Card from './Card/Card'

const db = [
    {id:1, name: 'Masha', surname : "Lol"},
    {id:2, name: 'Pasha', surname : "Lol"},
    {id:3, name: 'Kostya', surname : "Lol"},
    {id:4, name: 'Khristian', surname : "Lol"},
]


export default class UserList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            users: db,
        }
    }

getUsers = (u,i) => {
   return <Card key = {i} user = {u}/>
}

  render() {
const {users} = this.state;
    return (
      <ul> {users.map(this.getUsers)} </ul> 
    )
  }
}
