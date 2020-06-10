import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';

const LandingPagePreview = (props) =>{
    return(
        <div className='landing_preview_group'>
            <h3>{props.name && props.name.length > 20 ? `${props.name.substring(1,20)}...`:props.name}</h3>
            <Paper className='landingpage_preview' elevation={2} onClick={props.action}>
                <div className='lpp_image1'>
                    <div className='lpp_form'></div>
                </div>
                <div className='lpp_text'>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </div>
                <div className='lpp_image2'>
                </div>
            </Paper>
            <h4>
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    View as Client
                </a>
            </h4>
        </div>
    );
}

export default LandingPagePreview;