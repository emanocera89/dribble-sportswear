import { Row, Col, Carousel } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function ItemDetail({ item, isLoading }) {
    return (
        <div className='product-detail-container pt-5 pb-5'>
            <Row>
                <Col>
                    {isLoading ? <Skeleton height={600} inline /> :
                        <Carousel interval={2000}>
                            {item.detailImgUrl && item.detailImgUrl.map((i, index) => (
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={i}
                                        alt={`${item.nombre} Foto ${index}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    }
                </Col>
                <Col className='product-detail-col'>
                    {isLoading ? <Skeleton height={40} inline /> : <h3 className='product-name'>{item.nombre}</h3>}
                    {isLoading ? <Skeleton height={30} width={200} className="mt-4 mb-4" inline /> :<h4 className='product-price'>$ {item.precio}</h4>}
                    {isLoading ? <Skeleton height={150} className='mb-4' inline /> : <p className='product-description'>{item.descripcion}</p>}
                    {isLoading ? <Skeleton height={20} width={100} className='mb-4' inline /> : <p className='product-stock'>En stock: {item.stock}</p>}
                    {isLoading ? <Skeleton height={60} className='mb-4' inline /> : <ItemCount initial={1} stock={item.stock} /> }

                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail;