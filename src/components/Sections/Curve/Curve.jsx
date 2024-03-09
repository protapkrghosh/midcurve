import { Button } from '@/components/ui/button';
import curveImg1 from "@/assets/how to buy 1.png"
import curveImg2 from "@/assets/how to buy 1.png"
import curveImg3 from "@/assets/how to buy 1.png"

const Curve = () => {
  return (
    <div className='mt-[150px] mb-[50px]'>
      <div>
        <p className='text-[60px]'>Join the Curve</p>
        <p>Embrace $MIDCURVE and command your place in the meme coin market. Here, we all ride the curve, but only with $MIDCURVE do you choose your rank within it.</p>
        <Button className="text-[14px] 2xl:text-[16px] rounded-[5px] group cursor-pointer px-5 md:px-7 hidden lg:block">Buy $Midcurve</Button>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Curve;