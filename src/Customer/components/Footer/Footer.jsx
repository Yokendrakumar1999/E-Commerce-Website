import { Grid, Typography,Link } from '@mui/material'
import React from 'react'


function Footer() {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10' 
        container
        sx={{bgcolor:"black",color:"white",py:3}}
        >
          <Grid item xs={12} sm={6} md={3}>
           <Typography className='pb-5' variant='h5'>Company</Typography>
           <div><button className='pb-5' variant='h6' gutterBottom > About </button>
            </div>
           <div><button className='pb-5' variant='h6' gutterBottom >Blog</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Press</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Jobs</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Partners</button></div>
       
           </Grid>

           <Grid item xs={12} sm={6} md={3}>
           <Typography className='pb-5' variant='h5'>Solutions</Typography>
           <div><button className='pb-5' variant='h6' gutterBottom > Marketing </button>
            </div>
           <div><button className='pb-5' variant='h6' gutterBottom >Anlytics</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Commerce</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Insights</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Supports</button></div>
  
           </Grid>
       
           <Grid item xs={12} sm={6} md={3}>
           <Typography className='pb-5' variant='h5'>Documentation</Typography>
           <div><button className='pb-5' variant='h6' gutterBottom > Guides </button>
            </div>
           <div><button className='pb-5' variant='h6' gutterBottom >API Status</button></div>
           </Grid>
       
           <Grid item xs={12} sm={6} md={3}>
           <Typography className='pb-5' variant='h5'>Legal</Typography>
           <div><button className='pb-5' variant='h6' gutterBottom > Claim </button>
            </div>
           <div><button className='pb-5' variant='h6' gutterBottom >Privacy</button></div>
           <div><button className='pb-5' variant='h6' gutterBottom >Teams</button></div>
         
           </Grid>
          <Grid className='pt-20' item xs={12}>
         <Typography variant='body2' component="p" align="center">&copy; 2024 Yogi.com. All rights reserved.</Typography>
         <Typography variant='body2' component="p" align="center">Made with India</Typography>
         <Typography variant='body2' component="p" align="center">Icons made by{'  '} <Link href="https://master.d1aaqr7ic9jpfe.amplifyapp.com/contact.html" color="inherit" underline="always">Yogi</Link>{' '}
         from {' '}
         <Link href="https://master.d1aaqr7ic9jpfe.amplifyapp.com/index.html" color="inherit" underline="always">Yogi.com</Link>
         </Typography>
          </Grid>
        </Grid>
    </div>
  )
}

export default Footer