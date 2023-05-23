import { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";

export default function Header() {
  const [showMobile, setShowMobile] = useState(true);
  const router = useRouter();

  // When the route changes, hide the mobile menu
  useEffect(() => {
    setShowMobile(false);
  }, [router.asPath]);

  const onClickHamburger = () => {
    setShowMobile(!showMobile);
  };

  return (
    <>
      <div id="headerContainer">
        <div id="header">
          <div id="title">
            <Link href="/">Unofficial Doug Score</Link>
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
              <Link href="/">All Cars</Link>
            </div>
            <div className="menuItem">
              <Link href="/countries">All Countries</Link>
            </div>
            <div className="menuItem">
              <Link href="/makes">All Makes</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
