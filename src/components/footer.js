//logo
import lightLogo from "./images/10_5logo_white.png";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-custom-black text-neutral-content">
        <aside>
          <img
            src={lightLogo}
            alt="10and5 logo"
            className="h-12 sm:h-16 w-auto"
          />
          <p className="font-span md:text-5xl md:mt-12">
            HOSPITALITY-DRIVEN
            <br />
            CREATIVELY CURIOUS
          </p>
        </aside>
        <nav className="md:text-2xl md:mt-24 font-napzer">
          <a
            href="https://www.linkedin.com/company/10and5creative/"
            className="md:mt-5"
          >
            LINKEDIN
          </a>
          <p>CONTACT US</p>
          <a href="mailto:hello@10and5creative.com" className="underline">hello@10and5creative.com</a>
        </nav>
      </footer>
    </>
  );
}
