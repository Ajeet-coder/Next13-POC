
import { NextResponse } from 'next/server';
 
export default async function searchedImages(value:string) {
  const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=DVe0CRwrg_lOFKqv7LUJi4W3G8-kq3TUfwbaO7dFwFg&per_page=50&query=${value}&orientation=squarish`,{
    //cache:'no-cache'
    //next: { revalidate: 60 } 
  });
  if(!res.ok) throw new Error("Failed to fetch image data ")
  
 
  return res.json();
}