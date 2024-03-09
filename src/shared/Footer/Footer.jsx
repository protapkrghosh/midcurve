import img from "@/assets/line.png"

const Footer = () => {
  return (
    <div>
      <img src={img} alt="Image" />
      <div className='max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-16 sm:px-2 px-4 mt-7 mb-12'>
        <p className='text-black text-center text-[14px] 2xl:text-[16px] xl:w-[91%] 2xl:w-[84%] mx-auto'>$MIDCURVE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmad. the coin is completely useless and for entertainment purposes only.</p>
      </div>
    </div>
  );
};

export default Footer;
