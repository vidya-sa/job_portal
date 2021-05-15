import React from 'react'
import './About.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import managing from '../../images/managing.png'
import Chief from '../../images/Chief.gif'


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

function About() {
    const classes = useStyles();
    return (
        <div>
            <div className="about_container">
                <h1 className="about_title">About Us</h1>
                <h2 className="heading">Who We Are </h2>
                <div className="container_about">
                    <span>We are a professional membership association committed to serving and elevating the recruitment process outsourcing industry.</span>
                </div>
                <div className="container_about2">
                <Grid item xs={6}>
          <Paper className={classes.paper}>
               <img src={managing} alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{marginLeft : "15px"}}>
            <h3>Managing Director</h3>

            <span>Develop and execute the company’s business strategies in order to attain the goals of the board and shareholders
Provide strategic advice to the board and Chairperson so that they will have accurate view of the market and the company’s future
Prepare and implement comprehensive business plans to facilitate achievement by planning cost-effective operations and market development activities
Ensure company policies and legal guidelines are communicated all the way from the top down in the company and that they are followed at all times
</span>
          </Paper>
        </Grid>
                </div>
                <div className="container_about2">
                <Grid item xs={6}>
          <Paper className={classes.paper} style={{marginLeft : "15px"}}>
            <h3>Executive Officer</h3>

            <span>Develop and execute the company’s business strategies in order to attain the goals of the board and shareholders
Provide strategic advice to the board and Chairperson so that they will have accurate view of the market and the company’s future
Prepare and implement comprehensive business plans to facilitate achievement by planning cost-effective operations and market development activities
Ensure company policies and legal guidelines are communicated all the way from the top down in the company and that they are followed at all times
</span>
          </Paper>
        </Grid>
                <Grid item xs={6}>
          <Paper className={classes.paper}>
               <img src={Chief} alt=""/>
          </Paper>
        </Grid>

                </div>

            </div>
        </div>
    )
}

export default About;
