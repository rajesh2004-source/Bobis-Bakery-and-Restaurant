// import React from 'react';
// import { Link } from 'react-router-dom'
// import { TiShoppingCart } from 'react-icons/ti'
// import { useAuth } from '../../context/auth';
// import toast from 'react-hot-toast';
// import SearchInput from '../form/SearchInput'
// import useCategory from '../../hooks/useCategory';
// import { useCart } from '../../context/cart';
// import { Badge } from 'antd';


// const Header = () => {

//     const [auth, setAuth] = useAuth(" ");
//     const categories = useCategory("");
//     const [cart] = useCart();


//     const handlelogout = () => {
//         setAuth({
//             ...auth, user: null, token: ""
//         })
//         localStorage.removeItem('auth');
//         toast.success("Logout Successfully");
//     }

    // return (
    //     <>
    //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //             <div className="container-fluid">
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon" />
    //                 </button>
    //                 <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
    //                     <Link to="/" className="navbar-brand ">
    //                         <TiShoppingCart /> Bobi's Bakery</Link>
    //                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
    //                         <SearchInput />
    //                         <li className="nav-item">
    //                             <Link to="/" className="nav-link ">Home</Link>
    //                         </li>

    //                         <li className="nav-item dropdown">
    //                             <Link className="nav-link dropdown-toggle" to={'/categories'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                                 Categories
    //                             </Link>
    //                             <>
    //                                 <ul className="dropdown-menu" >
    //                                     <li>
    //                                         <Link className="dropdown-item" to={`/categories`} >All Categories</Link>
    //                                     </li>
    //                                     {categories && categories?.map((ca) => (

    //                                         <li>
    //                                             <Link className="dropdown-item" to={`/category/${ca.slug}`} >{ca.name}</Link></li>
    //                                     ))} </ul>

    //                             </>

    //                         </li >
    //                         {
    //                             !auth.user ? (<>
    //                                 <li className="nav-item">
    //                                     <Link to="/register" className="nav-link" >register</Link>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <Link to="/login" className="nav-link" >login</Link>
    //                                 </li>
    //                             </>) : (<>

    //                                 <li className="nav-item dropdown">
    //                                     <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                                         {auth?.user?.name}
    //                                     </Link>
    //                                     <ul className="dropdown-menu">
    //                                         <li><Link className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link></li>
    //                                         <li><Link to="/login" onClick={handlelogout} className="dropdown-item" >logout</Link></li>
    //                                     </ul>
    //                                 </li>

    //                             </>)
    //                         }
    //                         <li className="nav-item">

    //                             <Link to="/cart" className="nav-link" > <Badge count={cart.length} showZero> <h6>CART</h6> </Badge></Link>

    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>

    //     </>

    // )


    // return (
    //     <>
    //         <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3e1e00', padding: '10px' }}>
    //             <div className="container-fluid">
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
    //                 </button>
    //                 <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

    //                     <Link to="/" className="navbar-brand" style={{ color: '#f8d568', fontSize: '24px', fontWeight: 'bold', fontFamily: 'cursive' }}>
                        
                           
    //                         Bobi's Bakery
    //                     </Link>
    //                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //                         <SearchInput />
    //                         <li className="nav-item">
    //                             <Link to="/" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Home</Link>
    //                         </li>
    //                         <li className="nav-item dropdown">
    //                             <Link className="nav-link dropdown-toggle" to={'/categories'} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#f8d568', fontWeight: 'bold' }}>
    //                                 Categories
    //                             </Link>
    //                             <ul className="dropdown-menu" style={{ color: '#f8d568',backgroundColor: '#3e1e00', fontWeight: 'bold' }}>
    //                                 <li><Link className="dropdown-item" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' ,fontWeight: 'bold' }} to="/categories">All Categories</Link></li>
    //                                 {categories && categories?.map((ca) => (
    //                                     <li key={ca.slug}><Link className="dropdown-item" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' ,fontWeight: 'bold' }} to={`/category/${ca.slug}`}>{ca.name}</Link></li>
    //                                 ))}
    //                             </ul>
    //                         </li>
    //                         {!auth.user ? (
    //                             <>
    //                                 <li className="nav-item">
    //                                     <Link to="/register" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Register</Link>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <Link to="/login" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Login</Link>
    //                                 </li>
    //                             </>
    //                         ) : (
    //                             <li className="nav-item dropdown">
    //                                 <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' }}>
    //                                     {auth?.user?.name}
    //                                 </Link>
    //                                 <ul className="dropdown-menu" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' }}>
    //                                     <li><Link className="dropdown-item" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' }} to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link></li>
    //                                     <li><Link to="/login" onClick={handlelogout}  style={{ color: '#f8d568',  backgroundColor: '#3e1e00' }} className="dropdown-item">Logout</Link></li>
    //                                 </ul>
    //                             </li>
    //                         )}
    //                         <li className="nav-item">
    //                             <Link to="/cart" className="nav-link" style={{  color: '#f8d568', fontWeight: 'bold'  }}>
    //                                 <Badge count={cart.length} showZero style={{  color: '#f8d568', fontWeight: 'bold'  }} >
    //                                     <h6 style={{  color: '#f8d568', fontWeight: 'bold'  }}>CART</h6>
    //                                 </Badge>
    //                             </Link>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //     </>
    // );

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg" style={{ padding: '10px' }}>
//                 <div className="container-fluid">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

