const BackGroundChooser = (layout,breakpoint)=>{

    let backgroundtype= layout[breakpoint].background?layout[breakpoint].background:layout.md.background;

    let color1 = layout[breakpoint].background_color_1?layout[breakpoint].background_color_1:layout.md.background_color_1;

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

    let backgroundtype= layout[breakpoint].background?layout[breakpoint].background:layout.md.background;

    let color1 = layout[breakpoint].background_color_1?layout[breakpoint].background_color_1:layout.md.background_color_1;
    let color2 = layout[breakpoint].background_color_2?layout[breakpoint].background_color_2:layout.md.background_color_2;
    let backgrounStyle = layout[breakpoint].b_gradient_style?layout[breakpoint].b_gradient_style:layout.md.b_gradient_style;

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
        height:`${layout[breakpoint].height?layout[breakpoint].height:layout.md.height}px`,
        width:`${layout[breakpoint].width?layout[breakpoint].width:layout.md.width}px`,
        borderStyle:`${layout[breakpoint].border?layout[breakpoint].border:layout.md.border}`,
        borderWidth:`${layout[breakpoint].border_width?layout[breakpoint].border_width:layout.md.border_width}px`,
        borderColor:`${layout[breakpoint].border_color?layout[breakpoint].border_color:layout.md.border_color}`,
        backgroundColor:`${BackGroundChooser(layout,breakpoint)}`,
        backgroundImage:`${BackGroundImageChooser(layout,breakpoint)}`,
        boxSizing:'border-box',
        padding:`${layout[breakpoint].padding?layout[breakpoint].padding:layout.md.padding}px`,
        position:`${layout[breakpoint].position?layout[breakpoint].position:layout.md.position}`,
        left:`${layout[breakpoint].position_left?layout[breakpoint].position_left:layout.md.position_left}px`,
        top:`${layout[breakpoint].position_top?layout[breakpoint].position_top:layout.md.position_top}px`,
        transform:`rotate(${layout[breakpoint].rotation?layout[breakpoint].rotation:layout.md.rotation}deg) 
            scale(${layout[breakpoint].scale_x?layout[breakpoint].scale_x:layout.md.scale_x},
            ${layout[breakpoint].scale_y?layout[breakpoint].scale_y:layout.md.scale_y})
            `,
        zIndex:`${id === editorSelected ? 100 :
            layout[breakpoint].z_index?layout[breakpoint].z_index:layout.md.z_index}`
    };


};