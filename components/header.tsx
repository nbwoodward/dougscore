import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [showMobile, setShowMobile] = useState(true);

  const onClickHamburger = () => {
    setShowMobile(!showMobile);
  };

  const onClickMenu = () => {
    setShowMobile(false);
  };

  return (
    <>
      {" "}
      <div id="header">
        <div id="title">
          <Link href="/">Unofficlal Doug Score</Link>
        </div>

        <div id="desktopMenu">
          <div className="menuItem">
            <Link href="/">All Cars</Link>
          </div>
          <div className="menuItem">
            <Link href="/countries">All Countries</Link>
          </div>
          <div className="menuItem">
            <Link href="/makes">All Makes</Link>
          </div>
        </div>

        <div id="mobileHamburger" onClick={onClickHamburger}>
          <RxHamburgerMenu />
        </div>
      </div>
      {showMobile && (
        <div id="mobileMenu">
          <div className="menuItem">
            <Link href="/" onClick={onClickMenu}>
              All Cars
            </Link>
          </div>
          <div className="menuItem">
            <Link href="/countries" onClick={onClickMenu}>
              All Countries
            </Link>
          </div>
          <div className="menuItem">
            <Link href="/makes" onClick={onClickMenu}>
              All Makes
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
