/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { HiHeart, HiMinus, HiOutlinePlus, HiStar } from "react-icons/hi";
import { useParams } from "next/navigation";
import { useRecoilValue } from "recoil";
import { menuState } from "@/store/recoilContextProvider";
import { Breadcrumb } from "@/components/breadcrumb";

/* const product = {
  name: "Feijoada",
  price: "Comida Brasileira",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Feijoada",
      src: "https://img.saborosos.com.br/imagens/feijoada-1.jpg",
      alt: "Feijoada",
    },
    {
      id: 2,
      name: "Feijoada",
      src: "https://www.juliatto.com.br/wp-content/uploads/2022/02/como-preparar-uma-feijoada-deliciosa.jpg",
      alt: "Feijoada",
    },
    {
      id: 3,
      name: "Feijoada",
      src: "https://sindilegis.org.br/wp-content/uploads/2023/06/feijoada-olimpiada-dos-tribunais.png",
      alt: "Feijoada",
    },
    {
      id: 4,
      name: "Feijoada",
      src: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2021/08/feijoada_vegana_zona_sul_lorena_abreu_gastornomia_Carioca.jpg",
      alt: "Feijoada",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};
 */
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Dish() {
  const menuList = useRecoilValue(menuState);
  const { idMenu, idDish } = useParams();
  const rating = 4;
  const menuItem = menuList?.find((item) => item?.id === Number(idMenu));

  const dish = menuItem?.dishes?.find((item) => item?.id === Number(idDish));

  const breadcrumb = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Menu", href: "/menu" },
    { id: 3, name: "Cardápio", href: `/menu/${idMenu}` },
  ];
  const currentPage = { name: "Prato", href: `/menu/${idMenu}/${idDish}` };

  return (
    <div>
      <Breadcrumb items={breadcrumb} currentPage={currentPage} />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {dish?.allImagens.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.imageAlt}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.imageSrc}
                            alt={image.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-blue-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {dish?.allImagens.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              {dish?.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-white">
                {dish?.description}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <HiStar
                      key={rating}
                      className={classNames(
                        rating > rating ? "text-indigo-500" : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{rating} de 5 estrelas</p>
              </div>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {dish?.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open
                                  ? "text-white"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <HiMinus
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlinePlus
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item} className="text-white">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
