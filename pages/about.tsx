import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";


export default function Explore() {
    return (
        <div className="isolate bg-white">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#9089FC"></stop>
                            <stop offset="1" stop-color="#FF80B5"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <Nav />
                </div>
            </div>
            <h2 className="flex justify-center mb-6 mt-24 mt- text-4xl font-bold text-black">
                About Cherryt
            </h2>
            <div className="flex justify-around mt-36">
                <div className="aboutbox">
                    <AboutCard
                        name={"So what is Cherryt?"}
                        description={"Cherryt is a web3 crowdfunding platform that uses the power of blockchain technology to enable the financing of projects, campaigns and everything else that needs funding. In return, the donators will benefit from governance and voting rights and receive an NFT as a prove of donation. Cherryt gives full transparancy to all transactions and donations in order to always keep track of where funds come from and where they go."}
                        img={"/charity.jpeg"}
                        goal={"test"}
                    />
                </div>
                <div className="aboutbox">
                    <AboutCard
                        name={"How is Cherryt different?"}
                        description={"There are many donation, crowdfunding and investing platforms out there, but there is no platform that offers the flexibility to enable all varieties of funding in one platform, depending on the needs of the project. Cherryt gives project founders the possibility to set the parameters that determine whether, and if yes, how much donators and investors will benefit from a success of the project."}
                        img={"/charity_2.jpg"}
                        goal={"test"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
