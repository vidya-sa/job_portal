import React from 'react'
import "./Services.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, 
  } from 'reactstrap';
  import serviceIcon from '../../images/servicesIcon.svg'
  import serviceIcon2 from '../../images/servicesIcon2.svg'
  import serviceIcon3 from '../../images/servicesIcon3.svg'
  import serviceIcon4 from '../../images/servicesIcon4.svg'
  import serviceIcon5 from '../../images/servicesIcon5.svg'
  import serviceIcon6 from '../../images/servicesIcon6.svg'
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Services() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="service_tag">
               <h1 className="service_title"><b>HR</b> SERVICES</h1> 
               <p className="service_caption">Our experience in human resources enables us to provide high quality and timely HR services for companies of all sizes</p>
            </div>

            <div className="service_container">
        <div className={classes.root}>
      <Grid container spacing={5} className="grid_spacing" >
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card>
        <CardImg  src={serviceIcon} alt="Card image cap" className="icon_image" />
        <CardBody>
          <CardTitle className="card_title" color="black" tag="h2">Recruiting Services</CardTitle>
          <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
        </CardBody>
      </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card>
        <CardImg  src={serviceIcon2} alt="Card image cap" className="icon_image" />
        <CardBody>
          <CardTitle className="card_title" tag="h2">Head Hunting</CardTitle>
          <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
        </CardBody>
      </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Card>
        <CardImg  src={serviceIcon3} alt="Card image cap" className="icon_image" />
        <CardBody>
          <CardTitle className="card_title"  tag="h2">Candidate Evaluation</CardTitle>
          <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
        </CardBody>
      </Card>
          </Paper>
        </Grid>
       
      </Grid>
      <Grid container spacing={5} className="grid_spacing" >
       
       <Grid item xs={3}>
         <Paper className={classes.paper}>
         <Card>
       <CardImg  src={serviceIcon4} alt="Card image cap" className="icon_image" />
       <CardBody>
         <CardTitle className="card_title" tag="h2">Selection Interviews</CardTitle>
         <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
       </CardBody>
     </Card>
         </Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={classes.paper}>
         <Card>
       <CardImg  src={serviceIcon5} alt="Card image cap" className="icon_image" />
       <CardBody>
         <CardTitle className="card_title" tag="h2">Employees Rental</CardTitle>
         <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
       </CardBody>
     </Card>
         </Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={classes.paper}>
         <Card>
       <CardImg  src={serviceIcon6} alt="Card image cap" className="icon_image" />
       <CardBody>
         <CardTitle className="card_title" tag="h2">Personnel Relocation</CardTitle>
         <CardText>Use our skills to find the best candidates for your open positions. We'll do our best to find the right people for your business.</CardText>
       </CardBody>
     </Card>
         </Paper>
       </Grid>
      
     </Grid>
    </div>
        </div>
        </div>
        
    )
}

export default Services
