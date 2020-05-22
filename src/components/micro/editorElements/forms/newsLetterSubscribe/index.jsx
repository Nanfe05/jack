import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const NewsLetterSubscribe = (props) =>{
    const {id,contents} = props;
    console.log(contents);
    return(<div 
        className={`newsletterForm`}   
        id={id}
        onMouseDown={(e)=>{  
        e.preventDefault();
        let posx1, posx2, posy1,posy2 = 0;
        posx1= e.clientX;
        posy1=e.clientY;


        const element = document.getElementById(id);
        
        // element.classList.add('selected');
        if(element.style.position !== 'absolute'){
            element.style.position= 'absolute';
        }

        document.onmousemove=(e)=>{
            e.preventDefault();
            
            posx2=posx1-e.clientX;
            posy2=posy1-e.clientY;
            posx1=e.clientX;
            posy1=e.clientY;
            element.style.top= (element.offsetTop - posy2)+'px';
            element.style.left= (element.offsetLeft - posx2 )+'px';
        };
        document.onmouseup=(e)=>{
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }}
    >
        <Paper elevation={2} style={{width:'200px'}}>
            <form>
                <h2>{contents.title}</h2>
                <TextField label={`${contents.input_1_label}`}/>
                <TextField label={`${contents.input_2_label}`}/>
                <Button>
                {`${contents.input_submit_label}`}
                </Button>
            </form>
        </Paper>
    </div>);
}

export default NewsLetterSubscribe;