import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getProducts } from 'lib/shopify';

export const metadata = {
    title: 'Shop | Pong Party Games',
    description: 'Browse our collection of premium party games and accessories.'
};

export default async function ShopPage() {
    const products = await getProducts({});

    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-40 sm:pt-16 lg:pt-12">
                    <h1 className="font-display text-[42px] sm:text-[52px] md:text-[64px] font-semibold mb-3 sm:mb-4 lg:mb-5">
                        Shop Our Products
                    </h1>
                    <p className="font-body text-[18px] sm:text-[20px] leading-relaxed text-gray-300 max-w-[700px] mx-auto">
                        Browse our collection of premium party games and accessories. All products are handcrafted with quality materials and made in the USA.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16">
                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="font-body text-lg text-[#6b7280]">
                            No products available at the moment.
                        </p>
                    </div>
                ) : (
                    <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <ProductGridItems products={products} />
                    </Grid>
                )}
            </div>
        </div>
    );
}
