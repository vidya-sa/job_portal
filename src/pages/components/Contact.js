import React from 'react'
import './Contact.css'
import './Services.css'
import jobsListbackground from '../../images/jobListbackground.jpg'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';

function Contact() {
    return (
        <div className="container">
               <div className="contact_title">
               <h1 className="contact_us_name"> CONTACT <b>US</b></h1> 
               <li className="contact_caption">
                   <RoomIcon className="icon_color"/>22 Innovative Area, San Francisco, Bay Area, CA 94043, USA</li>
                   <div className="Space">
                   <li className="contact_caption">
                   <PhoneIcon className="icon_color"/>+81 720 2212</li>
                   <li className="contact_caption">
                   <MailIcon className="icon_color"/>office@visohr.com</li>
                   <li className="contact_caption">
                   <LanguageIcon className="icon_color"/>www.visohr.com</li>
                   </div>

                   <div className="width">
                       
                   <div class="form-group has-error has-danger">
                            <input type="text" class="form-control-input" id="cname" required=""/>
                            <label class="label-control" for="cname">Name</label>
                            <div class="help-block with-errors"><ul class="list-unstyled"></ul></div>
                        </div>
                        <div class="form-group has-error has-danger">
                            <input type="email" class="form-control-input" id="cemail" required=""/>
                            <label class="label-control" for="cemail">Email</label>
                            <div class="help-block with-errors"><ul class="list-unstyled"></ul></div>
                        </div>
                        <div class="form-group has-error has-danger">
                            <textarea class="form-control-textarea" id="cmessage" required=""></textarea>
                            <label class="label-control" for="cmessage">Your message</label>
                            <div class="help-block with-errors"><ul class="list-unstyled"></ul></div>
                        </div>
                        <div class="form-group checkbox has-error has-danger">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required=""/>I have read and agree to Viso's <a class="underline" href="privacy-policy.html">Privacy Policy</a> and <a class="underline" href="terms-conditions.html">Terms Conditions</a> 
                            <div class="help-block with-errors"><ul class="list-unstyled"><li>Please check this box if you want to proceed.</li></ul></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button disabled">SUBMIT</button>
                        </div>
                        <div class="form-message">
                            <div id="cmsgSubmit" class="h3 text-center">Please fill all fields!</div>
                        </div>
                    
                   </div>

            </div>
           <img src={jobsListbackground} alt=""/> 
        </div>
    )
}

export default Contact
