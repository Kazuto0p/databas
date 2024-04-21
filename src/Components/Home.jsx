import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions  } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    
    <div style={{ 
      
      backgroundImage: "url('https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg')", // Replace 'https://example.com/background.jpg' with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <br/><br></br><br/><br></br>
      <Card sx={{ maxWidth: 345 }} style={{marginTop:"950px"}}>
        <CardActionArea>
          <Link to={'/Cards'} state={{ textDecoration: 'none', color: 'info' }}>
            <CardMedia
              component="img"
              height="240"
              image="https://i.pinimg.com/originals/2c/b7/b3/2cb7b343c255f4ed802d51a6e4e9db7c.png"
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>MENU</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;


  