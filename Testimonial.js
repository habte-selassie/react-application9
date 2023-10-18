import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
//import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
// import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import trustpilotImage from './../src/svg/trustpilot-removebg-preview.png';
import email from './../src/svg/email-removebg-preview.png'
import emailShower from './../src/svg/emailshower-removebg-preview.png'
import Choi from './../src/svg/choi.jpeg'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
//import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the right arrow icon
import Pagination from '@mui/material/Pagination';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Testimonial = () => {    
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    return (
    <div>

   <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px', marginLeft: '40px' }}>
     <StarIcon style={{ fontSize: '1.5rem', color: '#070d36', marginRight: '10px' }} />
     <h3>Our Jobs speak for ourselves</h3>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
  <img alt='a' style={{ width: '300px', marginLeft:'868px',height: '200px',marginTop:'-100px' }} src={trustpilotImage} />
  <img alt='b' style={{ width: '345px', marginLeft:'830px',height: '240px', marginTop: '-2px' }} src={email} />
  <img alt='c' style={{ width: '600px', marginLeft:'780px',height: '400px', marginTop: '-130px' }} src={emailShower} />
</div>

<div style={{marginTop:'-600px', marginLeft:'40px',}}>
<Stack direction="row" spacing={2}>
     <List
     sx={{
       marginLeft:'40px',
       marginTop:'100px',
       width: '100%',
       maxWidth: 360,
       bgcolor: 'background.paper',
     }}
   >
     <ListItem>
       <ListItemAvatar>
         <Avatar  sx={{ width: '70px', height: '70px' }}>
           <img src={Choi} style={{width:'99px',height:'68px'}} alt='b'/>
         </Avatar>
       </ListItemAvatar>
   
<ListItemText
  primary="Yeoneso Cheoi"
  sx={{
    marginTop: '-40px',
    marginLeft: '20px',
    fontSize: '40px',
    color: 'gray', // Set text color to gray
    fontWeight: 'bold', // Make text bold
    textDecoration: 'underline', // Add underline to text
  }}
/>

<ListItemText
  primary="1 Review"
  sx={{
    marginTop: '40px',
    marginLeft: '-280px',
    color: 'gray', // Set text color to gray
  }}
/>




     </ListItem>
     <div style={{marginLeft:'64px',marginTop:'-28px'}}>
     <LocationOnIcon sx={{marginLeft:'200px',marginTop:'-280px',color:'gray'}} fontSize="large" color="gray"></LocationOnIcon>KR
     {/* <Divider variant="inset" component="li" /> */}
     </div>
   
   </List>
    
   </Stack>
   <div>
     {/* Other components */}
     <Divider sx={{marginLeft:'-68px'}} variant="inset" component="li" />
   <h4 style={{marginLeft:'480px', color:'gray'}}>March 20,2023</h4>
   <Box
     sx={{
       marginTop:'40px',
      //  marginLeft:'40px',
       width: 200,
       color:'green',
       display: 'flex',
       alignItems: 'center',
     }}
   >
     <Rating
       name="hover-feedback"
       value={value}
       precision={0.5}
       getLabelText={getLabelText}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       onChangeActive={(event, newHover) => {
         setHover(newHover);
       }}
       emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
     />
     {value !== null && (
       <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
     )}
   </Box>
      <p style={{fontSize:'24px',fontWeight:'800px',marginTop:'40px',color:'gray'}}>Highly Recommended</p>
      </div>
   <p style={{marginTop:'40px',fontSize:'18px',maxWidth:'580px'}}>
     Nikka was a very professional consultant, always ready to assist us each step of
      <br/>
    the  way, i was reminded of everything and I had to take with to the interview<br/>
    and also later to pick my passport and my son's. Thanks once more, I cetainly recommended the service.</p>
   <h3 style={{marginTop:'40px'}}>Date of experince: February 28,2023</h3>

      <Pagination  sx={{marginLeft:'480px',marginTop:'130px'}} count={3} size="large" />
</div>

  <Box 
  
  >
      <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
      <p style={{ fontSize: '44px', fontWeight: '300px', color: 'green', marginLeft: '50px', marginTop: '20px' }}>
        Let's keep in touch for news
      </p>
      <AppBar position="static" sx={{marginLeft:'50px',borderRadius:'20px',height:'120px', background: 'linear-gradient(to right, blue 1%, #ece2e2 1%)',width:'88%' }}>
      <Toolbar  sx={{ height:'160px', width: '96%',borderRadius:'20px'}}>
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{fontSize:'17px',color:'#051d30', fontWeight:'700', marginLeft:'40px', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
     Subscribe to be the first do recieve updates and <br/> 
     be in advantage on your application process
    </Typography>
    <Search sx={{ marginLeft:'-100px',width:'1000px',backgroundColor:'white'}}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
      sx={{color:'grey'}}
        placeholder="your email"
        inputProps={{ 'aria-label': 'search' }}
      />
<Fab sx={{color:'white', height:'50px',backgroundColor:'orangered'}} variant="extended">
Subscribe
     <ArrowForwardIcon sx={{ mr: 1 }} />  
     </Fab>
    </Search>
   </Toolbar>
  </AppBar>
 </Box>
</div>
  );
}

export default Testimonial