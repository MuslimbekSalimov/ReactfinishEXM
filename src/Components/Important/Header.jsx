import "./Header.scss";
import Search from "./img/search.svg"
import Make from "./img/makevid.png"
import Apps from "./img/app.png"
import Not from "./img/notification.png"
import pro from "./img/Userpic.png"
import Logo from "./img/Logo_Black@3x.png"
import { Link } from "react-router-dom";
// import { button } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
      <div className="header__info">
           <div className="need__div">
            <Link className="header__logo" href="Logo" to={"home"}>
                <img src={Logo} alt="Logo" width={106} height={25}/>
             </Link>
             <form className="form">
                  <input className="header__input" type="search"  placeholder="Search"/>
                  <img className="search" src={Search} alt="Search" width={19} height={19}/>
              </form>

              <select >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <select >
            <option value="uz">Light</option>
            <option value="ru">Dark</option>
            {/* <option value="en">EN</option> */}
          </select>
           </div>

           <div className="menu__div">

                    <button className="menu__create--video">
                        <img src={Make} alt="MakeVide"  width={27} height={20}/>
                    </button>

                    <button className="menu__create--video">
                        <img src={Apps} alt="Menu1" width={21} height={21}/>
                    </button>

                    <button className="menu__create--video">
                        <img src={Not} alt="Notification" width={21} height={21}/>
                    </button>

                    <button className="menu__create--video">
                      <Link to={"channel"}>
                        <img src={pro} alt="Profile" width={40} height={40}/>
                        </Link>
                    </button>
                </div> 

      </div>
    </header>
  );
}
