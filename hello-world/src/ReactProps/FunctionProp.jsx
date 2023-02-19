import React from "react";

function FunctionProp(props) {
    return (
        <div>
            <h3>This is a functional component</h3>
            <h3>{props.name} from {props.place} You've got the most beautiful diamond eyes I've ever seen in my whole life</h3>
        </div>
    );
}

export default FunctionProp;