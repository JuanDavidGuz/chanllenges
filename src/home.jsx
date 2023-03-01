import { useState } from 'react';
import './App.css'
import { FirstApp, Counter, GifExpert, GifGrid, Counter2, Fetch_component, BreakingBad } from './'

const Home = () =>{

    return (
        <>
            <FirstApp />
            <hr />
            <Counter />
            <hr />
            <GifExpert/>
            <hr />
            <GifGrid/>
            <hr />
            <Counter2/>
            <hr />
            <Fetch_component/>
            <hr />
            <BreakingBad/>
        </>
      )
}

export default Home