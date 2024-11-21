import React, { useContext } from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {BiCart} from "react-icons/bi";
import LowerHeader  from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from '../../Utility/firebase'

const Header = () => {
  const [{user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length); // Corrected typo
const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={36} />
          </div>
          {/* other section */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/usa-waving-flag-pattern-background-260nw-2480140689.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & List</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/Orders">
              <p>returns</p>
              <span>& Ordes</span>
            </Link>
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;