//                         <Link to="/" className="navbar-brand" style={{ color: '#f8d568', fontSize: '24px', fontWeight: 'bold', fontFamily: 'cursive' }}>
                        
                           
//                             Bobi's Bakery
//                         </Link>
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <SearchInput />
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Home</Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" to={'/categories'} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#f8d568', fontWeight: 'bold' }}>
//                                     Categories
//                                 </Link>
//                                 <ul className="dropdown-menu" style={{ color: '#f8d568', fontWeight: 'bold' }}>
//                                     <li><Link className="dropdown-item" style={{ color: '#f8d568',  fontWeight: 'bold' }} to="/categories">All Categories</Link></li>
//                                     {categories && categories?.map((ca) => (
//                                         <li key={ca.slug}><Link className="dropdown-item" style={{ color: '#f8d568' ,fontWeight: 'bold' }} to={`/category/${ca.slug}`}>{ca.name}</Link></li>
//                                     ))}
//                                 </ul>
//                             </li>
//                             {!auth.user ? (
//                                 <>
//                                     <li className="nav-item">
//                                         <Link to="/register" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Register</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to="/login" className="nav-link" style={{ color: '#f8d568', fontWeight: 'bold' }}>Login</Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <li className="nav-item dropdown">
//                                     <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#f8d568',  backgroundColor: '#3e1e00' }}>
//                                         {auth?.user?.name}
//                                     </Link>
//                                     <ul className="dropdown-menu" style={{ color: '#f8d568',  }}>
//                                         <li><Link className="dropdown-item" style={{ color: '#f8d568',   }} to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link></li>
//                                         <li><Link to="/login" onClick={handlelogout}  style={{ color: '#f8d568',  }} className="dropdown-item">Logout</Link></li>
//                                     </ul>
//                                 </li>
//                             )}
//                             <li className="nav-item">
//                                 <Link to="/cart" className="nav-link" style={{  color: '#f8d568', fontWeight: 'bold'  }}>
//                                     <Badge count={cart.length} showZero style={{  color: '#f8d568', fontWeight: 'bold'  }} >
//                                         <h6 style={{  color: '#f8d568', fontWeight: 'bold'  }}>CART</h6>
//                                     </Badge>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { TiShoppingCart } from 'react-icons/ti';
// import { useAuth } from '../../context/auth';
// import toast from 'react-hot-toast';
// import SearchInput from '../form/SearchInput';
// import useCategory from '../../hooks/useCategory';
// import { useCart } from '../../context/cart';
// import { Badge } from 'antd';
// import headerImage from './header.png'; // Import image if stored in src/assets

// const Header = () => {
//     const [auth, setAuth] = useAuth();
//     const categories = useCategory();
//     const [cart] = useCart();

