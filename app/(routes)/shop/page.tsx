import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Navbar } from "@/components";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const ShopPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("301d5702-3613-4076-905a-6cfefbbaf25c");

  return (
    <div>
        <Navbar/>
            <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
    </div>

  )
};

export default ShopPage;
