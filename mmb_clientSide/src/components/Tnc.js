import NavbarComp from './Navbar'
import Footer from './Footer'
import about from '../media/about us banner.png'
import './Aboutus.css'
import { useEffect, useLayoutEffect } from 'react'

const Tnc = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );
    useEffect(() => {
        document.title = "Terms & Conditions | MakeMyBrain"
      }, [])

  return (
    <div>
        <header>
                <NavbarComp></NavbarComp>
            </header>
            <main className='about_body'>
                <h1 id='head_about'>
                    Terms & Conditions
                </h1>
                <p>Welcome to MakeMyBrain! These Terms and Conditions govern your access to and use of the MakeMyBrain website (makemybrain.com) and the purchase of products available on the Website. By accessing or using the Website and making a purchase, you agree to be bound by these Terms. Please read them carefully.</p>
                <div id='containers'>
                    <h2 className='about_subhead'>
                        1. General
                    </h2>
                    <p>
                    1.1 Acceptance of Terms: By accessing or using the Website, you agree to be legally bound by these Terms. If you do not agree to these Terms, please refrain from using the Website.<br/><br/>
                    1.2 Amendments: MakeMyBrain reserves the right to modify or amend these Terms at any time. Any changes to the Terms will be effective immediately upon posting on the Website. It is your responsibility to review these Terms periodically for updates or changes. Your continued use of the Website following the posting of changes constitutes your acceptance of the modified Terms.
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        2. Product Information
                    </h2>
                    <p>
                    2.1 Description: MakeMyBrain provides product descriptions and images on the Website to the best of its ability. However, we do not guarantee that the information is accurate, complete, reliable, current, or error-free.<br/><br/>
                    2.2 Pricing: The prices of products on the Website are listed in Indian Rupees (INR) and are subject to change without notice. MakeMyBrain reserves the right to modify prices, discontinue products, or introduce new products at any time.
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        3. Ordering and Payment
                    </h2>
                    <p>
                    3.1 Order Placement: To purchase a product from MakeMyBrain, you must place an order through the Website. By placing an order, you confirm that all information provided is accurate, complete, and up to date.<br/><br/>
                    3.2 Payment: MakeMyBrain utilizes Razorpay integration for online payments. By making a purchase, you agree to comply with the terms and conditions of Razorpay. MakeMyBrain does not store any payment card information.

                    
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        4. Shipping and Delivery
                    </h2>
                    <p>
                    4.1 Delivery Partners: MakeMyBrain uses Shiprocket as the delivery partner for shipping products. Delivery times may vary depending on your location and other factors beyond our control. MakeMyBrain will make reasonable efforts to ensure timely delivery but cannot be held responsible for any delays or delivery issues.<br/><br/>
                    4.2 Shipping Charges: Shipping charges may apply to your order and will be displayed during the checkout process. These charges may vary depending on the shipping address and the weight or dimensions of the products.<br/><br/>
                    4.3 Delivery Time: We deliver our products within the duration of 4-15 days. In case you do not receive the product within the specified duration, kindly revert back to us on the provided contacts.
                    
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        5. Returns and Refunds
                    </h2>
                    <p>
                    5.1 Return Policy: MakeMyBrain accepts returns within 7 days from the date of delivery, subject to certain conditions. Please text us on WhatsApp on the number provided, or send us an E-mail regarding your return as per the email ID provided on the Website.<br/><br/>
                    5.2 Refunds: Refunds will be issued in accordance with our Return Policy. MakeMyBrain reserves the right to refuse a refund if the returned product does not meet the specified conditions.                    
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        6. Intellectual Property
                    </h2>
                    <p>
                    6.1 Ownership: All content on the Website, including but not limited to text, graphics, logos, images, and software, is either the property of MakeMyBrain or is a no-copyright property.<br/><br/>
                    6.2 Use Restrictions: You may not use, reproduce, distribute, modify, or create derivative works of any content on the Website without prior written consent from MakeMyBrain.                  
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        7. Limitation of Liability
                    </h2>
                    <p>
                    7.1 Disclaimer: MakeMyBrain disclaims all warranties, express or implied, regarding the products and the Website, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.<br/><br/>
                    7.2 Limitation of Liability: MakeMyBrain shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of the products or the Website, even if advised of the possibility of such damages. In no event shall MakeMyBrain's total liability to you for all damages, losses, or causes of action exceed the total amount paid by you for the products purchased from MakeMyBrain.                
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        8. Indemnification
                    </h2>
                    <p>
                    You agree to indemnify, defend, and hold harmless MakeMyBrain and its officers, directors, employees, and affiliates from any claims, liabilities, damages, costs, or expenses arising out of or in connection with your use of the Website, your breach of these Terms, or your violation of any applicable laws or regulations.              
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        9. Governing Law and Dispute Resolution 
                    </h2>
                    <p>
                    These Terms shall be governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Website shall be settled through good faith negotiations. If a resolution cannot be reached, the dispute shall be submitted to binding arbitration in accordance with the Indian Arbitration and Conciliation Act. The language of the arbitration shall be English, and the seat of arbitration shall be in a mutually agreed location in India.       
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        10. Severity 
                    </h2>
                    <p>
                    If any provision of these Terms is deemed invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.       
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        11. Entire Agreement 
                    </h2>
                    <p>
                    These Terms constitute the entire agreement between you and MakeMyBrain regarding your use of the Website and the purchase of products, superseding any prior agreements or communications.      
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        12. Contact Information
                    </h2>
                    <p>
                    If you have any questions, concerns, or feedback regarding these Terms or the MakeMyBrain Website, please write us at binay@makemybrain.com or text us at 7979033873.<br/><br/>

                    By using the MakeMyBrain Website and making a purchase, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                    </p>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
    </div>
  )
}

export default Tnc