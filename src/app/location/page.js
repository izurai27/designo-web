
"use client";

import Hero from "../ui/hero";
import Cards from "../ui/card";
import RoundCard from "../ui/roundCard";
import Footer from "../ui/footer";
import ProductHero from "../ui/productHero";
import BoxCard from "../ui/boxCard";
import Link from "next/link";
import RoundCardAbout from "../ui/roundCardAbout";
import MyMap from "../ui/map";
import React from 'react';

export default function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MyMap position = {[43.64406824828923, -79.39471056370772]}/>
      <MyMap position = {[-30.329120282582846, 149.78819686212694]}/>
      <MyMap position = {[53.710382231232465, -1.341765475489559]}/>
      
      
      <Footer/>
    </main>
  );
}
