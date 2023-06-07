import React, { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarComp from '../components/Navbar'
import stresskit from '../media/web-product-non.png'
import './Product.css'

const Product = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })
      useEffect(() => {
        document.title = "Ascend - India's 1st Stress Relief Kit for mental wellness | MakeMyBrain"
      }, [])

  return (
    <div>
        <NavbarComp></NavbarComp>
        <div className='ascend_container'>
            <div className='ascend_head'>
                ASCEND
            </div>
            <div className='ascend_subhead'>
                <b>INDIA'S 1st STRESS RELIEF KIT</b>
            </div>
            <img src={stresskit} className='ascend_img'/>
            <Link to='/buynow' className='ascend_button'>Buy Now</Link>
            <div className='ascend_offer'>Order now at 30% discount!</div>

        <div className='ascend_about'>About the Product</div>
        <div className='ascend_content'>Imagine yourself working on a project that has a deadline in an hour, and most of your work is incomplete. 
            Added to that, if you do not finish the work, it can have a huge impact on your career. Now that causes you 
            to panic and be stressed out. How are you even going to work properly in the remaining time? Well, we have a 
            good news for you. Here's the Stress Relief Kit that will save your career at the last hour of deadline, 
            prevent you from damaging your relationships out of your ferocious anger, and help you reduce your chances 
            of getting deadly panic attacks.
        </div>
        <div className='ascend_about'>What's Inside</div>
        <div className='ascend_content'>The Stress Relief Kit typically contains the following items -
        </div>
        <div className='ascend_points'>
        
            <li><b>Bokoma Head Massager</b> - This massager gives your brain a quick dopamine release and relief from stress. It won't be 
            wrong to call it "Happy hours for the brain".</li><br/>
            <li><b>Fidget Spinner</b> - This stuff has been a cool trendy gadget and helps to bring your wandering mind back to focus. Nevertheless, 
            faster you spin the gadget, greater is the relaxation effect.</li><br/>
            <li><b>Acupressure Bracelet</b> - Your inner skin of the wrist is a sensitive part of the body, and you feel relaxed when something gently 
            rubs it to de-stress you. This bracelet is highly admired for its relaxing effect by gently pressing and revolving it around the wrist.</li><br/>
            <li><b>A letter for you</b> - Receive a hand-written letter for your wellbeing and our feelings of gratitude. We put our best efforts to 
            bring a wide smile on your face through the letter. Do tag us on social media after getting your letter!</li><br/>
            <li><b>Mental Health First Aid</b> - Do you know what to do if someone just got a panic attack? No, it's not CPR ;P . 
            Or what would you do if you are stressed before a presentation? Or even worse, how would you help a friend you broke down 
            after hearing about the death of his parent? This first-aid booklet covers it all.</li><br/>
            <li><b>A letter for us</b> - While online feedback forms are very common, letters still hold a beautiful place in our heart. Fill this 
            letter with all that you can imagine and think about the product you bought, and send us to our address. Get a chance to be featured on 
            our website and social media.</li><br/>
        
        </div>
        <Link to='/buynow' className='ascend_button'>Buy Now</Link>
        <div className='ascend_offer'>Order now at 30% discount!</div>
        </div>
        <Footer></Footer>
    
    </div>
  )
}

export default Product