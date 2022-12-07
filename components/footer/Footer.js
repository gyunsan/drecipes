import Link from "next/link";
import React from "react";
import Logo from "../layout/logo";

export default function Footer() {
  return (
    <div className="bg-primary  ">
      <div className="p-5 grid md:grid-cols-4  sm:grid-cols-2">
        <div className="col-span-1 my-14">
          <Logo />
        </div>
        <div className="col-span-1 my-14   justify-center align-middle">
          <h3 className=" md:text-xl font-bold text-white tracking-wide">
            Term
          </h3>
          <p className="text-white hover:underline cursor-pointer">
            <a>Privacy Policy</a>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <a>Terms and Conditions</a>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <a>Cookies Policy</a>
          </p>
        </div>
        <div className="col-span-1 my-14">
          <h3 className=" md:text-xl font-bold text-white tracking-wide">
            Quick links
          </h3>
          <p className="text-white hover:underline cursor-pointer">
            <a>About</a>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <a>Brands</a>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <a>Help</a>
          </p>
        </div>
        <div className="col-span-1 my-14">
          <h3 className=" md:text-xl font-bold text-white tracking-wide">
            Menu
          </h3>
          <p className="text-white hover:underline cursor-pointer">
            <Link href="/recipes">Recipes</Link>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <Link href="/blog">Blog</Link>
          </p>
          <p className="text-white hover:underline cursor-pointer">
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="container grid md:grid-cols-4">
        <div className="col-span-1"></div>
        <div className="md:col-span-2 mb-3">
          <p className="text-white hover:underline cursor-pointer pl-4">
            <a>All rights reserved {new Date().getFullYear()} @ drecipes</a>
          </p>
        </div>
      </div>
    </div>
  );
}
