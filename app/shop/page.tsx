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
        <div className="min-h-screen pt-24 md:pt-16 px-4 md:px-16">
            {/* Page Header */}
            <div className="max-w-[1400px] mx-auto mb-12">
                <h1 className="font-[family-name:var(--font-family-display)] text-[48px] md:text-[36px] font-semibold text-[var(--color-navy)] mb-4">
                    Shop Our Products
                </h1>
                <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] max-w-2xl">
                    Browse our collection of premium party games and accessories. All products are handcrafted with quality materials.
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-[1400px] mx-auto pb-20">
                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-gray-medium)]">
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
