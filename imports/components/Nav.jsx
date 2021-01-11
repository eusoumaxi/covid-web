import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const Nav = ({ setChanged, country }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const search = (e) => {
    Router.push({ pathname: "/country", query: { search: e.target.value } });
    history.pushState({}, null, "/country?search=" + e.target.value);
    setChanged((prev) => ({ ...prev, searching: e.target.value }));
  };
  return (
    <div className="covid-header">
      <nav className="navbar navbar-expand-lg">
        <Link href="/">
          <div className="navbar-brand">
            <img
              className="menuCountry"
              src={`https://cdn.countryflags.com/thumbs/${
                country.toLowerCase() === "us"
                  ? "united-states-of-america"
                  : country.toLowerCase()
              }/flag-button-square-250.png`}
              alt={`${country.toLowerCase()}`}
            />
            <p style={{ marginLeft: "35%" }}>COVID-19 </p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpenSearch(!isOpenSearch)}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
        <div
          className={
            isOpenSearch
              ? "navbar-collapse collapse show "
              : "collapse navbar-collapse"
          }
        >
          <form
            className="form-inline my-2 my-lg-0 search"
            noValidate
            autoComplete="off"
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar por paises"
              aria-label="search"
              name="search"
              onChange={search}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
