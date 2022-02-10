import React from "react";
import Pic from "./product/Pic";
import Text from "./product/Text";

const Frame = ()=> {
    return (
        <div className="frame">
            <Pic />
            <Text />
            0.041 ETH
            3 days left
            Creation of Jules Wyvern
        </div>
    );
}

export default Frame;