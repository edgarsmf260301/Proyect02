import { Component } from "react";

const styles = {
    button: {
        backgroundColor: "#0f430f",
        color: "#ffffff",
        padding: "12px 16px",
        borderRadius: "4px",
        cursor: "pointer",
    },
}
class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}


export default Button;