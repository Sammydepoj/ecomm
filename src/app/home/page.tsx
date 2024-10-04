"use client";

import Navbar from "@/components/Navbar";
import { SearchOutlined } from "@ant-design/icons";
import CategoriesButton from "@/components/CategoriesButton";
import Image from "next/image";
import GoldPhone from "@/assets/images/HomePageImage/gold-removebg-preview 4.svg";
import BluePhone from "@/assets/images/HomePageImage/iPhone_11_Blue_colour-removebg 1.svg";
import GreenPhone from "@/assets/images/HomePageImage/green-removebg-preview 3.svg";
import BlackPhone from "@/assets/images/HomePageImage/13-removebg-preview 3.svg";
import Team from "@/assets/images/HomePageImage/Frame 2336.svg";
import CustomButton from "@/components/Button";
import { Rate } from "antd";
import UserOne from "@/assets/images/HomePageImage/Rectangle 14.svg";
import UserTwo from "@/assets/images/HomePageImage/Group 80.svg";
import UserThree from "@/assets/images/HomePageImage/Rectangle 141.svg";
import ShoppingCart from "@/assets/images/HomePageImage/shopping_cart.svg";
import Footer from "@/components/Footer";

const HomePage = () => {
  const newProducts = [
    {
      id: 1,
      name: "Apple iPhone 13 Pro Max",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN1,125,000",
      image: GoldPhone,
    },
    {
      id: 2,
      name: "Apple iPhone 13 Pro Max",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN500,000",
      image: BluePhone,
    },
    {
      id: 3,
      name: "Apple iPhone 13 Pro Max",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN800,000",
      image: GreenPhone,
    },
  ];

  const popularProducts = [
    {
      id: 1,
      name: "Apple iPhone 12 Pro Max",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN1,125,000",
      image: BlackPhone,
    },
    {
      id: 2,
      name: "Apple iPhone 13 Pro Max",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN500,000",
      image: GoldPhone,
    },
    {
      id: 3,
      name: "Apple iPhone 12 Mini",
      description: "128GB Gold - Unlocked, latest with advanced features",
      price: "NGN800,000",
      image: BluePhone,
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            backgroundImage: `url('/assets/svgs/iphone.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "728px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            color: "white",
          }}
        >
          <h1 className=" font-bold text-5xl pr-8 pt-56">
            Get The Best Deals On <br /> <br /> Luxury iphone Series
          </h1>
        </div>

        {/* Search Section */}

        <div className=" pl-5 py-20 flex justify-center items-center">
          <input
            className=" border border-[#C4C4C4] rounded-[5px] outline-none pl-10 placeholder:font-normal text-base placeholder:text-[#717171] h-14 w-[700px]"
            type="search"
            placeholder="What are you searching for?"
          />
          <span className=" relative right-[2rem]">
            <SearchOutlined
              style={{
                color: "#717171",
              }}
            />
          </span>
        </div>

        {/* Categories Section */}

        <div className=" ml-6 lg:ml-14 md:ml-10 mb-16">
          <h2 className=" color-[#121212] mb-8 font-bold text-4xl">
            Categories
          </h2>
          <div className=" flex flex-col mr-5 space-y-4 lg:flex-row lg:flex lg:gap-[4rem] lg:space-y-0">
            <CategoriesButton holder="iphone 12 Series" />
            <CategoriesButton holder="iphone 13 Series" />
            <CategoriesButton holder="iphone 14 Series" />
          </div>
        </div>

        {/* New Product Releases Section */}

        <div className=" ml-6 lg:ml-14 md:ml-10 mb-16">
          <h2 className=" color-[#121212] mb-8 font-bold text-4xl">
            New Product Releases
          </h2>
          <div className="grid gap-3 mr-6 md:grid-cols-2 lg:grid-cols-3">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width="200"
                  height="200"
                />
                <p className=" text-[#121212] font-semibold text-base">
                  {product.name}
                </p>
                <p className=" text-[#121212] font-semibold text-base mb-3">
                  {product.description}
                </p>
                <p className=" text-[#121212] font-bold text-3xl">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products Section */}

        <div className=" ml-6 lg:ml-14 md:ml-10 mb-16">
          <h2 className=" color-[#121212] mb-8 font-bold text-4xl">
            Popular Products
          </h2>
          <div className="grid gap-3 mr-6 md:grid-cols-2 lg:grid-cols-3">
            {popularProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-between h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width="200"
                  height="200"
                />
                <p className=" text-[#121212] font-semibold text-base">
                  {product.name}
                </p>
                <p className=" text-[#121212] font-semibold text-base mb-3">
                  {product.description}
                </p>
                <p className=" text-[#121212] font-bold text-3xl">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Teams Section */}

        <div className=" bg-[#002366] text-white lg:px-10 px-5 pt-16 pb-28 lg:pb-40 mb-16">
          <h2 className=" font-bold text-5xl text-center mb-10">
            Meet The Team
          </h2>
          <div className=" lg:flex justify-center items-center">
            <div className="lg:w-[45%] lg:pr-7">
              <Image src={Team} alt="team" width={700} />
            </div>
            <div className="lg:w-[55%] lg:mt-28 mt-20">
              <p className=" font-normal text-justify text-2xl leading-10 lg:leading-[60px]">
                The Pricing Hub team comprises of individuals who are committed
                to providing viable solutions to the problems faced by
                individuals who find it difficult getting the right pricing to
                items sold online.
              </p>
              <div className=" lg:mt-28 mt-20 lg:text-left text-center">
                <CustomButton
                  text="About Us"
                  variant="primary"
                  type="button"
                  fullWidth={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* What Our Users Say Section */}

        <div className=" ml-6 lg:ml-14 md:ml-10 mb-16">
          <h2 className=" color-[#121212] mb-16 font-bold text-4xl">
            What Our Users Say
          </h2>
          <div className=" grid mr-6 lg:mr-14 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className=" p-7 shadow-xl rounded-xl flex flex-col text-center justify-center items-center gap-8">
              <Image src={UserOne} alt="UserOne" />
              <Rate defaultValue={4} />
              <p className=" font-normal text-xl leading-10">
                Ever since I discovered this website, shopping online has been
                easier.
              </p>
            </div>
            <div className=" p-7 shadow-xl rounded-xl flex flex-col text-center justify-center items-center gap-8">
              <Image src={UserTwo} alt="UserOne" />
              <Rate defaultValue={4} />
              <p className=" font-normal text-xl leading-10">
                Shopping has become less of a chore for me with Price Hub.
              </p>
            </div>
            <div className=" p-7 shadow-xl rounded-xl flex flex-col text-center justify-center items-center gap-8">
              <Image src={UserThree} alt="UserOne" />
              <Rate defaultValue={4} />
              <p className=" font-normal text-xl leading-10">
                Ever since I discovered this website, shopping online has been
                easier.
              </p>
            </div>
          </div>
        </div>

        {/* Get Shopping Tips Section */}

        <div className=" lg:flex md:flex justify-center items-center pt-3 pb-4 lg:pb-2 bg-[#D4D4D4]">
          <div className=" lg:flex hidden justify-center lg:justify-end lg:w-1/3">
            <Image src={ShoppingCart} alt="shopping cart" />
          </div>

          <div className=" lg:w-2/3 pl-8 mr-5 md:mr-5">
            <h2 className=" font-normal text-2xl mb-6 lg:mb-9">
              Get smart shopping tips by signing up to our newsletter!
            </h2>
            <input
              type="email"
              className=" w-full lg:w-3/4 p-3 outline-none border border-gray-300 rounded-lg mb-6 placeholder:pl-3"
              placeholder="Your Email Address"
            />
            <br /> <br />
            <div className=" lg:w-2/3 flex justify-center">
              <button
                type="button"
                className="lg:px-28 md:px-28 px-24 py-3 border border-[#C96E2C] rounded-lg text-[#C96E2C]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />

      </div>
    </div>
  );
};

export default HomePage;
