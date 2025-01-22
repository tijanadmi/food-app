import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from "./components/Header";
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

function App() {
  console.log("Environment Variables:", process.env);
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
     </UserProgressContextProvider>
  );
}

export default App
