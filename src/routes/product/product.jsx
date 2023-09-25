import * as PropTypes from "prop-types";
import {Component} from "react";

class Product extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="product">
                <img src={product.image_url} alt={product.name}/>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
            </div>
        );
    }
}

Product.propTypes = {product: PropTypes.any}

export default Product;
