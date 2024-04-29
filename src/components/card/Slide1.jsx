import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import DemoCard from './DemoCard';

const icon = (
  <div className=' flex-col sm:flex sm:flex-row space-x-4 sm:space-x-0 space-y-6 '>
    <DemoCard/>
  <DemoCard/>
  <DemoCard/>
  </div>
);

export default function Slide1() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => true);
  };


  useEffect(handleChange,[]);

  return (
    <Box
     
    >
     
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}