export const HTMLToJSON = (htmlTarget) =>{
 Object.keys(htmlTarget.attributes).forEach(element => {
        console.log(htmlTarget.attributes[element].name);
        console.log(htmlTarget.attributes[element].value);
    });
    console.log('Tag Name: ',htmlTarget.tagName);
};