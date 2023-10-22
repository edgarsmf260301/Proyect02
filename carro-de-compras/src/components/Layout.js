import { Component } from'react';

const styles = {
    layout: {
        backgroundColor: '#ffffff',
        color: '#0A283E',
        alingItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '45px',
    },
    container: {
        with: '1200px',
        //backgroundColor: '#e3e4e5',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
            <div style={styles.container}>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default Layout;