const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/prashantkumar76">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 mx-auto" />
            </a>
            
          </div>

          <div className="social-icon  ">

            <a href="https://www.linkedin.com/in/prashant-kumar-9296041b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " >
            <img src="/assets/linkedin..jpg" alt="linkedin" className="w-1/2 h-1/2 object-center mx-auto" />
            </a>
           
          </div>
          
        </div>
  
        <p className="text-white-500">© 2024 Prashant Kumar. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;