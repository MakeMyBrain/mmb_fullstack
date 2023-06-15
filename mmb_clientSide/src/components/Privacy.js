import NavbarComp from './Navbar'
import Footer from './Footer'
import about from '../media/about us banner.png'
import './Aboutus.css'
import { useEffect, useLayoutEffect } from 'react'

const Privacy = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }
      
      );
    useEffect(() => {
        document.title = "Privacy Policy | MakeMyBrain"
      }, [])

  return (
    <div>
        <header>
                <NavbarComp></NavbarComp>
            </header>
            <main className='about_body'>
                <h1 id='head_about'>
                    Privacy Policy
                </h1>
                <p>This Privacy Policy ("Policy") describes how MakeMyBrain ("we," "us," or "our") collects, uses, and discloses personal information when you access or use the MakeMyBrain website (makemybrain.com) or purchase products from us. We are committed to protecting your privacy and ensuring the security of your personal information. By accessing or using the Website and making a purchase, you consent to the practices described in this Policy.</p>
                <div id='containers'>
                    <h2 className='about_subhead'>
                        1. Information We Collect
                    </h2>
                    <p>
                    1.1 Personal Information: When you place an order on our Website, we collect certain personal information, including your name, email address, shipping address, and contact number. We collect this information to process your order and provide you with a seamless purchasing experience.<br/><br/>
                    1.2 Payment Information: When you make a purchase on our Website, our payment gateway provider, Razorpay, collects your payment card details. MakeMyBrain does not store or process any payment card information. Please review Razorpay's privacy policy for more information on how they handle your payment information.<br/><br/>
                    1.3 Usage Information: We may collect information about your interactions with the Website, such as your IP address, browser type, referring/exit pages, and the pages you visit. This information helps us analyze trends, administer the Website, and improve our services.
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        2. Use of Information
                    </h2>
                    <p>
                    2.1 Order Processing: We use the personal information you provide to process and fulfill your orders, communicate with you about your purchase, and provide customer support.<br/><br/>
                    2.2 Improving Our Services: We may use your information to analyze customer behavior, preferences, and trends to enhance our product offerings, marketing strategies, and overall user experience.<br/><br/>
                    2.3 Communication: With your consent, we may send you promotional emails or newsletters about our products, special offers, or other updates. You have the option to unsubscribe from these communications at any time.
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        3. Sharing of Information
                    </h2>
                    <p>
                    3.1 Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our business, such as payment processors, shipping partners (e.g., Shiprocket), and IT service providers. These service providers have access to your information only to perform their functions and are obligated to maintain its confidentiality.<br/><br/>
                    3.2 Legal Compliance: We may disclose your personal information if required by law or in response to a valid legal request, such as a court order, government investigation, or as otherwise required to protect our rights, property, and safety.                    
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        4. Data Security
                    </h2>
                    <p>
                    4.1 Security Measures: We implement appropriate technical and organizational measures to safeguard your personal information and protect it from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

                    
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        5. Your Rights
                    </h2>
                    <p>
                    5.1 Access and Correction: You have the right to access and update your personal information. If you wish to review, correct, or delete the personal information we hold about you, please contact us using the contact information provided below.<br/><br/>
                    5.2 Opt-Out: If you no longer wish to receive promotional emails or newsletters from us, you can unsubscribe by following the instructions provided in the communication or by contacting us directly.                   
                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        6. Children's Privacy
                    </h2>
                    <p>
                    Our Website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove the information promptly.

                    </p>
                    <hr/>
                    <h2 className='about_subhead'>
                        7. Changes to this Policy
                    </h2>
                    <p>
                    We reserve the right to modify or update this Privacy Policy at any time. Any changes to the Policy will be posted on this page with a revised "Last Updated" date. We encourage you to review this Policy periodically to stay informed about our information practices.
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

export default Privacy