/* eslint-disable @next/next/no-img-element */
"use client";
import { Breadcrumb } from "@/components/breadcrumb";
import { menuState } from "@/store/recoilContextProvider";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";

export default function MenuItem() {
  const menuList = useRecoilValue(menuState);
  const { idMenu } = useParams();
  const menuItem = menuList?.find((item) => item?.id === Number(idMenu));

  const dishes = menuItem?.dishes;

  const breadcrumb = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Menu", href: "/menu" },
  ];
  const currentPage = { name: "Cardápio", href: `/menu/${idMenu}` };
  return (
    <>
      <Breadcrumb items={breadcrumb} currentPage={currentPage} />
      <main className="flex flex-1 justify-start items-center flex-col">
        <div className=" px-6 py-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {menuItem?.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {menuItem?.description}
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-2xl px-4 py-8 ">
            <h2 className="sr-only">Item menu</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4">
              {dishes &&
                dishes.map((dish) => (
                  <Link
                    key={dish.id}
                    href="/menu/[itemId]/[idDish]"
                    as={`/menu/${idMenu}/${dish.id}`}
                    className="flex flex-col gap-2 bg-slate-500 rounded-md md:flex-row"
                  >
                    <div className="aspect-square w-full h-40 md:w-24 md:h-24 overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={dish.imageSrc}
                        alt={dish.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="flex-1 p-2">
                      <h3 className="mt-4 text-lg  text-white">{dish.name}</h3>
                      <p className="mt-1 text-sm font-medium text-white">
                        {dish.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
