const BackGroundChooser = (layout,breakpoint)=>{

    let backgroundtype= GetNearestValue(layout,breakpoint,'background');

    let color1 =  GetNearestValue(layout,breakpoint,'background_color_1');

    let result;

    switch(backgroundtype){
        case "color":
            result =  `${color1}`;
            break;
        case "gradient":
            result =  `none`;
            break;
        default:
            result = 'rgba(0, 0, 0,0)';
            break;
    }

    return result;
}

const BackGroundImageChooser = (layout,breakpoint)=>{

    let backgroundtype=  GetNearestValue(layout,breakpoint,'background');

    let color1 =  GetNearestValue(layout,breakpoint,'background_color_1');
    let color2 =  GetNearestValue(layout,breakpoint,'background_color_2');
    let backgrounStyle = GetNearestValue(layout,breakpoint,'b_gradient_style');

    let result;

    switch(backgroundtype){
        case "color":
            result =  `none`;
            break;
        case "gradient":
            switch(backgrounStyle){
                case 'radial':
                    result = `radial-gradient(${color1},${color2})`;
                    break;
                default:
                    result = `linear-gradient(${color1},${color2})`;
                    break;
            }
            break;
        default:
            result = 'none';
            break;
    }
   
    return result;
    
}

export const DynamicStyles = (layout,breakpoint,id,editorSelected) =>{

    return {
        height:`${GetNearestValue(layout,breakpoint,'height')}px`,
        width:`${GetNearestValue(layout,breakpoint,'width')}px`,
        borderStyle:`${GetNearestValue(layout,breakpoint,'border')}`,
        borderWidth:`${GetNearestValue(layout,breakpoint,'border_width')}px`,
        borderColor:`${GetNearestValue(layout,breakpoint,'border_color')}`,
        backgroundColor:`${BackGroundChooser(layout,breakpoint)}`,
        backgroundImage:`${BackGroundImageChooser(layout,breakpoint)}`,
        boxSizing:'border-box',
        padding:`${GetNearestValue(layout,breakpoint,'padding')}px`,
        position:`${GetNearestValue(layout,breakpoint,'position')}`,
        left:`${GetNearestValue(layout,breakpoint,'position_left')}%`,
        top:`${GetNearestValue(layout,breakpoint,'position_top')}%`,
        transform:`rotate(${GetNearestValue(layout,breakpoint,'rotation')}deg) 
            scale(${GetNearestValue(layout,breakpoint,'scale_x')},
            ${GetNearestValue(layout,breakpoint,'scale_y')})
            `,
        zIndex:`${id === editorSelected ? 100 :
            GetNearestValue(layout,breakpoint,'z_index')}`
    };


};

// Help to Search nearest valuew relative to the breakpoint if it does not exist
// Needed because some one can start composing using any breakpoint, not necessarily md
export const GetNearestValue = (layout,breakpoint,attribute) =>{
    let searchSchema = {
        xs:['xs','sm','md','lg','xl'],
        sm:['sm','xs','md','lg','xl'],
        md:['md','sm','lg','xs','xl'],
        lg:['lg','md','xl','sm','xs'],
        xl:['xl','lg','md','sm','xs']
    };

    // Search Value
    if(layout[breakpoint] && layout[breakpoint][attribute]){
        return layout[breakpoint][attribute];
    }else{
    // Loop throught Search Schema to find nearest value
        let value = null;
        searchSchema[breakpoint].forEach((bk)=>{
            if(layout[bk] && layout[bk][attribute] && !value){
                value=layout[bk][attribute];
            }
        });
        return value;
    }
};