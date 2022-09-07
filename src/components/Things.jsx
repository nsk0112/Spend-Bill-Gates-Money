import { useDispatch } from 'react-redux'
import { spendMoney, getMoney } from '../redux/spendSlice';
import './Things.scss';

function Things({ item }) {
    // const money = useSelector(state => state.spend.money);
    const dispatch = useDispatch();

    const handleBuyButton = (item) => {
        dispatch(spendMoney(item));
    }

    const handleSellButton = (item) => {
        dispatch(getMoney(item));
    }

    return (
        <div className='item'>
            <div className="image-div">
                <img src={item.image} alt={item.name} className='image' />
            </div>
            <p className='item-name'>{item.name}</p>
            <p className='item-cost'>${item.price}</p>
            <div className="buy-sell">
                {
                    item.isBuyActive ?
                        <button onClick={() => handleBuyButton(item)} className='buy item-button'>Buy</button>
                        :
                        <button onClick={() => handleBuyButton(item)} className='disabled item-button' disabled>Buy</button>
                }

                <p className='number'>{item.piece}</p>

                {
                    item.isSellActive ?
                        <button onClick={() => handleSellButton(item)} className='sell item-button'>Sell</button>
                        :
                        <button onClick={() => handleSellButton(item)} className='disabled item-button' disabled>Sell</button>

                }

            </div>
        </div>
    )
}

export default Things