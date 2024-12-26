import GreenHeader from '@/components/GreenHeader';
import React from 'react';
import Shop from '@/components/Shop';
import ShopLogo from '@/components/ShopLogo';
import ShopHero1 from '@/components/ShopHero1';
import ShopFilterbar from '@/components/ShopFilterbar';
import ShophCards from '@/components/ShophCards';
import Link from 'next/link';


export default function ShopPage() {
  return (
    <div className="px-[135px]">
      <GreenHeader />
      <ShopHero1/>
      <ShophCards/>
      <ShopFilterbar/>
      <ShopLogo/>
      <Shop/>
      {/* Add the Cart link */}
      <div className="mt-4">
        <Link href="/cart">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Go to Cart
          </button>
        </Link>
      </div>
   
      
     
     
     
    </div>
  );
}
