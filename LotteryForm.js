import React from 'react';
import GovAssist from './../src/svg/GovAssist-removebg-preview.png';
import { Box, Divider, Link } from '@mui/material';
import './footer.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Forward10Icon from '@mui/icons-material/Forward10';
import { useState } from 'react';
import Flag from './../src/svg/united-states.png';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './lotteryform.css'
  
const LotteryForm = () => { 
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
    <div style={{marginTop:'180px'}}>
    
    <div class="firstbox" style={{ backgroundColor:'#1d2044'}}>
    <Box>
    <img alt='a' src={GovAssist} style={{width:'220px',height:'40px',marginLeft:'40px',marginTop:'40px'}} />
<h1 className='a' style={{marginTop:'40px'}}> Electronic </h1> 
<br/>
 <h1 className='b'> diversity visa </h1> 
 <br/>
 <h1 className='c'> entry form </h1>
<br/>

<p className='first' style={{maxWidth:'600px',fontSize:'44px'}}>Here you will fill all </p>
<p className='second' style={{maxWidth:'500px',fontSize:'44px'}}>your information to </p>
<p className='third' style={{maxWidth:'500px',fontSize:'44px'}}>reach your dream</p>

 <div style={{ display: 'flex', alignItems: 'center',marginTop:'80px',marginLeft:'40px' }}>
  <Forward10Icon sx={{ fontSize: '40px', color: 'white' }} />
  <p className='fourth' style={{ marginLeft: '10px' }}>10 minutes to finish</p>
</div>

    <Card sx={{ display: 'flex', background: 'linear-gradient(to right, white 2%, #1d2044 1%)',
     width:'450px',
     marginTop:'60px',
     marginLeft:'40px',
     height:'110px',
     fontSize:'16px',
    fontWeight:'900px',
    color:'white' }}>
  <CardContent>
    This is a full copy of the official DV Lottery application
    form.Use it for training only.You will need to apply on The 
    official website www.dvlottery.state.gov when it opens to 
    take part in the lottery.
    </CardContent>
   </Card>
 </Box>

    </div>




<div class="secondbox">
<Box sx={{backgroundColor:'blueblack', height:300}}>
    <Stack spacing={2} direction="row">
      
      <Box sx={{ width: 160 }}>
      <Accordion sx={{width:'180px',marginLeft:'160px',marginTop:'180px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <img style={{ height:'26px',width:'35px', marginLeft:'-10px' }} src={Flag} alt='a'/>
          <Typography sx={{marginLeft:'10px'}}>English</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Language
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Stack>

    <Button sx={{ color:'white', width: 200, height:'50px', backgroundColor:'brown',marginTop:'-65px',marginLeft:'360px' }} variant="contained">Live Chat</Button>
     
    <p style={{marginLeft:'-30px',marginTop:'200px',fontSize:'44px',fontWeight:'400px',color:'#080733'}}>Are you ready to begin?</p>

    <Button sx={{fontSize:'20px',width:440,height:50,color:'white',backgroundColor:'green',borderRadius:'10px',marginLeft:'-20px'}} variant="contained" color="success">
     Start!
     </Button>

     <p style={{marginLeft:'160px',marginTop:'300px',fontSize:'15.8px',fontWeight:'400px',color:'#080733'}}> Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</p>
   
    </Box>
      
</div>
    
   
    </div>
  );

}

export default LotteryForm