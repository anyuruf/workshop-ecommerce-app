import React, { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useAllCategories, useCurrentUser } from "../../hooks";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { navigation } from "../../config";
import { classNames } from "../../utils";
import { AuthContext } from "react-oauth2-code-pkce";

const Navigation = () => {
  const { categories } = useAllCategories();
  const { data: currentUser } = useCurrentUser();
  const { token, logIn, logOut } = useContext(AuthContext);

  const isAuthenticated = Boolean(token) && currentUser;

  const logOutHandle = (event) => {
    logOut();
  };

  const logInHandle = (event) => {
    logIn();
  };

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-1 lg:hidden">
              <a
                href="/"
                className="p-2 ml-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Search</span>
                <SearchIcon className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <Fragment>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "text-indigo-600"
                                : "text-gray-700 hover:text-gray-800",
                              "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium",
                            )}
                          >
                            {category.name}
                            <span
                              className={classNames(
                                open ? "bg-indigo-600" : "",
                                "absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px",
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 z-10 top-full">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 bg-white shadow-sm top-1/2"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white">
                              <div className="px-8 mx-auto max-w-7xl">
                                <div className="grid grid-cols-2 py-16 gap-y-10 gap-x-8">
                                  <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                    {category.featured.map((item, itemIdx) => (
                                      <div
                                        key={item.name}
                                        className={classNames(
                                          itemIdx === 0
                                            ? "col-span-2 aspect-w-2"
                                            : "",
                                          "group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden",
                                        )}
                                      >
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center group-hover:opacity-75"
                                        />
                                        <div className="flex flex-col justify-end">
                                          <div className="p-4 text-sm bg-white bg-opacity-60">
                                            <a
                                              href={item.href}
                                              className="font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-0.5 text-gray-700 sm:mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="grid grid-cols-3 text-sm text-gray-500 gap-y-10 gap-x-8">
                                    {categories &&
                                      categories.map((category) => (
                                        <div key={category.categoryId}>
                                          <p className="font-medium text-gray-900">
                                            {category.name}
                                          </p>
                                          <ul className="mt-4 space-y-4">
                                            {category.children.map((child) => (
                                              <li
                                                key={child.name}
                                                className="flex"
                                              >
                                                <Popover.Button
                                                  as={Link}
                                                  to={`/categories/${child.categoryId}/${child.name}`}
                                                  className="hover:text-gray-800"
                                                >
                                                  {child.name}
                                                </Popover.Button>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Fragment>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            {/* Logo */}
            <Link to="/" className="flex">
              <span className="sr-only">Astra E-Commerce</span>
              <img className="w-auto h-8" src="/favicon.ico" alt="" />
            </Link>

            <div className="flex items-center justify-end flex-1">
              <a
                href="/"
                className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
              >
                <img
                  src="/images/flag-usa.svg"
                  alt=""
                  className="shrink-0 block w-6 h-auto"
                />
                <span className="block ml-3 text-sm font-medium">USD</span>
                <span className="sr-only">, change currency</span>
              </a>

              {isAuthenticated && (
                <Link
                  to="/user"
                  component="a"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon className="w-6 h-6" aria-hidden="true" />
                </Link>
              )}

              {/* Cart */}
              <div className="flow-root ml-4 lg:ml-6">
                <Link
                  to="/cart"
                  className="flex items-center p-2 mr-4 -m-2 group"
                >
                  <ShoppingBagIcon
                    className="shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
              {isAuthenticated && (
                <>
                  <Link to="/orders">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 mr-4 text-sm font-medium border border-transparent rounded-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span>Orders</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={logOutHandle}
                    className="relative inline-flex items-center px-4 py-2 mr-4 text-sm font-medium border border-transparent rounded-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Logout</span>
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <button
                    type="button"
                    onClick={logInHandle}
                    className="relative inline-flex items-center px-4 py-2 mr-4 text-sm font-medium border border-transparent rounded-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Login</span>
                  </button>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-xs hover:bg-indigo-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span>Signup</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
