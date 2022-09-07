import { useSelector } from 'react-redux'
import './Main.scss'
import Things from './Things';

function Main() {
    const money = useSelector(state => state.spend.money);
    const items = useSelector(state => state.spend.things);
    const bought = useSelector(state => state.spend.bought);
    const spent = useSelector(state => state.spend.totalSpent);

    const itemTotal = (element) => {
        return Number(element.price) * Number(element.piece);
    }

    return (
        <div className='main'>
            <div className="header-div">
                <h1 className='header'>SPEND BILL GATES' MONEY</h1>
            </div>
            <div className="money-header-div">
                <h2 className='money-header'>${money}</h2>
            </div>
            <div className="things">
                {
                    items.map(item =>
                        <Things item={item} key={item.name} />
                    )
                }
            </div>
            {
                bought !== [] &&
                <div className='receipt'>
                    <h2>Receipt</h2>
                    <div className='receipt-elements'>{
                        bought.map(element => (
                            <div className='receipt-element' key={element.name}>
                                <p className='element-name'>{element.name}</p>
                                <p className='element-piece'>X{element.piece}</p>
                                <p className='element-total'>${itemTotal(element)}</p>
                            </div>
                        ))
                    }</div>
                    <hr></hr>
                    <div className="total">
                        <p className='total-text'>Total</p>
                        <p className='amount'>${spent}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main