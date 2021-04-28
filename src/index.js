import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Rectangle extends React.Component {
    render() {
        return (
            <div className="rectangle">
                <div className="rectangle-title">Upload your image</div>
                <div className="file-format-helper">File should be Jpeg, Png,...</div>
                <DragDropRectangle/>
            </div>
        )
    }
}

function DragDropRectangle() {
    return (
        <div className="drag-drop-rectangle">
            <svg className='rectangle-vector'>
                <svg>
                    <polygon className="plo"/>
                </svg>
            </svg>
        </div>
    )
}

ReactDOM.render(
    <Rectangle/>,
    document.getElementById("root")
);