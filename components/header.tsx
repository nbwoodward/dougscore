import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div id="title">
        <Link href="/">Unofficlal Doug Score</Link>
      </div>
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
  );
}
