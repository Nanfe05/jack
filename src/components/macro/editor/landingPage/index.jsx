import React from 'react';

const EditorLandingPage = () =>{
    return(<div className='editor'>
        <div className='tools'>
            <div className='tool'>
                <h2>Form</h2>
            </div>
            <div className='tool'>
                <h2>Text</h2>
            </div>
            <div className='tool'>
                <h2>BackGround</h2>
            </div>
            <div className='tool'>
                <h2>Image</h2>
            </div>
        </div>
        <div className='canvas'>
            <div className='canvas_header'>
                 <form></form>
                 <div>
                     <h2>Break Points:</h2>
                     <p>small</p>
                     <p>medium</p>
                     <p>large</p>
                 </div>
            </div>
            <div className='canvas_canvas'>
            </div>
            <div className='canvas_footer'>
                <p>Discard</p>
                <p>Save</p>
            </div>
        </div>
    </div>);
}

export default EditorLandingPage;