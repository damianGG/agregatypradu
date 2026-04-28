"use client";

import Carousel from "@/components/reuseable/Carousel";
import { ProductCard } from "@/components/reuseable/product-cards";
import products from "@/data/product-list";

export default function BestsellersSlider() {
    return (
        <Carousel
            className="pb-4"
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            navigation
            pagination
            grabCursor
        >
            {products.map((item) => (
                <ProductCard {...item} key={item.id} />
            ))}
        </Carousel>
    );
}
