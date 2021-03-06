import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 

class LandingPage extends Component{
    render(){
      return(
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown'
                    alt="avatar"
                    className="avatar-image"
                    />
                    
                    <div className="banner-text">
                        <h1>Raymond Farria</h1>
                        <h2>Software Developer</h2>

                    <hr/>

                    <p>Java | HTML/CSS | JavaScript | React | MySQL | Spring/Spring Boot | NodeJS | OAuth2 </p>

                        <div className="social-links">

                            {/* LinkedIn Icon */}    
                            <a href="https://www.linkedin.com/in/raymond-farria/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* GitHub Icon */}    
                            <a href="https://github.com/raymondfarria" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            
                            {/* Stack Overflow Icon */}    
                            <a href="https://stackoverflow.com/users/10307094/raymond-farria?tab=profile" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                </Cell>
            </Grid>      
          </div>
      )  
    }
}

export default LandingPage;