import React from "react";

function FunctionProps(props){
    return (
        <div>
        <h3>This is a functional component</h3>,
        <h3> Ola! Como vai? {props.name} from {props.place}</h3>
        </div>
    );
}

export default FunctionProps;