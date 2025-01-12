export default function Footer() {
  return (
    <div className="flex h-full w-[90%] justify-center items-center">
      <div className="flex flex-col w-1/4 h-full">
        <div className="footerTitle">
          <span>Company</span>
        </div>
        <div className="flex flex-col footerLinkBox">
          <span>About Us</span>
          <span>Careers</span>
          <span>Brand Center</span>
          <span>Blog</span>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full">
        <div className="footerTitle">
          <span>Help Center</span>
        </div>
        <div className="flex flex-col footerLinkBox">
          <span>About Us</span>
          <span>Careers</span>
          <span>Brand Center</span>
          <span>Blog</span>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full">
        <div className="footerTitle">
          <span>Legal</span>
        </div>
        <div className="flex flex-col footerLinkBox">
          <span>Privacy Policy</span>
          <span>Licensing</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full">
        <div className="footerTitle">
          <span>Download</span>
        </div>
        <div className="flex flex-col footerLinkBox">
          <span>Android</span>
          <span>iOS</span>
          <span>Windows Store</span>
          <span>MacOS</span>
        </div>
      </div>
    </div>
  );
}