//     const handlelogout = () => {
//         setAuth({ ...auth, user: null, token: "" });
//         localStorage.removeItem('auth');
//         toast.success("Logout Successfully");
//     };

//     // Inline styles for the header
//     const headerStyle = {
//         backgroundImage: `url(${headerImage})`, 
//         backgroundSize: '100%   	',       // Ensures the image covers the whole area
//     //    backgroundPosition: 'center',   // Centers the image
//         backgroundRepeat: 'repeat',  // Prevents repeating
//         minHeight: '100px',            // Increased height (Adjust as needed)
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '100%',
      
        
//     };
    

//     const linkStyle = {
//         color: '#f8d568',
//         fontWeight: 'bold',
//         textDecoration: 'none',
//         fontSize: '18px'
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg" style={headerStyle}>
//                 <div className="container-fluid">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    

//                         <Link to="/" className="navbar-brand" style={{ ...linkStyle, fontSize: '24px', fontFamily: 'cursive' }}>
//                                Bobi's Bakery 
//                         </Link>
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <SearchInput />
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" to={'/categories'} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={linkStyle}>
//                                     Categories
//                                 </Link>
//                                 <ul className="dropdown-menu">
//                                     <li><Link className="dropdown-item" to="/categories" style={linkStyle}>All Categories</Link></li>
//                                     {categories && categories.map((ca) => (
//                                         <li key={ca.slug}><Link className="dropdown-item" to={`/category/${ca.slug}`} style={linkStyle}>{ca.name}</Link></li>
//                                     ))}
//                                 </ul>
//                             </li>
//                             {!auth.user ? (
//                                 <>
//                                     <li className="nav-item">
//                                         <Link to="/register" className="nav-link" style={linkStyle}>Register</Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to="/login" className="nav-link" style={linkStyle}>Login</Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <li className="nav-item dropdown">
//                                     <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={linkStyle}>
//                                         {auth?.user?.name}
//                                     </Link>
//                                     <ul className="dropdown-menu">
//                                         <li><Link className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} style={linkStyle}>Dashboard</Link></li>
//                                         <li><Link to="/login" onClick={handlelogout} className="dropdown-item" style={linkStyle}>Logout</Link></li>
//                                     </ul>
//                                 </li>
//                             )}
//                             <li className="nav-item">
//                                 <Link to="/cart" className="nav-link" style={linkStyle}>
//                                     <Badge count={cart.length} showZero>
//                                         <TiShoppingCart size={24} />
//                                     </Badge>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { TiShoppingCart } from 'react-icons/ti';
// import { FaSearch, FaHeart, FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
// import { useAuth } from '../../context/auth';
// import toast from 'react-hot-toast';
// import SearchInput from '../form/SearchInput';
// import useCategory from '../../hooks/useCategory';
// import { useCart } from '../../context/cart';
// import { Badge, Modal } from 'antd';
// import logo from './logoo.png';
// import './Header.css';

// const Header = () => {
//     const [auth, setAuth] = useAuth();
//     const categories = useCategory();
//     const [cart] = useCart();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [likedProducts, setLikedProducts] = useState([]);
//     const [searchModalOpen, setSearchModalOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
//         setLikedProducts(storedLikes);
//     }, []);

//     const handleLogout = () => {
//         setAuth({ ...auth, user: null, token: "" });
//         localStorage.removeItem('auth');
//         toast.success("Logged out successfully");
//         navigate('/');
//     };

//     return (
//         <header className="header-container" style={{ background: '#fffcf2' }}>
//             <div className="header-content">
//                 {/* Logo */}
//                 <div className="logo-container">
//                     <Link to="/">
//                         <img src={logo} alt="Bobi's Bakery" className="logo" />
//                     </Link>
//                     <h2 className="brand-name">Bobi's Bakery</h2>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="nav-menu d-flex align-items-center">
//                     <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
//                     <Link to="/categories" className={`nav-item ${location.pathname === '/categories' ? 'active' : ''}`}>CATEGORIES</Link>

