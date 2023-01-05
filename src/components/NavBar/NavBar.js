import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/orders/new">New Order</Link>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to="/complexion">Complexion</Link>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to="/cheeks">Cheeks</Link>
            &nbsp;&nbsp;  &nbsp;&nbsp;
            <Link to="/eyes">Eyes</Link>
            &nbsp;&nbsp;  &nbsp;&nbsp;
            <Link to="/lips">Lips</Link>
        </nav>
    )
}