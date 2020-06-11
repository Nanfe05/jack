export const HTMLToJSON = (htmlTarget) =>{

    let object = LoopThroughtChilds(htmlTarget);

    return object;
    // console.log(JSON.stringify(object));
    
};

const LoopThroughtChilds= (element) =>{

    let object = {
        element:'',
        attributes:[],
        child:[]
    };
    // Setting Html Element
    if(element.tagName){
        object.element = element.tagName.toLowerCase();
    }
    // Setting Atrributes
    if(element.attributes){
        let attributes = element.attributes;
        Object.keys(attributes).forEach((el,i)=>{
            // Prevent this values that are assigned in each interaction
            let att_name =attributes[el].name;
            if(att_name !== 'id' && att_name !== 'contenteditable' && att_name !== 'class'){
                let att_name_react;
                switch(att_name){
                    // case 'align':
                    //     att_name_react = 'textAlign';
                    //     break;
                    // case 'size':
                    //     att_name_react = 'fontSize';
                    //     break; 
                    // case 'face':
                    //     att_name_react = 'fontFamily';
                    //     break;    
                    default:
                        att_name_react = attributes[el].name;
                }
                // console.log(`${att_name_react}:${attributes[el].value}`);
                object.attributes.push(
                    {
                        // [attributes[el].name]:attributes[el].value
                        [att_name_react]:attributes[el].value
                    }
                );
            }
        }
        );
    }
    // Setting its content

    // Setting Childs
    if(element.childNodes){
        Object.keys(element.childNodes).forEach((el)=>{
                if(!element.childNodes[el].data){
                    object.child.push(LoopThroughtChilds(element.childNodes[el]));
                }else{
                    object.child.push(element.childNodes[el].data);
                }
        })

    }

    
    return object;


};