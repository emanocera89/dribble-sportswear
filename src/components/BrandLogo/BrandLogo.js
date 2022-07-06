function BrandLogo(props) {
    return (
        <img
            alt={props.brand}
            src={
                {
                    'Nike': 'https://www.grosbasket.es/media/catalog/category/nike_1_1.svg',
                    'Adidas': 'https://www.grosbasket.es/media/catalog/category/adidas_1_1.svg',
                    'Mitchell & Ness': 'https://www.grosbasket.es/media/catalog/category/mitchellNess_1_1.svg',
                    'Jordan': 'https://www.grosbasket.es/media/catalog/category/jordanbrand_2_1.svg'
                }[props.brand]
            }
        />
    )
}

export default BrandLogo;