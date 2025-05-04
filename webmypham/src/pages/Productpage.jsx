import ProductGrid from '../components/ProductGrid';
import ProductBanner from '../assets/img/ProductBanner.png';

export default function ProductPage() {
    return (
        <>
            <img className="pt-20 w-full" src={ProductBanner} />
            <ProductGrid />
        </>
    );
}
