import React from 'react';

export const JsonToHtml = (element) =>{

    // console.log(element);
    let htmlObject = LoopThroughtObjects(element);
    console.log(htmlObject);
    return htmlObject;

};

export const LoopThroughtObjects = (element) =>{

    switch(element.element){
        case 'font':
            return <font style={Attributes(element)}>{
                Childs(element)
             }</font>
        case 'b':
            return <b>{
                Childs(element)
             }</b>;
        case 'br':
            return <br></br>;
        case 'div':   
        default:
            return <div style={Attributes(element)} >{
               Childs(element)
            }</div>;
    }
};

// Setting Attributes
const Attributes=(element)=>{
    if(element.Attributes){  
        return {...element.Attributes};
    }
    return {};
};
// Function to Eval Childs
const Childs = (child) =>{
    let childElements = child.child;
    childElements.forEach((element,i) => {
    let result;
        if(typeof element === 'string'){
            result =  element;
        }else if (typeof element === 'object'){
            result =  LoopThroughtObjects(element);
        }
    return result;
    });
}