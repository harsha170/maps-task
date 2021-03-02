import React from "react"
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Header = () => {

    const history = useHistory()
    history.push("/")


return(
    <div>
        <Button variant="success">Home</Button>
    </div>
)
}

export default Header