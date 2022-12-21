import "./style.css";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
const KEY =
  "pk_test_51MHUkAHzcKwhFdazOSTGHyj2VsuCTLUDDbwXmRmjSzM6QbgPrM2IQ38zNeugCDZTz76CE1WK9qCtvP6SUx2Nxeje00HQPJhLP8";

const Pay = () => {
  const [stripToken, setToken] = useState(null);
  const onToken = (token) => {
    setToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/v1/checkout/payment",
          {
            tokenId: stripToken.id,
            amount:2000
          }
        );
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
      } catch (error) {}
    };
    stripToken && makeRequest()
  }, [stripToken]);

  return (
    <div className="container">
      <div className="wrappar">
        <StripeCheckout
          name="sar shop" // the pop-in header title
          description="Your Total is $20" // the pop-in header subtitle
          image="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600" // the pop-in header image (default none)
          amount={2000} // cents
          currency="USD"
          stripeKey={KEY}
          // Note: Enabling either address option will give the user the ability to
          // fill out both. Addresses are sent as a second parameter in the token callback.
          shippingAddress
          billingAddress
          // Note: enabling both zipCode checks and billing or shipping address will
          // cause zipCheck to be pulled from billing address (set to shipping if none provided).
          token={onToken} // submit callback
        >
          <button>Pay Now</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default Pay;
