/* eslint-disable @next/next/no-img-element */
import React from "react";

interface BreadcrumbProps {
  items: { id: number; name: string; href: string }[];
  currentPage: { name: string; href: string };
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  currentPage,
}) => {
  return (
    <header className="flex p-4">
      <img src="/head.png" alt="Logo" className="w-10"/>
      <nav
        aria-label="Breadcrumb"
        className="flex max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" className="flex items-center space-x-4">
          {items.map((breadcrumb: any) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-4 text-sm font-medium text-white hover:text-gray-300"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-white hover:text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <p className="cursor-default font-medium text-white opacity-50">
              {currentPage.name}
            </p>
          </li>
        </ol>
      </nav>
    </header>
  );
};
