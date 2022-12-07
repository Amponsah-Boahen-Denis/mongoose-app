const express=require('express');
const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose')
const app=express();
 mongoose.connect('localhost://mongodb/testdb')
 run()
async function run(){
    const hello= await mongoose.creat({
name:"kofi",
town:'kumasi',
religion:'action'
hobies:
    })
    console.log(hello)
}