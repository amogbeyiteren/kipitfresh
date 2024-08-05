import { useState } from 'react'
import AdminHeader from '../../components/AdminHeader';
import { CiSearch } from 'react-icons/ci';
import { IoOptions } from 'react-icons/io5';
import EnhancedTable from '../../components/Datatable';

interface IProduct {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
}

const dummyProducts: IProduct[] = [
  { id: 1, name: 'Apple iPhone 13', category: 'Electronics', stock: 15, price: 999.99 },
  { id: 2, name: 'Samsung Galaxy S21', category: 'Electronics', stock: 30, price: 799.99 },
  { id: 3, name: 'Sony WH-1000XM4', category: 'Accessories', stock: 50, price: 349.99 },
  { id: 4, name: 'Nike Air Max 270', category: 'Footwear', stock: 100, price: 150.00 },
  { id: 5, name: 'Adidas Ultraboost 21', category: 'Footwear', stock: 75, price: 180.00 },
  { id: 6, name: 'MacBook Pro', category: 'Electronics', stock: 20, price: 1299.99 },
  { id: 7, name: 'Google Pixel 6', category: 'Electronics', stock: 25, price: 699.99 },
  { id: 8, name: 'Bose QuietComfort 35', category: 'Accessories', stock: 60, price: 299.99 },
  { id: 9, name: 'Puma Running Shoes', category: 'Footwear', stock: 90, price: 120.00 },
  { id: 10, name: 'Reebok Classic', category: 'Footwear', stock: 80, price: 100.00 },
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'category', label: 'Category' },
  { id: 'stock', label: 'Stock' },
  { id: 'price', label: 'Price' }
];

const Products = () => {
  const [view, setView] = useState('addProduct');

  const handleAddProductClick = () => setView('addProduct');
  const handleViewProductsClick = () => setView('manageProduct');
  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };

  return (
    <div className="flex flex-col justify-start items-center">
      {view === 'addProduct' ? (
        <>
          <AdminHeader
            titleContent="Add New Product"
            profileImageSrc="path_to_profile_image.jpg"
            onDownloadClick={handleDownloadClick}
          />
          <div className='p-5 flex flex-col justify-start items-start gap-8 w-full'>
            <div className='w-full sm:w-4/5 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Product Name</span>
              <input 
                className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                placeholder='Pineapple'
              />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Category</span>
              <input 
                className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                placeholder='Fruit'
              />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Price</span>
              <input 
                className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                placeholder='00'
                type='number'
              />
            </div>
            <div className='flex flex-col sm:flex-row items-start justify-start w-full gap-5'>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Quantity Available</span>
                <input 
                  className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                  placeholder='100'
                  type='number'
                />
              </div>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Product Rating</span>
                <input 
                  className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                  placeholder='4'
                  type='number'
                />
              </div>
            </div>
            <div className='w-full sm:w-4/5 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Product Description</span>
              <textarea 
                className='w-full h-[100px] p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                placeholder='Short Product Description'
              />
            </div>
            <div className='w-full sm:w-1/2 flex items-start justify-start text-[#173e1f] gap-5'>
              <button
                className="bg-[#173e1f] text-lg py-2 px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
                
              >
                Upload Product
              </button>
              <button
                className="bg-[#173e1f] text-lg py-2 px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
                onClick={handleViewProductsClick}
              >
                View Products
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <AdminHeader
            titleContent="Manage Product"
            profileImageSrc="path_to_profile_image.jpg"
            onDownloadClick={handleDownloadClick}
          />
          <div className='py-5 flex flex-col gap-5 sm:flex-row justify-between items-center w-full'>
            <div className="w-full sm:w-1/2 h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
              <CiSearch size={24} color="#173e1f" />
              <input
                className="w-full h-full bg-transparent border-none outline-none px-5"
                placeholder="Search for Product by ID"
              />
              <IoOptions size={24} color="#173e1f" />
            </div>
            <button
              className="bg-[#173e1f] w-full sm:w-max text-lg py-2 px-2 md:px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
              onClick={handleAddProductClick}
            >
              Add New Product
            </button>
          </div>
          <div className='p-5 flex flex-col justify-start items-start gap-8 w-full min-h-screen'>
            <EnhancedTable data={dummyProducts} columns={columns} title="" onRowClick={(row) => console.log(row)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
