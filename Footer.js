import React from 'react';
import GovAssist from './../src/svg/GovAssist-removebg-preview.png';
import { Box, Divider, Link } from '@mui/material';
import './footer.css'


const Footer = () => { 
    return (
      <div style={{marginLeft:'20px'}}>
    <div style={{marginTop:'78px'}}>
    <Box class="box1" sx={{backgroundColor:'green'}}>

{/* <Divider variant="inset" component="li" /> */}

<img alt='a' style={{ color:'white',width:'240px',height:'40px',marginTop:'40px',marginLeft:'60px'}} src={GovAssist} />

<div style={{display:'flex',flexDirection:'row',marginLeft:'360px',marginTop:'-20px'}}>
<Link href="#" underline="always" sx={{color:'white',textDecorationColor: 'white', marginLeft:'200px'}} >Terms of Service</Link>
<Link href="#" underline="always" sx={{color:'white',textDecorationColor: 'white', marginLeft:'20px'}}>Privacy Policy</Link>
<Link href="#" underline="always" sx={{color:'white',textDecorationColor: 'white', marginLeft:'20px'}}>Legal Disclaimer</Link>
<Link href="#" underline="always" sx={{color:'white',textDecorationColor: 'white', marginLeft:'20px'}}>Refund Policy</Link>
<Link href="#" underline="always" sx={{color:'white',textDecorationColor: 'white', marginLeft:'20px'}}>Terms of Use</Link>

</div>

<Divider variant="inset" component="li" sx={{marginTop:'10px'}} />

<p style={{color:'white',marginTop:'-4px',marginLeft:'60px',maxWidth:'1100px',textAlign: 'justify'}}>
Disclaimer: GovAssist  is  not  affiliated  with  any  United  States  government agency  or  department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees.
 This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. 
 You may apply by yourself directly at travel.state.gov or at uscis.gov.
GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. 
Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies.
</p>

    </Box>
    
    <Box class="box2">
    <p style={{marginLeft:'400px',color:'white',paddingTop:'40px',marginTop:'0px'}}>Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</p>
    </Box>
    </div>
    </div>
  );

}

export default Footer