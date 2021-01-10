import Header from  '../Header/Header';
import Info from './InfoSection/Info';
import Products from './ProductsSection/Products';
const Main = ({data}) => {
    return ( 
        <div className="main">
            <Header />
            <div className="container">
                <Info />
                <Products />
            </div>
        </div>
     );
}
 
export default Main;