"use client";
import React from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );
  //replace space with empty string

  return (
    <div className="search-manufacturer">
      {/* selecting the value from the options and the manufacturer state inside SearchBar component is updated */}
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturer.length === 0 && query != "" ? (
                //if there's no maunfacturer matching the query
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Nothing found.
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    value={manufacturer}
                    className={({ active }) =>
                    //when hoves over the option
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {/* Below is pasted from headless UI Combobox Code */}
                    {({selected, active}) => (
                      <>
                         <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
