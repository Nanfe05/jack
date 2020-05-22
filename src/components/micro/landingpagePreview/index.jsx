import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';

const LandingPagePreview = () =>{
    return(
        <Paper className='landingpage_preview' elevation={2}>
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
    );
}

export default LandingPagePreview;