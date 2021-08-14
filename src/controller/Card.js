import React from 'react';
// import Course from './Course';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@material-ui/core/Card';
// import { Card, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import image from '../media/html-image.jpg'





const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));






const Cards = (props) => {
  const {course} = props;
  const classes = useStyles();
  
  return (
          <React.Fragment>
            <CssBaseline/>

            <AppBar position="relative">


            </AppBar>
            <main>
            <Container className={classes.cardGrid} maxWidth="md">
            
            
            {
              
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}  >
                    {/* <img src={image}/> */}
                    <img src={course.imageURL} alt="course Images" width= "300px" height= "250px"/>
  
                    
                    
                    </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {course.cname}
                    </Typography>
                    <Typography>
                    {course.courseDetails}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary" >
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
                
              
            }

                    
                 
                  </Container>
                  </main>
                
                  </React.Fragment>
  )
}

export default Cards;








//---------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// // import Course from './Course';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Card, Button } from 'react-bootstrap';




// const Card = (props) => {
//   const {course} = props;
//   return (
//           <div class="row">
//             <div class="col-sm-5">
//             <div class="card" styles=" width: 18rem;">

//                 <img class="card-img-top" src="" alt="NO PHOTO"  />
                
//                 <div div class="card-body" >
//                     {/* <span >{course.cid}</span> */}
//                     <h5 class="card-title">{course.cname}</h5>
//                     <p class="card-text">{course.courseDetails}</p>
//                     {/* <p >{items.overview}</p> */}
//                     {/* <a href="https://www.themoviedb.org/movie/" className="movie-container__more">MORE</a> */}

                    


//                     </div>
//                   </div>
//                 </div>
//             </div>
    
//   )
// }

// export default Card;





