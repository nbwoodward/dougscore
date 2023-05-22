export default function Header() {
  return (
    <div className="header">
      <div id="title">
        <a href="/">Unofficlal Doug Score</a>
      </div>
      <div className="menuItem">
        <a href="/">All Cars</a>
      </div>
      <div className="menuItem">
        <a href="/countries">All Countries</a>
      </div>
      <div className="menuItem">
        <a href="/makes">All Makes</a>
      </div>
    </div>
  );
}
