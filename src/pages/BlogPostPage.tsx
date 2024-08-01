import * as React from "react";
import Title from "../components/Title";
import { IoIosStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FiThumbsUp } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { GoSmiley } from "react-icons/go";
import ArticleCard from "../components/BlogPageCard";

interface IArticle {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
}

const articles: IArticle[] = [
  {
    imageSrc: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  }
  // Add more articles as needed
];

export function BlogPostPage() {
 

  return (
    <div>
      <section className="w-screen flex flex-col justify-center items-center py-32 gap-8">
        <Title content="Blog Title" />
      </section>
      <section className="w-screen p-12 ">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center text-[#173e1f] gap-4">
            <span>Author Name</span>
            <span className="flex gap-1 items-center justify-center">
              {" "}
              <IoIosStar color="#f5bd02" />{" "}
              <span className="font-bold">4.8</span>(300 reviews)
            </span>
            <span className="flex gap-1 items-center justify-center">
              <IoLocationOutline /> Location
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span className="w-[50px] h-[50px] rounded-full shadow-2xl flex justify-center items-center text-[#173e1f]">
              <FaRegComment size={24} />
            </span>
            <span className="w-[50px] h-[50px] rounded-full shadow-2xl flex justify-center items-center text-[#173e1f]">
              <FiThumbsUp size={24} />
            </span>
            <span className="w-[50px] h-[50px] rounded-full shadow-2xl flex justify-center items-center text-[#173e1f]">
              <CiShare2 size={24} />
            </span>
            <span className="w-[50px] h-[50px] rounded-full shadow-2xl flex justify-center items-center text-[#173e1f]">
              <IoIosMore size={24} />
            </span>

            

            
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-[400px]">
            <Title content="5 Effective Ways: How to preserve Pineapples" />
          </div>

          <span className="w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis corporis corrupti quibusdam ab eligendi fuga rerum, tempora accusantium ducimus architecto explicabo quidem ipsa in reprehenderit, illo debitis perferendis dolorem.
          </span>

        </div>

        <img 
        className="w-full h-[600px] border border-black my-8"
        />
      </section>

      <section className="w-screen p-12 pb-16 flex flex-col items-start">
      <Title content="Post Details" />
      <span className="text-lg pt-1 text-[#173e1f]">
      10-07-2024  • <span className="font-bold">Author Name</span>  
      </span>
      <p className="w-full py-6 text-[#173e1f]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?

      </p>
        
      </section>
      <section className="w-screen p-12 pb-16 flex flex-col items-start">
      <Title content="Add a Review" />
      <div className="w-full flex flex-row justify-between items-center pt-5">
   <span className="text-lg pt-1 text-[#173e1f]">
      Be the first to review  • <span className="font-bold">Spectacular views on BlogTopic</span>  
      </span>
          
          <div className="flex flex-row justify-between items-center">
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />

            

            
          </div>
        </div>
      
      <p className="w-full py-6 text-[#173e1f]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad aperiam magnam voluptatibus consectetur, iusto maxime, facilis asperiores provident culpa soluta. Earum repellat incidunt fugit deleniti optio, adipisci illum nesciunt?

      </p>
      <div className="w-full h-[80px] flex flex-row justify-between items-center rounded-2xl shadow-2xl px-3">
        <input 
        className="w-full text-left outline-none border-none"
        placeholder="Share your thoughts"
        />
        <span className="flex justify-start items-center gap-2">
          <GoSmiley size={40} color="#173e1f" />
          <button className="w-[100px] h-[50px] rounded-2xl bg-[#173e1f] text-white font-semibold">
            Post it
          </button>
        </span>

      </div>
        
      </section>
      <section className="w-screen p-12 pb-16 flex flex-col items-start">
      <Title content="3 Comments" />
      <div className="w-full py-4 flex flex-col justify-center items-center">
        <div className=" border-b-[1px] border-gray-700 flex flex-row justify-between items-start py-12">
        <div className="flex flex-col justify-center items-start ">
          <span className="font-semibold text-lg pb-1">Commenter Name</span>
          <span className="font-light pb-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolore vel nobis pariatur eligendi neque nostrum blanditiis ad laborum excepturi non dolor facere alias repellendus id quisquam, aliquid officiis dolores!</span>
          <span className="flex flex-row gap-8 py-3">
            <span className="text-sm text-gray-700">about 1hour ago</span>
            <span className="flex flex-row gap-2 font-bold justify-center items-center text-sm">
              <span>Like</span>
              <span>Reply</span>

            </span>
          </span>

        </div>
        <div className="flex flex-row justify-between items-center">
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />

            

            
          </div>

        </div>
        <div className=" border-b-[1px] border-gray-700 flex flex-row justify-between items-start py-12">
        <div className="flex flex-col justify-center items-start ">
          <span className="font-semibold text-lg pb-1">Commenter Name</span>
          <span className="font-light pb-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolore vel nobis pariatur eligendi neque nostrum blanditiis ad laborum excepturi non dolor facere alias repellendus id quisquam, aliquid officiis dolores!</span>
          <span className="flex flex-row gap-8 py-3">
            <span className="text-sm text-gray-700">about 1hour ago</span>
            <span className="flex flex-row gap-2 font-bold justify-center items-center text-sm">
              <span>Like</span>
              <span>Reply</span>

            </span>
          </span>

        </div>
        <div className="flex flex-row justify-between items-center">
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />

            

            
          </div>

        </div>
        <div className=" border-b-[1px] border-gray-700 flex flex-row justify-between items-start py-12">
        <div className="flex flex-col justify-center items-start ">
          <span className="font-semibold text-lg pb-1">Commenter Name</span>
          <span className="font-light pb-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolore vel nobis pariatur eligendi neque nostrum blanditiis ad laborum excepturi non dolor facere alias repellendus id quisquam, aliquid officiis dolores!</span>
          <span className="flex flex-row gap-8 py-3">
            <span className="text-sm text-gray-700">about 1hour ago</span>
            <span className="flex flex-row gap-2 font-bold justify-center items-center text-sm">
              <span>Like</span>
              <span>Reply</span>

            </span>
          </span>

        </div>
        <div className="flex flex-row justify-between items-center">
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />
            <IoIosStar color="#f5bd02" />

            

            
          </div>

        </div>

      </div>
      
      

        
      </section>

      <section className="w-screen p-12 pb-36">
        <div className="w-full flex flex-row justify-between items-center">
          <Title content="Related Posts" size='md'/>
          <div className="flex flex-row justify-end items-center gap-2">
            
          <div className="flex flex-row justify-end items-center gap-2">
            <button className="p-2 rounded-full bg-[#173e1f] text-white">
              fruits
            </button>
            <button className="p-2 rounded-full bg-[#7ED957] text-white">
              storage
            </button>
            <button className="p-2 rounded-full bg-[#173e1f] text-white">
              fruits
            </button>
            <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-2xl ml-5">
              <CiSearch color="#173e1f" size={24} /> 
            </span>
          </div>
          
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-12 py-5">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              imageSrc={article.imageSrc}
              date={article.date}
              title={article.title}
              description={article.description}
              tags={article.tags}
              size="md"
            />
          ))}
        </div>
      </section>


    </div>
  );
}
