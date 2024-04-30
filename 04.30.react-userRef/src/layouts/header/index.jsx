import { FaPhoneAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div id={styles["header-top"]}>
        <div className="container">
          <div className={styles["header-top"]}>
            <a href="#">
              <FaPhoneAlt />
              +748 383 23 14
            </a>
            <nav>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div id={styles["header-middle"]}>
        <div className="container">
          <div className={styles["header-middle"]}>
            <h1 className={styles.logo}>ChicCharry</h1>
            <div className={styles.search}>
              <input
                type="TEXT"
                placeholder="Search all product"
                name=""
                id=""
              />

              <CiSearch className={styles["search-icon"]} />
            </div>

            <div className={styles["buttons"]}>
              <button>
                <CiUser />
                Sign Up
              </button>
              <button>
                {" "}
                <CiHeart />
                Wish List
              </button>
              <button>
                <FaShoppingBasket />
                Basket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id={styles["header-bottom"]}>
        <div className="container">
          <div className={styles["header-bottom"]}>
            <nav>
              <ul>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
                <li>
                  <a href="">Evening bags</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
