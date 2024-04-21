import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Avatar, Box, Button, CardActionArea, CardActions, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const  Cards= () => {
  return (
    <div  style={{marginTop:"70px", marginLeft:'525px'}} >

<Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB3cb3eTDDgtM4knMc1hJ-7MwTLGL5HOoiw&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Sandwich
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:90
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" ><Link to='/Admin'style={{textDecoration:"none",color:"black"}}>order now
</Link>
           
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      

      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://pixelz.cc/wp-content/uploads/2018/07/hamburgers-uhd-4k-wallpaper.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Burger
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:150
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            order now
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-fish-curry-1823a09.jpg?quality=90&webp=true&resize=300,272"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Fish Moilee
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:500
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            order now
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      

      <Card sx={{ maxWidth: 345 }}style={{paddingTop:"80px"}}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Thalassery Biryani
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:270
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            order now
          </Button>
        </CardActions>
      </Card><br></br><br></br>

      <Card sx={{ maxWidth: 345 }}style={{paddingTop:"80px"}}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/moong-dal-dosa-recipe.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dosa
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            order now
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://static.toiimg.com/photo/imgsize-2271536,msid-78596343/78596343.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Idili
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:12
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order now
          </Button>  
        </CardActions>
      </Card>
      
    </div>
  )
}


export default Cards