import React from "react";
import Text from "./Text";

const Title = ( { className , children} ) => {
    return(
        <React.Fragment>
            <Text variant={className}> {children} </Text>
        </React.Fragment>
    )
}

export default Title