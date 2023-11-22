/* eslint-disable @next/next/no-img-element */
"use client";
import { Breadcrumb } from "@/components/breadcrumb";
import { menuState } from "@/store/recoilContextProvider";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

const breadcrumb = [{ id: 1, name: "Home", href: "/" }];
const currentPage = { name: "Menu", href: "/menu" };

export default function Menu() {
  const menuList = useRecoilValue(menuState);
  return (
    <>
      <Breadcrumb items={breadcrumb} currentPage={currentPage} />
      <main className="flex flex-1 justify-start items-center flex-col">
        <div className=" px-6 py-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Menu
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Escolha qual categoria você quer experimentar hoje!
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Menu items</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {menuList.map((menuItem) => (
                <Link
                  key={menuItem.id}
                  href="/menu/[idMenu]"
                  as={`/menu/${menuItem.id}`}
                  className="group flex flex-col"
                >
                  <div className="aspect-square w-full h-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={menuItem.imageSrc}
                      alt={menuItem.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-lg  text-white">{menuItem.name}</h3>
                  <p className="mt-1 text-sm font-medium text-white">
                    {menuItem.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
