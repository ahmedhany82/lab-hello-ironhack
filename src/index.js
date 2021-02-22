import React from 'react'
import ReactDOM from 'react-dom'
import './style.css';

const myStyle = {
    backgroundColor: "navy",
    color: 'white',
    height: '70%',
    paddingLeft: '50px',
    paddingTop: '20px',
    paddingRight: '50px',
    paddingBottom: '20px',
    margin: '20px'
}

const textStyle = {
    margin: '0px',
    fontSize: '30px',
}

const icons = {
    display: 'flex',
    color: 'navy',
    height: '30%',
    fontSize: '25px',
    paddingTop: '50px',
    paddingBottom: '50px'
}

const column = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const columnText= {
    width: '65%', 
    textAlign: 'center',
}

const header = {
    marginTop: '30px',
    marginBottom: '0px'
}

const block = (
    <div>
        <div style={myStyle} >
        <div style={
            { display: 'flex',
              justifyContent: 'space-between'}
            }><img src="/images/ironhack-logo.svg" alt=""/>
            <img src="/images/menu-top.svg" alt=""/>
       </div>
        <h1 style={
            {
                fontSize: '75px',
                marginBottom: '20px'
            }}>Say hello to <br/> ReactJS</h1>
        <p style={textStyle} >
            You will learn how to use
        </p>
        <p style={textStyle}>
            the most popular frontend library,
        </p>
        <p style={textStyle}>
            and become a super Ninja developer.
        </p>
        <div style={ {
            backgroundColor: 'white',
            width: '150px',
            color: 'darkblue',
            marginTop: '50px',
            padding: '2px'
            } } >
            <h2 style={{ textAlign: 'center'}}>Awesome!</h2>
        </div>
    </div>
    <div style={icons}>
            <div style={column}>
                <img src="/images/icon1.png" alt=""/>
                <h2 style={header}>Declarative</h2>
                <p style={columnText}>React makes it painless to create interactive UIs.</p>
            </div>
            <div style={column}>
                <img src="/images/icon2.png" alt=""/>
                <h2 style={header}>Components</h2>
                <p style={columnText}>Build encapsulated components that manage thier state.</p>
            </div>
            <div style={column}>
                <img src="/images/icon3.png" alt=""/>
                <h2 style={header}>Single-Way</h2>
                <p style={columnText}>A set of immutable values are passed to the components.</p>
            </div>      
            <div style={column}>
                <img src="/images/icon4.png" alt=""/>
                <h2 style={header}>JSX</h2>
                <p style={columnText}>Statically-typed, desgined to run on modern browsers.</p>
            </div>
        </div>
    </div>
)

ReactDOM.render(block, document.getElementById('root'));