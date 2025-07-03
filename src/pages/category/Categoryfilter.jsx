import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { products } from '../../products-data';
import ProductSection from './../../components/ProductSection';
import ProductCard from "./../../components/ProductCard";
import { parsePrice } from './parsePrice';
const Categoryfilter = () => {
    const { id } = useParams();
    const [visibleProducts,setProduct]=useState([])
    
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(100);
    useEffect(()=>{
    if(id==1){
      const promotions = products.filter(p => p.category == "Dairy");
//const listproduct= products.filter((item)=>item.category=="Dairy")
const filtered = promotions.filter((product) => {
  const productPrice = parsePrice(product.price); // Преобразование цены в число
  return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);

    } else if(id==2){
        const listproduct= products.filter((item)=>item.category=="Bakery")


const filtered = listproduct.filter((product) => {
      const productPrice = parsePrice(product.price); // Преобразование цены в число
      return productPrice >= minPrice && productPrice <= maxPrice;
  });
    setProduct(filtered);
    }else if(id==3){
      const listproduct= products.filter((item)=>item.category=="Fruit")


const filtered = listproduct.filter((product) => {
    const productPrice = parsePrice(product.price); // Преобразование цены в число
    return productPrice >= minPrice && productPrice <= maxPrice;
});
  setProduct(filtered);
  }else if(id==4){
    const listproduct= products.filter((item)=>item.category=="Dessert")


const filtered = listproduct.filter((product) => {
  const productPrice = parsePrice(product.price); // Преобразование цены в число
  return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);
}else if(id==5){
  const listproduct= products.filter((item)=>item.category=="Dessert")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==6){
  const listproduct= products.filter((item)=>item.category=="Lunch")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}

else if(id==7){
  const listproduct= products.filter((item)=>item.category=="Breakfast")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==8){
  const listproduct= products.filter((item)=>item.category=="Fruit")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==9){
  const listproduct= products.filter((item)=>item.category=="Dessert")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==10){
  const listproduct= products.filter((item)=>item.category=="Dinner")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==11){
  const listproduct= products.filter((item)=>item.category=="Lunch")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==12){
  const listproduct= products.filter((item)=>item.category=="Meat")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
else if(id==13){
  const listproduct= products.filter((item)=>item.category=="Fast food")


const filtered = listproduct.filter((product) => {
const productPrice = parsePrice(product.price); // Преобразование цены в число
return productPrice >= minPrice && productPrice <= maxPrice;
});
setProduct(filtered);}
},[minPrice, maxPrice,visibleProducts, setProduct])



  return (
    <>
    <div className="bg-[#FFF3E9] py-6">
    <div className='container mx-auto'>
        <div className='flex '>
            <aside className='w-[300px]'><div>
                <div><p>Фильтр</p></div>
                <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Ползунок для минимальной цены */}
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Минимальная цена: {minPrice} ₽
          </label>
          <input
            type="range"
            id="minPrice"
            min="0"
            max="100"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Ползунок для максимальной цены */}
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Максимальная цена: {maxPrice} ₽
          </label>
          <input
            type="range"
            id="maxPrice"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Отображение выбранного диапазона цен */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>0 ₽</span>
          <span>100 ₽</span>
        </div>
      </div>
    </div>
                </div></aside>
    {/*<div className='grid grid-cols-3'>
    {product.map((item)=>(
        <div className='h-[350px] border-2 border-amber-600' key={item.id}>
<div className=''><img className='mx-auto' src={item.images[0]} alt={item.name} /></div>
<div className='flex justify-between items-center'><p>{item.price}</p><p>{item.disprice}</p></div>
<div className='flex justify-between items-center'><p>С картой</p><p>Обычная</p></div>
<p>{item.description}</p>

<button>В корзину</button>
        </div>
    ))
    }</div>*/}
 <div>
    
      <div className="bg-[#FFF3E9] py-6">
      
      <div className="max-w-5/2 mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
      </div>
    </div>
    </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Categoryfilter