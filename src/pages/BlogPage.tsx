import * as React from "react";
import Title from "../components/Title";
import { CiSearch } from "react-icons/ci";
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
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  {
    imageSrc: 'https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg',
    date: "July 07, 2024",
    title: "5 effective ways to store pineapples",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio dignissimos velit fugit, provident vitae impedit sed iusto fuga vel accusamus officia eaque itaque ut quas! Voluptates veritatis quo debitis!",
    tags: ["fruits", "storage"],
  },
  // Add more articles as needed
];

export function BlogPage() {
  const [placeholder, setPlaceholder] = React.useState(
    "Search for any Blog Article"
  );

  React.useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 640;
      setPlaceholder(isMobileView ? "Search" : "Search for any Blog Article");
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="w-screen flex flex-col justify-center items-center py-32 gap-8">
        <div className="flex flex-col">
          <Title content="The Latest with" />
          <Title content="Kipitfresh" center={true} />
        </div>

        <span className="text-lg text-[#173e1f]">
          If it can stay fresh & last longer. Then it is truly newsworthy
        </span>
        <button className="w-[300px] h-[70px] bg-[#173e1f] rounded-full text-white text-xl font-semibold">
          Stay Updated
        </button>
      </section>
      <section className="w-screen p-12 ">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="rounded-full w-full sm:w-[300px] lg:w-[420px] h-[35px] sm:h-[55px] bg-white flex flex-row justify-start items-center p-2 shadow-2xl">
            <CiSearch
              color="#173e1f"
              className="text-[20px] sm:text-[25px] lg:text-[30px]"
            />
            <input
              className="w-full pl-4 sm:pl-6 lg:pl-8 outline-none border-none text-xs sm:text-base"
              placeholder={placeholder}
            />
          </div>
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
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-12 py-5">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              imageSrc={article.imageSrc}
              date={article.date}
              title={article.title}
              description={article.description}
              tags={article.tags}
            />
          ))}
        </div>
      </section>
      
      <section className="w-screen p-12 pb-36">
        <div className="w-full flex flex-row justify-between items-center">
          <Title content="Related Stories..." size='md'/>
          <div className="flex flex-row justify-end items-center gap-2">
            
            <button className="p-3 rounded-full bg-[#173e1f] text-white">
              See all posts
            </button>
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
