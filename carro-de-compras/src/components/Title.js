import { Component } from "react";

const styles = {
    title: {
        marginBottom: '30px',
        color: '#0f430f',
        fontWeight:  '700',
        fontSize: '2rem',
    }
}

class Title extends Component {
render() {
    return (
        <h1 style={styles.title}>Tienda</h1>
    )
  }
}

export default Title;