import React, { useState } from 'react';
import './Accordian.css';
import { Questions } from './AccordianApi';
import MyAccordian from './MyAccordian';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Accordian = () => {
    const [data, setdata] = useState(Questions);
  return (
    <>
    <section className='main-div'>
        <h1>FAQS</h1>
        {data.map((curElem, index) => {
            const { id } = curElem;
            return (
                <MyAccordian key={id} {...curElem} />
            )
        })}
        </section>
        <Footer />
    </>
  )
}

export default Accordian