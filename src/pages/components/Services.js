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
  import executive from '../../images/executive.jpeg'
  

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


            <div className="service_grid">
            <Grid item xs={6}>
          <Paper className={classes.paper}>
               <img src={executive} alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper} style={{marginLeft : "15px"}}>
            <h3>Executive Search</h3>
            <p className="executive_para">
            Our executive recruiting consultants possess the expertise and contacts to best support our search. We draw on our 
  high-level professional networks, industry knowledge and internal research resources to identify the right people.

  Executive Search ensures a quality outcome by targeting and contacting every potential candidate, not just those 
  seeking new roles, resulting in candidates of higher caliber. We represent you professionally to candidates; the whole
  process ensuring confidentiality, time bound efficiency and cost effectiveness.
            </p>
          </Paper>
        </Grid>
            </div>
            <div className="service_grid" style={{marginTop:"15px"}} >
           
        <Grid item xs={5}>
          <Paper className={classes.paper} style={{marginLeft : "20px"}}>
            <h3>Executive Search</h3>
            <p className="executive_para">
            Our executive recruiting consultants possess the expertise and contacts to best support our search. We draw on our 
  high-level professional networks, industry knowledge and internal research resources to identify the right people.

  Executive Search ensures a quality outcome by targeting and contacting every potential candidate, not just those 
  seeking new roles, resulting in candidates of higher caliber. We represent you professionally to candidates; the whole
  process ensuring confidentiality, time bound efficiency and cost effectiveness.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
               <img src={executive} alt=""/>
          </Paper>
        </Grid>
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
          <CardText className="title_text">If you need a couple of people for short-term projects we can provide them to you as daily paid employees. They'll get the job done
</CardText>
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
          <CardText className="title_text" >A good team leader or manager can rise your business to new heights. Hire us to find the right person for your manager position
</CardText>
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
