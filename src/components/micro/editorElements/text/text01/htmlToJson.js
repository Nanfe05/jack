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
            if(att_name !== 'id' && att_name !== 'contenteditable'){
                    object.attributes.push(
                        {
                            [attributes[el].name]:attributes[el].value
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