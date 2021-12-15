// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const lengthofitems = cartList.length
      let total = 0
      cartList.forEach(eachone => {
        total += eachone.quantity * eachone.price
      })

      return (
        <div className="ordersummary">
          <h1 className="order-summary-heading">
            Order Total:<span className="spanheading">Rs {total}/-</span>
          </h1>
          <p className="order-summary-items">{lengthofitems} Items in cart</p>
          <button type="button" className="order-summary-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
