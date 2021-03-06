export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  let shippingPrice = null
   const totalPrice = itemsPrice + shippingPrice;
   shippingPrice = totalPrice > 700 ? 60 : 0
  return (
    <aside className='block col-1'>
      <h3>Cart</h3><br/>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className='col-2'>{item.name}</div>
            <div className='col-2'>
              <button onClick={() => onRemove(item)} className='remove'>
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className='add'>
                +
              </button>
            </div>

            <div className='col-2 text-right'>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className='row'>
              <div className='col-2'>Price</div>
              <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
              <div className='col-2'>Service fee</div>
              <div className='col-1 text-right'>
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className='row'>
              <div className='col-2'>
                <strong>Total Price</strong>
              </div>
              <div className='col-1 text-right'>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className='row'>
              <button>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
