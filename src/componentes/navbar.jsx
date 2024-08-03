import './navbar.css';
import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWidget.jsx';


export default function NavBar() {
    return (
        <>
            <nav className="bar">

                <ButtonComponent name="Home" color="red" />
                <ButtonComponent name="Product" color="yellow" />
                <ButtonComponent name="Contact" color="blue" />
                <CartWidget>5</CartWidget>
                
               
                

            </nav>


        </>

    );

}