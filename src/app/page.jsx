import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#262626] p-4 border-b-4 border-black pb-5">
          <div className="flex justify-between px-8">
            <Image
              src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg"
              width={100}
              height={100}
              alt="Envato Market Logo"
            />
            <button className="text-white bg-green-500 p-1 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <nav>
        <div className="bg-black py-5 flex justify-between pl-5 h-[200px]">
          <div>
            <Image
              src={
                "https://gramentheme.com/html/xbuild/assets/img/logo/white-logo.svg"
              }
              width={100}
              height={100}
            />
          </div>
          <div className="text-white">
            <ul className="flex space-x-4 pr-5">
              <li className="flex items-center">
                <Link href="/">Home</Link>
                <IoMdAdd />
              </li>
              <li className="flex items-center">
                <Link href="/aboutus">About US</Link>
              </li>
              <li className="flex items-center">
                <Link href="/pages">Pages</Link>
                <IoMdAdd />
              </li>
              <li className="flex items-center">
                <Link href="/services">Services</Link>
                <IoMdAdd />
              </li>
              <li className="flex items-center">
                <Link href="/projects">Projects</Link>
                <IoMdAdd />
              </li>
              <li className="flex items-center">
                <Link href="/blog">Blog</Link>
                <IoMdAdd />
              </li>
              <li className="flex items-center">Contact US</li>
              <li className="flex items-center">
                <IoSearchOutline />
              </li>
              <button className="bg-orange-400 hover:bg-black p-3">
                GAT A QUOTE
              </button>
              <li className="flex items-center text-orange-500 text-2xl">
                <IoMdMenu />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="w-[1300px] mx-auto">
        <div className="-mt-20 relative ">
          <img
            src="https://gramentheme.com/html/xbuild/assets/img/hero/hero-3.png"
            alt="Hero Image"
          />
          <FaPlayCircle className="absolute top-28 left-20 text-[50px] text-white" />
          <div className="absolute top-48 left-16 text-4xl text-white ">
            <h2>
              CREATE THE BUILDING <br /> YOU WANT HERE
            </h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur
              <br /> adipisicingelit. Error reprehenderit tempore
              <br /> iusto veniam dolorem sed laudantium officiis.
              <br /> Vero, officia asperiores.
            </p>
            <button className="bg-white text-black p-1 mt-5 flex text-[20px] ">
              Learn more
              <FaLongArrowAltRight className="m-3 " />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white ">
        <div className="text-center">
          <h3 className="text-orange-500 text-2xl font-bold flex items-center justify-center space-x-2">
            <FaLongArrowAltLeft />
            <span>WHAT WE OFFER</span>
            <FaLongArrowAltRight />
          </h3>
          <p className="text-black mt-2 text-4xl">Our Services That We Provide</p>
        </div>

        <div className="mt-12 flex justify-center space-x-6 container mx-auto text-black">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className="">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className="">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className=" text-base">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className=" text-base">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      


      <section className="container mx-auto bg-black">
      <div className="relative flex items-center justify-center min-h-screen">
        <img
          src="https://gramentheme.com/html/xbuild/assets/img/about/bg-shape.png"
          alt="Background Shape"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        <div className="relative z-10 flex flex-col md:flex-row max-w-6xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="flex-1 p-8">
            <h2 className="text-orange-500 text-xl font-semibold uppercase mb-2 flex gap-2">
            <FaLongArrowAltLeft />
            <span>About Our Compnay</span>
            <FaLongArrowAltRight />
            </h2>
            <h1 className="text-4xl font-bold mb-6">
              We Offer Quality Under Restraint
            </h1>
            <p className="text-gray-700 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔️</span>
                100% Satisfaction Work
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔️</span>
                Certified Engineer Team
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✔️</span>
                Flexible & Cost Effective
              </li>
            </ul>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
              Explore More
            </button>

            <div className="flex items-center mt-8">
              <img
                src="/image.png"
                alt="CEO Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-900 font-semibold">Shikhon Islam</p>
                <p className="text-gray-500">Xbuild, CEO</p>
              </div>
            </div>
          </div>

          
          <div className="flex-1 relative">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/about/05.jpg"
              alt="Construction Workers"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white ">
        <div className="text-center">
          <h3 className="text-orange-500 flex items-center justify-center space-x-2">
            <FaLongArrowAltLeft />
            <span>OUR COMPLETE PROJECTS</span>
            <FaLongArrowAltRight />
          </h3>
          <p className="text-black mt-2 text-4xl">Our Latest Projects</p>
        </div>

        <div className="mt-12 flex justify-center space-x-6 container mx-auto text-black">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className="">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className="">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className=" text-base">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-orange-400  hover:text-white w-[250px]">
            <img
              src="https://gramentheme.com/html/xbuild/assets/img/service/service-1.png"
              alt="Building Planning"
            />
            <div className="px-6 py-4 text-center ">
              <div className="font-bold text-xl mb-2 ">Building Planning</div>
              <p className=" text-base">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex justify-center mt-4">
                <LuArrowUpRightFromCircle className="text-orange-500 text-2xl  bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-16 bg-gray-50 container mx-auto">
     
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://gramentheme.com/html/xbuild/assets/img/process-shape.png"
          alt="Background Shape"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Section - Steps */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">01</div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">Project Design & Planning</h3>
              <p className="text-gray-500">It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">02</div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">Property Management</h3>
              <p className="text-gray-500">It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">03</div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">Final Assemble & Submit</h3>
              <p className="text-gray-500">It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
        </div>
        {/* Right Section - Title and Image */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">Building The Future's Foundations</h2>
          <p className="text-gray-500 mb-6">Working Process</p>
          <img
            src="https://gramentheme.com/html/xbuild/assets/img/track-2.png"
            alt="Construction Vehicle"
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>


    <section >
      <div className="container mx-auto flex gap-4 py-4">
        <div className=" mb-2 pl-52">
        <h2 className="flex gap-2 text-orange-500">
            <FaLongArrowAltLeft />
            <span>Company Status</span>
            <FaLongArrowAltRight />
            </h2>
            <h3 className="py-3 font-bold ">Our Services meets The<br/> Highest Standards.</h3>
            <p>
            It is a long established fact that a reader will be distracted the readable<br/> content of a page when looking at layout the point of using lorem the is<br/> Ipsum Xbuild less normal
            </p>

           <div className="flex gap-3 text-2xl">
           <p className="py-3  border-r-4  border-indigo-500 ">
            45k+
          <br/>  project Complete

            </p>
            <p className="py-3  border-r-4  border-indigo-500 ">
            45k+
          <br/>  project Complete

            </p>
            <p className="py-3  border-r-4  border-indigo-500 ">
            45k+
          <br/>  project Complete

            </p>
           </div>
           <button className="p-4 bg-orange-400 text-white flex mt-2 gap-2 text-center"><FaLongArrowAltLeft />Learn More<FaLongArrowAltRight /></button>
        </div>
        <div>
<img  className="h-[400px]"src="https://gramentheme.com/html/xbuild/assets/img/about/05.jpg"/>
        </div>
      </div>
    </section>


    <section className="bg-orange-500 container mx-auto text-center w-[1300px]">
  <div className="relative">
    <img src="https://gramentheme.com/html/xbuild/assets/img/testimonial/bg.jpg" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white -mt-72">
      <h3 className=" font-bold flex gap-2"><FaLongArrowAltLeft />TESTIMONIAL<FaLongArrowAltRight /></h3>
      <p className="py-3 text-4xl font-bold">What Our Client Says</p>
    </div>
  </div>
</section>

     
     

  
    </>
  );
}
