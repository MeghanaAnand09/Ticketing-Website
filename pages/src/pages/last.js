import im1 from "./visa.png";
import im2 from "./master_card.png";
import im3 from "./Paytm_Logo.png";
function Last() {
  const shoot = () => {
    alert('Payment Successfully Done');
  }
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div class="lst">
    <html>
    <head>
        <title>Checkout</title>
        <link href="wt_1.jpg" rel="icon"></link>
    </head>
    <body>

        <div class="checkout-panel">
            <div class="panel-body">
              <h2 class="title">CHECKOUT</h2>
           
              <div class="payment-method">
                <label for="card" class="method card">
                  <div class="card-logos">
                    <img src={im1} height="50" width="50"/>
                    <img src={im2} height="50" width="50"/>
                  </div>
           
                  <div class="radio-input">
                    <input id="card" type="radio" name="payment"></input>
                    Pay ₹​3400.00 with credit card
                  </div>
                </label>
           
                <label for="Google Pay" class="method paypal">
                  <img src={im3} height="100" width="100"/>
                  <div class="radio-input">
                    <input id="payment" type="radio" name="payment"></input>
                    Pay ₹​3400.00 with Google Pay
                  </div>
                </label>
              </div>
           
              <div class="input-fields">
                <div class="column-1">
                  <label for="cardholder">Cardholder's Name</label>
                  <input type="text" id="cardholder" maxLength="20"/>
           
                  <div class="small-inputs">
                    <div>
                      <label for="date">Valid thru</label>
                      <input type="text" id="date" placeholder="MM / YY" maxLength="4" />
                    </div>
           
                    <div>
                      <label for="verification">CVV / CVC *</label>
                      <input type="password" id="verification" maxLength="3"/>
                    </div>
                  </div>
           
                </div>
                <div class="column-2">
                  <label for="cardnumber">Card Number</label>
                  <input type="password" id="cardnumber" placeholder="1111-2222-3333-4444" maxLength="16"/>
           
                  <span class="info">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              <button class="btn next-btn" id="myBtn" onClick={shoot}>Finish</button>  
              <p id="msg"></p>
            </div>
          </div> 
    </body>
</html>
</div>
  );
}

export default Last;