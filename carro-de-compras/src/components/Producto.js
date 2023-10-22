import { Component } from'react';
import Button from '././Button';

const styles = {
    producto: {
        border: 'solid 1px #eeeeee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
        width: '30%',
        padding: '10px',
        borderRadius: '5px',
    },
    img: {
        width: '100%',
    },
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar Producto
                </Button>
            </div>
        )
    }
}

export default Producto