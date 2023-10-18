import React from "react";
//import { useState } from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import GovAssist from "./../src/svg/GovAssist-removebg-preview.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Flag from "./../src/svg/united-states.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faClock,faComment,faHeart,faBriefcase,faMedal as faSharpMedal} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackGroundImage from './../src/svg/svgviewer-png-output.png'
import TimerComponent from "./timer";
// import LotteryForm from "./LotteryForm";
// import { Route, Routes } from "react-router-dom";
// import LotteryFormSteps from "./LotteryFormSteps";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   ></Box>
// );

const Navigation = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const places = [ "New York", "Paris","Tokyo","London","Sydney","Berlin","Rome","Dubai","Toronto","Rio de Janeiro",];

const birthplaces = places.map((place, index) => ({
    value: `place_name${index + 1}`, 
    label: place,
}));

  const martials = ["Single", "Married", "Divorced", "Separated", "Widowed"];

  const matrialStatus = martials.map((place, index) => ({
    value: `status_type${index + 1}`, 
    label: place,
}));
  
  return (
    <>
    <div 
     style={{
        marginTop: "10px",
        height:'1140px',
        backgroundImage: `url(${BackGroundImage})`, // Set GovAssist image as background
        backgroundSize: "underline", // Make sure the image covers the entire container
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundPosition: "center", // Center the background image
        minHeight: "100vh", // Set a minimum height for the component
        color: "white", // Set text color to white for better visibility
        padding: "20px" // Add padding to the component content
      }}
    >
      <Card
        sx={{
          width: "94%",
          marginLeft: "40px",
          color: "blue",
          backgroundColor: "#051d30",
          height: "100px",
        }}
      >
        <CardContent>
          <Typography>
            <img
              style={{ height: "44px", width: "350px" }}
              alt="a"
              src={GovAssist}
            />
          </Typography>
        </CardContent>

        <div
          style={{
            marginLeft: "620px",
            marginTop: "40px",
            display: "flex",
            flexDirection: "row",
            backgroundColor:"#051d30"
          }}
        >
          <Box sx={{ width: 160 }}>
            <Accordion
              sx={{ width: "180px", marginTop: "-100px", marginLeft: "120px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <img
                  style={{
                    height: "26px",
                    width: "35px",
                    marginLeft: "-10px",
                    marginTop: "100 px",
                  }}
                  src={Flag}
                  alt="a"
                />
                <Typography sx={{ marginLeft: "10px" }}>English</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Language</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Button
            sx={{
              color: "white",
              width: 150,
              height: "50px",
              backgroundColor: "#071d30",
              borderColor:'white',
              marginTop: "-100px",
              marginLeft: "200px",
            }}
            variant="outlined"
          >
            Live Chat
          </Button>
        </div>
      </Card>


      {/* <Routes>
        <Route path="/lotter-form-steps" element={<LotteryFormSteps />} />
        <Route path="/lottery-form" element={<LotteryForm />} />
         
      </Routes> */}

      <div>
        <h1
          style={{
            color: "green",
            fontSize: "50px",
            fontWeight: "600",
            marginLeft: "40px",
          }}
        >
          Win the right to live <br />
          in the USA!
        </h1>
        <div style={{ marginleft: "40px" }}>
          <p
            style={{
              color: "black",
              fontSize: "30px",
              fontWeight: "400",
              marginLeft: "40px",
            }}
          >
            The official deadline <br />
            is runing, so hurry <br />
            up and <Link  
             href="/lottery-form" 
             sx={{ color: 'white', textDecoration: 'underline'}}>apply here</Link>
          </p>
        </div>

<div style={{marginTop:'-400px',marginLeft:'-480px'}}>

<TimerComponent  />

</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginTop:'-240px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faUsers} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>50,00 people and their families will Live, Work and Study
    <br/> in the USA</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faSharpMedal} rotation={180} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>OFFICIAL USA Government program</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faBriefcase} rotation={180} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>Your chance to WORK, LIVE & STUDY in USA </p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faClock} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>Simple registration within 5 minutes</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faComment} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>Personal support in every step</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'40px' }}>
    <FontAwesomeIcon icon={faHeart} />
    <p style={{marginLeft:'20px',color:'purple',fontSize:'17px',fontWeight:'560'}}>Double chance for married people to win the Green Card</p>
  </div>
</div>
        
        <Card
          sx={{
            width: "580px",
            height: "670px",
            color: "blue",
            backgroundColor: "white",
            marginTop: "-32rem",
            marginLeft: "580px",
            borderRadius:"68px"
          }}
        >
          <CardContent>
            
          <Typography
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '24px',
        color: 'green',
        marginLeft: '30px',
        marginTop: '30px'
      }}
      color="text.secondary"
      gutterBottom
    >
      <ArrowForwardIcon style={{ color: 'green', fontSize: '48px', marginRight: '10px' }} />
      <Link href="www.google.com" sx={{color:'green',textDecoration: "underline" }}> Check now for free!</Link>
     
    </Typography>

            <Typography
              sx={{ color: "#020418",marginTop:'10px',marginLeft:'20px',fontSize:'58px' }}
              variant="h2"
              component="div"

            >
              Green card eligibility
            </Typography>

            <TextField
            sx={{marginLeft:'30px',marginTop:'20px'}}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
             sx={{marginLeft:'20px',marginTop:'20px'}}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <br/>
            <TextField
            sx={{marginLeft:'30px',marginTop:'20px'}}
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <TextField
            sx={{marginLeft:'20px',marginTop:'20px'}}
              id="outlined-basic"
              label="Your email again"
              variant="outlined"
            />
    <div>
     
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          style={{marginLeft:'30px',bwidth:'10px',ackgroundColor:'#eee6e6',marginTop:'20px', width:'490px'}}
          id="outlined-select-currency"
          select
          label="Your country of birth"
          SelectProps={{
            native: false,
          }}
          // defaultValue="Your country of birth"
          // helperText="Please select your currency"
        >
          {birthplaces.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
  style={{ marginLeft: '30px',width:'490px', backgroundColor: '#eee6e6', marginTop: '20px',
  // width: '490px' 
  }}
  id="outlined-select-currency"
  select
  label="Martial Status"
  variant="outlined"
  SelectProps={{
    native: false,
  }}
>
  {matrialStatus.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>

      </div>
    </Box>
    </div>
          <Box>
            <div style={{ marginTop: "10px" }}>
              <Checkbox sx={{ marginTop: "10px", marginLeft: "20px"}} {...label} />{" "}
              <p style={{ marginTop: "-30px", marginLeft: "70px",color:'black',fontSize:'18px',height:'20px' }}>
                {" "}
                Yes, i have finished highschool OR i have quallifying training.
              </p>
            </div>
          </Box>
          <CardActions>
            <Button
              sx={{
              fontSize:'20px',
              fontWeight:'800',  
              color: 'white',
              width: '490px',
              height: '50px',
              backgroundColor: '#3CB043',
              marginTop: '-10px',
              marginLeft: '20px',
            }}
            variant="contained"
            >
              Continue
            </Button>
           </CardActions>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
};

export default Navigation;
