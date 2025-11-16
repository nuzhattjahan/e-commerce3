import React, { useState } from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1 },
    { id: 2, name: "Gamepad", price: 350, quantity: 1 },
  ]);

  const handleQuantityChange = (id, value) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, Number(value)) }
        : item
    );
    setCartItems(updated);
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCartItems(updated);
  };

  const getSubtotal = (price, qty) => price * qty;
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.mainContent}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className={styles.inputBox}>
                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                        />
                        <div className={styles.arrows}>
                          <button onClick={() => increaseQty(item.id)}>▲</button>
                          <button onClick={() => decreaseQty(item.id)}>▼</button>
                        </div>
                      </div>
                    </td>
                    <td>${getSubtotal(item.price, item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.button}>
              <button className={styles.whitebtn}>Return to Shop</button>
              <button className={styles.whitebtn}>Update Cart</button>
            </div>

            
          </div>
        </div>
      </div>


      <div className={`row py-4 justify-content-center`}>
        <div className="col-6">
            <div className={` ${styles.coupon}`}>
            <input type="text" name="coupon" placeholder="Coupon Code" />
            <button className={`btn p-2 px-4 ${styles.btn}`}>Apply Coupon</button>
            </div>
        </div>
        <div className="col-6">
          <div className={` ${styles.cartTotal}`}>
            <table>
                <h3>Cart Total</h3>
                <tr>
                  <th>SubTotal:</th>
                  <td>${getTotal()}</td>
                </tr>
                <tr>
                  <th>Shipping:</th>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>total:</th>
                  <td>${getTotal()}</td>
                </tr>
              
            </table>
            <br />
            <button className={`btn p-2 px-4 ${styles.btn}`}>Procees to check out</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;











// import React, { useState } from "react";
// import React from "react";

// import styles from "./Cart.module.css";
// const Cart = () => {
//     const [quantity, setQuantity] = useState(1);
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className={styles.mainContent}>
//               <table className={styles.table}>
//                 <tr>
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                 </tr>

//                 <tr>
//                   <td>LCD Monitor</td>
//                   <td>650$</td>
//                   <td>
//                     <div className={styles.inputBox}>
//                  <input
//                     type="number"
//                     min="1"
//                     max="99"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                 />
//                 </div>
//                   </td>
//                   <td>650$</td>
//                 </tr>

//                 <tr>
//                   <td>Gamepad</td>
//                   <td>350$</td>
//                   <td>1</td>
//                   <td>350$</td>
//                 </tr>
//               </table>
//               <div className={styles.button}>
//                 <button className={styles.whitebtn}>Return to Shop</button>
//                 <button className={styles.whitebtn}>Update Cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
