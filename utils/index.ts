import { CarProps, FilterProps } from "@/types";

//fetch car data from Cars by API-Ninjas
export async function fetchCars(filters: FilterProps) :Promise<CarProps[] |[]| undefined>{

  const { manufacturer, model, year, fuel, limit } = filters

  const headers = {
    'X-RapidAPI-Key': '3ad0dd5eebmshafc7ff01f80c4e1p1d4e0djsn5d4c75f4e048',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`, {
    headers: headers,
  });

  const result = await response.json();
  // taking JSOn as input and parsing it to produce a JS object

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('http://cdn.imagin.studio/getimage');

  const {make, year, model} = car

  // The searchParams read-only property of the URL interface returns a URLSearchParams object allowing access to the GET decoded query arguments contained in the URL.
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  
  return `${url}`;
}