//                     {/* Auth links */}
//                     {!auth.user ? (
//                         <>
//                             <Link to="/register" className={`nav-item ${location.pathname === '/register' ? 'active' : ''}`}>REGISTER</Link>
//                             <Link to="/login" className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>LOGIN</Link>
//                         </>
//                     ) : (
//                         <div className="nav-item dropdown">
//                             <Link
//                                 to="#"
//                                 className="nav-link dropdown-toggle d-flex align-items-center"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 <FaUser className="icon me-1" /> {auth.user.name}
//                             </Link>
//                             <ul className="dropdown-menu dropdown-menu-end">
//                                 <li>
//                                     <Link
//                                         className="dropdown-item"
//                                         to={`/dashboard/${auth.user.role === 1 ? 'admin' : 'user'}`}
//                                     >
//                                         <FaTachometerAlt className="me-2" />
//                                         Dashboard
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <button
//                                         onClick={handleLogout}
//                                         className="dropdown-item logout-btn"
//                                     >
//                                         <FaSignOutAlt className="me-2" />
//                                         Logout
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}

//                     {/* Search Icon */}
//                     <FaSearch className="icon search-icon ms-3" onClick={() => setSearchModalOpen(true)} />

//                     {/* Cart */}
//                     <Link to="/cart" className={`nav-item cart-icon ${location.pathname === '/cart' ? 'active' : ''}`}>
//                         <Badge count={cart.length} showZero>
//                             <TiShoppingCart size={24} />
//                         </Badge>
//                     </Link>

//                     {/* Likes */}
//                     <Link to="/liked" className={`nav-item ${location.pathname === '/liked' ? 'active' : ''}`}>
//                         <Badge count={likedProducts.length} showZero>
//                             <FaHeart className="icon liked-icon" />
//                         </Badge>
//                     </Link>
//                 </nav>
//             </div>

//             {/* Search Modal */}
//             <Modal
//                 title="Search Products"
//                 open={searchModalOpen}
//                 onCancel={() => setSearchModalOpen(false)}
//                 footer={null}
//             >
//                 <SearchInput query={searchQuery} />
//             </Modal>
//         </header>
//     );
// };

// export default Header;
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { FaSearch, FaHeart, FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import SearchInput from '../form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { useLiked } from '../../context/likes';
import { Badge, Modal } from 'antd';
import logo from './logoo.png';
import './Header.css';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const { liked } = useLiked();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: '' });
    localStorage.removeItem('auth');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="header-container" style={{ background: '#fffcf2' }}>
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Bobi's Bakery" className="logo" />
          </Link>
          <h2 className="brand-name">Bobi's Bakery</h2>
        </div>

        <nav className="nav-menu d-flex align-items-center">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
          <Link to="/categories" className={`nav-item ${location.pathname === '/categories' ? 'active' : ''}`}>CATEGORIES</Link>

          {!auth.user ? (
            <>
              <Link to="/register" className={`nav-item ${location.pathname === '/register' ? 'active' : ''}`}>REGISTER</Link>
              <Link to="/login" className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>LOGIN</Link>
            </>
          ) : (
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle d-flex align-items-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUser className="icon me-1" /> {auth.user.name}
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to={`/dashboard/${auth.user.role === 1 ? 'admin' : 'user'}`}>
                    <FaTachometerAlt className="me-2" /> Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="dropdown-item logout-btn">
                    <FaSignOutAlt className="me-2" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          <FaSearch className="icon search-icon ms-3" onClick={() => setSearchModalOpen(true)} />

          <Link to="/cart" className={`nav-item cart-icon ${location.pathname === '/cart' ? 'active' : ''}`}>
            <Badge count={cart.length} showZero>
              <TiShoppingCart size={24} />
            </Badge>
          </Link>

          <Link to="/liked" className={`nav-item ${location.pathname === '/liked' ? 'active' : ''}`}>
            <Badge count={liked?.length || 0} showZero>
              <FaHeart className="icon liked-icon" />
            </Badge>
          </Link>
        </nav>
      </div>

      <Modal
        title="Search Products"
        open={searchModalOpen}
        onCancel={() => setSearchModalOpen(false)}
        footer={null}
      >
        <SearchInput query={searchQuery} setQuery={setSearchQuery} />
      </Modal>
    </header>
  );
};

export default Header;