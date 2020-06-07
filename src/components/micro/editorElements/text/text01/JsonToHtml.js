import React from 'react';

// UNIQUE KEYS
import { v4 as uuidv4 } from 'uuid';

export const JsonToHtml = (element) =>{
   
    let htmlObject = SwitchElement(element);
    return htmlObject;

};


// Function to Eval Childs
const CheckIfObject = (el) =>{
        if(typeof el === 'string'){
            return  el;
        }else if (typeof el === 'object'){
            return SwitchElement(el);
        }
   
}

export const SwitchElement = (element) =>{
    let result;
    let childElements = element.child;
    if(childElements.length > 0){
        result = childElements.map((el) => {
            switch(el.element){
                case 'font':
                    return  <font 
                    style={Attributes(el)}
                    key={uuidv4()}
                    > 
                    
                        {CheckIfObject(el)}
                     </font>
                     
                case 'b':
                    return <b
                    key={uuidv4()}
                    >
                        {CheckIfObject(el)}
                     </b>;
                     
                case 'br':
                    return <br 
                    key={uuidv4()}/>;
                   
                case 'div':   
                default:
                return  <div 
                key={uuidv4()}
                    style={Attributes(el)} 
                    
                    >
                        {CheckIfObject(el)}
                    </div>;
                   

            }
        });
    }
    return result;
};

// Setting Attributes
const Attributes=(element)=>{
    let obj = {};
    if(element.attributes){  
        Object.keys(element.attributes).forEach((el)=>{
            Object.entries(element.attributes[el]).forEach((e)=>{
                obj[e[0]] = e[1];
            });
        });
    }
    console.log({...obj});
    console.log(obj);
    return {...obj};
};
