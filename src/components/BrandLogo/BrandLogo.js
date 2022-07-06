import Adidas from '../../assets/brands/adidas.svg';
import Jordan from '../../assets/brands/airjordan.svg';
import MitchellAndNess from '../../assets/brands/mitchell_and_ness.svg';
import Nike from '../../assets/brands/nike.svg';


function BrandLogo(props) {
    return (
        <img
            alt={props.brand}
            src={
                {
                    'Nike': Nike,
                    'Adidas': Adidas,
                    'Mitchell & Ness': MitchellAndNess,
                    'Jordan': Jordan
                }[props.brand]
            }
        />
    )
}

export default BrandLogo;