const Footer = () => {
  return (
    <>
      <footer className="container mx-auto border-t-2 border-black rounded-t-[50px]">
        {/* Container */}
        <div className="container mx-auto p-10 flex">
          <div className="mr-20">
            <h4 className="text-xl font-bold">Roam</h4>
          </div>
          <div>
            <h5 className="text-lg font-bold">Connect With Me</h5>
            <p>Email me an enquiry</p>
            <p className="font-bold text-lg">nelisa.dludla@outlook.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
