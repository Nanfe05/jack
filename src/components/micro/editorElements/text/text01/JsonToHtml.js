// import React from 'react';

// UNIQUE KEYS
// import { v4 as uuidv4 } from 'uuid';

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

// Setting Attributes
const Attributes=(element)=>{
    let obj = '';
    if(element.attributes){  
        Object.keys(element.attributes).forEach((el)=>{
            Object.entries(element.attributes[el]).forEach((e)=>{
                obj += ` ${e[0]}=${e[1]} `;
            });
        });
    }
    return obj;
};


export const SwitchElement = (element) =>{
    let result= '';
    let childElements = element.child;
    if(childElements.length > 0){
        childElements.forEach((el) => {
            switch(el.element){
                case 'font':
                    result +=  `<font 
                    ${Attributes(el)}
                    > 
                        ${CheckIfObject(el)}
                     </font>`;
                    break;
                case 'i':
                    result +=   `<i>
                        ${CheckIfObject(el)}
                        </i>`;
                        break;
                case 'ol':
                    result +=   `<ol>
                        ${CheckIfObject(el)}
                        </ol>`;
                        break;
                case 'ul':
                    result +=   `<ul>
                        ${CheckIfObject(el)}
                        </ul>`;
                        break;
                case 'li':
                    result +=   `<li>
                        ${CheckIfObject(el)}
                        </li>`;
                        break;
                case 'u':
                    result +=   `<u>
                        ${CheckIfObject(el)}
                        </u>`;
                        break;
                case 'b':
                    result +=   `<b>
                        ${CheckIfObject(el)}
                     </b>`;
                     break;
                case 'br':
                    result +=  `<br/>`;
                    break;
                case 'div':   
                    result +=    `<div 
                    ${Attributes(el)}        
                    >
                            ${CheckIfObject(el)}
                        </div>`;
                        break;
                default:
                    result +=   `<span
                    ${Attributes(el)}>
                         ${CheckIfObject(el)}
                    </span>`;
                    break;

            }
        });
    }
    return result;
};


// // Function to Eval Childs
// const CheckIfObject = (el) =>{
//     if(typeof el === 'string'){
//         return  el;
//     }else if (typeof el === 'object'){
//         return SwitchElement(el);
//     }

// }

// // Setting Attributes
// const Attributes=(element)=>{
// let obj = {};
// if(element.attributes){  
//     Object.keys(element.attributes).forEach((el)=>{
//         Object.entries(element.attributes[el]).forEach((e)=>{
//             obj[e[0]] = e[1];
//         });
//     });
// }

// return {...obj};
// };


// export const SwitchElement = (element) =>{
//     let result;
//     let childElements = element.child;
//     if(childElements.length > 0){
//         result = childElements.map((el) => {
//             switch(el.element){
//                 case 'font':
//                     return  <font 
//                     style={Attributes(el)}
//                     key={uuidv4()}
//                     > 
                    
//                         {CheckIfObject(el)}
//                      </font>
                     
//                 case 'b':
//                     return <b
//                     key={uuidv4()}
//                     >
//                         {CheckIfObject(el)}
//                      </b>;
                     
//                 case 'br':
//                     return <br 
//                     key={uuidv4()}/>;
                   
//                 case 'div':   
//                 return  <div 
//                 key={uuidv4()}
//                     style={Attributes(el)} 
                    
//                     >
//                         {CheckIfObject(el)}
//                     </div>;
//                 default:
//                     return <span
//                     key={uuidv4()}
//                     style={Attributes(el)} 
                    
//                     >
//                          {CheckIfObject(el)}
//                     </span>

//             }
//         });
//     }
//     return result;
// };

