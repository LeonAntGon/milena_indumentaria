"use client"
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Whatsup from './components/Whatsup';
import Group from './components/Group';
import Info from './components/Info';
import Payments from './components/Payments';

export default function Home() {
  return (
    <>
  
      <Nav/>
      
      <Hero />

      <Promo />
      <Group />
      <Info />
      
      <Footer/>
      <Payments />
      
      <Whatsup/>
    </>

  );
}
