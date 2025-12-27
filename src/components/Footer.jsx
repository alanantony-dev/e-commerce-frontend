import { APP_STORE_IMG_URL, PLAY_STORE_IMG_URL } from "../utils/app.constants";

const Footer=()=>{
    return (
        <div className="bg-black text-white p-20 md:px-36 mt-16 flex flex-col">
            <span className="text-lg font-medium">ShopEase</span>
            <span className="mt-8 hover:underline cursor-pointer">
                Visit Help Center
            </span>
            <div className="flex justify-between gap-2 mt-8 flex-wrap">
                <div>
                    <span className="text-lg font-medium">Company</span>
                    <div className="flex flex-col gap-3 mt-2">
                    
                        <span className="text-sm">About us</span>
                        <span className="text-sm">Our offering</span>
                        <span className="text-sm">Newsroom</span>
                        <span className="text-sm">Investors</span>
                    </div>
                    
                </div>
                <div>
                    <span className="text-lg font-medium">Quick Links</span>
                    <div className="flex flex-col gap-3 mt-2">
                    
                        <span className="text-sm">Deals</span>
                        <span className="text-sm">Home</span>
                        <span className="text-sm">Shop</span>
                        <span className="text-sm">Best Sellers</span>
                    </div>
                    
                </div>
                <div>
                    <span className="text-lg font-medium">CustomerSupport</span>
                    <div className="flex flex-col gap-3 mt-2">
                    
                        <span className="text-sm">FAQs</span>
                        <span className="text-sm">Shipping and Delivery</span>
                        <span className="text-sm">Returns and Refunds</span>
                        <span className="text-sm">Privacy Policy</span>
                    </div>
                    
                </div>
                <div>
                    <span className="text-lg font-medium">Follow Us</span>
                    <div className="flex flex-col gap-3 mt-2">
                    
                        <span className="text-sm">Instagram</span>
                        <span className="text-sm">Facebook</span>
                        <span className="text-sm">Twitter/X</span>
                        <span className="text-sm">Linkedin</span>
                    </div>
                    
                </div>
                <div>
                    <span className="text-lg font-medium">Company</span>
                    <div className="flex flex-col gap-3 mt-2">
                    
                        <span className="text-sm">About us</span>
                        <span className="text-sm">Our offering</span>
                        <span className="text-sm">Newsroom</span>
                        <span className="text-sm">Investors</span>
                    </div>
                    
                </div>
            </div>

            <div className="flex items-center justify-start gap-2">
                <img src={PLAY_STORE_IMG_URL} alt="Playstore img" className="w-[7.8rem] h-[7.8rem] cursor-pointer" />
                <img src={APP_STORE_IMG_URL} alt="Appstore img" className="w-[7.8rem] h-[7.8rem] cursor-pointer"/>
            </div>
        </div>
    )
}
export default Footer;