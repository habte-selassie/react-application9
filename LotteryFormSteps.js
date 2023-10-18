import React from 'react';
import GovAssist from './../src/svg/GovAssist-removebg-preview.png';
import { Box, Card } from '@mui/material';
import './footer.css'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './lotteryform.css'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import Flag from './../src/svg/united-states.png';
import './lotteryformsteps.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const LotteryFormSteps = () => {  
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
  
    const handleChange1 = () => {
      setExpanded1((prevExpanded) => !prevExpanded);
    };
  
    const handleChange2 = () => {
      setExpanded2((prevExpanded) => !prevExpanded);
    };
  
    // const [expanded, setExpanded] = React.useState(false);
  
    const [countryCode, setCountryCode] = useState('');

    const handleChange = (event) => {
     setCountryCode(event.target.value);
     };

    const steps = [
        {
          label: 'Name',
          description: `Habte Selassie Fitsum.`,
        },
        {
          label: 'Contact Information',
          description:
            '+251968650039.',
        },
        {
          label: 'Gender',
          description: `Male.`,
        },
        {
            label: 'Birth Information',
            description: 'April 5,2001.',
          },
          {
            label: 'Country of Eligibility',
            description:'Ethiopia.',
          },
          {
            label: 'Photograph',
            description:'i do not have any photograph',
          },
          {
            label: 'Mailing Address',
            description:'habteselassie26@gmail.com.',
          },
          {
            label: 'Additional Information',
            description:'Software Engineer.',
          },
          {
            label: 'Payment',
            description: 'PayPal.',
          },
          
      ];
        
        const [activeStep, setActiveStep] = useState(0);
      
        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleReset = () => {
          setActiveStep(0);
        };
    return (
    <div style={{marginTop:'700px'}}>
    <Box class="firstbox" sx={{backgroundColor:'slateblue'}}>

<img alt='a' src={GovAssist} style={{width:'220px',height:'40px',marginLeft:'40px',marginTop:'20px'}} />
          <Box sx={{ maxWidth: 400, marginLeft:'40px',marginTop:'28px'}}>
            <Stepper activeStep={activeStep} orientation="vertical" sx={{color:'white'}}>
              {steps.map((step, index) => (
                <Step key={step.label} sx={{height:'40px',}}>
                  <StepLabel
                  sx={{color:'white'}}
                    optional={
                      index === 9 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1,
                          color:'white',backgroundColor:'green' }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1,color:'white',backgroundColor:'purple' }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Card  sx={{ p: 3,color:'green',backgroundColor:'gray',width:'150px',height:'50px' }}>
                <Typography sx={{marginTop:'-10px' }}>All steps completed</Typography>
                <Button variant='outlined' onClick={handleReset} sx={{ mt: 1, mr: 1,color:'black',backgroundColor:'brown',marginTop:'4px',marginLeft:'28px' }}>
                  Reset
                </Button>
              </Card>
            )}
          </Box>
    </Box>
    
   <div style={{marginLeft:'620px',marginTop:'-48rem'}}>
     <Box sx={{ width: 160}}>
      <Accordion 
      
      sx={{width:'180px',marginTop:'-8 rem', marginLeft:'180px'}}>
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
    <Button sx={{ color:'white', width: 200, height:'50px', backgroundColor:'brown',marginTop:'-70px',marginLeft:'400px' }} variant="contained">Live Chat</Button>
    
    <p style={{color:'#030a22', width: 400, height:'50px', fontSize:'48px',marginTop:'170px',marginLeft:'-20px'}}> 2.1. - Phone number</p>
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Code</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={countryCode}
          onChange={handleChange}
          autoWidth
          label="Code"
        >
          <MenuItem value="">
            <em>+210</em>
          </MenuItem>
          <MenuItem value={+251}>+251</MenuItem>
          <MenuItem value={+289}>+289</MenuItem>
          <MenuItem value={+294}>+294</MenuItem>
        </Select>
      </FormControl>
    </div>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        fontSize:'40px',
        marginTop:'-64px',
        marginLeft:'100px'
      }}
    >
     <TextField
      fullWidth
      label="+1 604 123 4567"
      id="fullWidth"
      InputLabelProps={{
        position: 'end', // Position the label to the right
        sx: { fontSize: '28px' }, // Set the font size of the label text
      }}
    />
    </Box>
    <Button sx={{width:100,height:40,color:'white',backgroundColor:'grey',fontSize:'24px',fontWeight:'900px',marginLeft:'0px',marginTop:'20px'}} variant="contained" color="success">
     <p style={{color:'white',marginLeft:'-20px'}}>OK</p> <CheckIcon />
     </Button>
       
    </div>

    
      <div>
        <div style={{ display: 'inline-block', marginRight: '20px' }}>
          <Accordion expanded={expanded1} onChange={handleChange1} sx={{position:'absolute', color:'white', 
          marginLeft:'1120px',width:'100px',marginTop:'100px',backgroundColor:'#7d87a7'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Accordion Content 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Accordion expanded={expanded2} onChange={handleChange2} sx={{backgroundColor:'#7d87a7', position:'absolute',marginTop:'100px',color:'white', marginLeft:'1000px',width:'100px'}}>
            <AccordionSummary
              expandIcon={<ExpandLessIcon /> }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Accordion Content 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <p style={{marginLeft:'840px',marginTop:'240px',fontSize:'15.8px',fontWeight:'400px',color:'#080733'}}>Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</p>
     
  </div>
  );

}

export default LotteryFormSteps