import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedIcon from '@mui/icons-material/Feed';
import { DataGrid } from '@mui/x-data-grid';

  const spacerWidth = 20; // Adjust this value based on your spacing preference

  const columns1 = [
    { field: 'feeType', headerName: 'Fee Type', flex: 1 }, // Flex property allows this column to take remaining space
    { field: 'spacer2', headerName: '', width: spacerWidth },
    { field: 'costUs', headerName: 'Cost (to Applicant Living in the U.S)', width: 250 },
    { field: 'spacer3', headerName: '', width: spacerWidth },
    { field: 'costAbroad', headerName: 'Cost (to Applicant Living Abroad)', width: 250 },
    { field: 'spacer4', headerName: '', width: spacerWidth },
  ];
  
  const rows1 = [
    { id: 1, feeType: 'Family Sponsorship Form(1-130)', costUs: '$535', costAbroad: '$535' },
    { id: 2, feeType: 'Green Card Application Form(1-485)', costUs: '$1140', costAbroad: 'Not required' },
    { id: 3, feeType: 'Financial Support Form(1-864)', costUs: '$0', costAbroad: '$120' },
    { id: 4, feeType: 'Work Permit Application Form(1-765) (optional)', costUs: '$0', costAbroad: 'Not required' },
    { id: 5, feeType: 'Travel Permit Application Form(1-131) (optional)', costUs: '$0', costAbroad: 'Not required' },
    { id: 6, feeType: 'Biometrics(Fingerprints & Photo)', costUs: '$85', costAbroad: '$0' },
    { id: 7, feeType: 'State Department Processing', costUs: 'Not required', costAbroad: '$325' },
    { id: 8, feeType: 'USCIS Immigrant fee', costUs: 'Not required', costAbroad: '$220' },
    { id: 9, feeType: 'Medical Examination', costUs: '*Varies', costAbroad: '*Varies' },
    { id: 10, feeType: 'Total', costUs: '$1760', costAbroad: '$1200' },
  ];
  
const Navigation = () => { 
    return (
      <div style={{marginTop:'-10px',backgroundColor:'#dadde6',height:'1240px'}}>
  <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop:'10px' }}>
      <FeedIcon sx={{marginLeft:'70px', marginTop:'40px'}} />
      <h3 style={{ marginLeft: '20px',color:'#0c063b',marginTop:'40px' }}>Find the right visa for you!</h3>
      </div>
   <div>

      <Card sx={{ minWidth: 275,
      width:'92%',
       marginTop:'40px',marginLeft:'70px',
      backgroundColor:'white',height:'80px'}}>
      <CardContent>
      <Typography sx={{ fontSize: 24,marginTop:'10px', }}>
      Mandatory Government Fees for green Cards
      </Typography>  
      </CardContent>
      <CardActions>
      </CardActions>
      <Button sx={{ 
      backgroundColor:'orangered', 
      width:'160px',
      height:'48px',
      marginLeft:'1000px', 
      marginTop:'-140px',
      borderRadius:'10px'
      }} variant="contained">

     <h3 style={{
     color:'white',
     fontSize:'14px',
     marginTop:'20px'
     }}>Apply now</h3> 
      
      </Button>
    </Card>
  </div>
    
<div style={{ width: '100vw', height: '100vh', }}> {/* Set the container to full viewport width and height */}
  <div style={{ height: 'calc(100% - 48px)', width: '92%',marginLeft:'64px',marginTop:'20px', backgroundColor:'white' }}> {/* Set the height of the container (subtract any header/footer height if present) */}
    <DataGrid
      rows={rows1}
      columns={columns1}
      pageSize={5}  
     
    />
  </div>
</div>

    <h3 style={{marginLeft:'800px',color:'grey',fontSize:'17px',marginTop:'-30px'}}>Fees are subject to change, please use <Link sx={{color:'grey', textDecoration: 'underline'}} href='www.calculator.com'>this calculator</Link> </h3>
   
    <div style={{marginTop:'40px',marginLeft:'30px'}}>
      <Accordion sx={{marginLeft:'40px', height:'100px',width:'94%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" sx={{ color: 'green', fontSize:'31px',fontWeight:'800px' }}>
        Diversity Visa Timeline
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginLeft:'40px', height:'100px', width:'94%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Typography variant="h5" sx={{ color: 'green',fontSize:'31px',fontWeight:'800px' }}>
        Diversity Visa FAQs
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
       </Accordion>
       </div>
     </div>
   </div>
    )
}

export default Navigation