import errorImage from "../assets/images/error404.svg"

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">

        <img
        className="w-full max-w-[600px] aspect-auto"
        src={errorImage}
        />
        
        <a href="/" className="text-lg hover:underline text-[#173e1f] text-center">Page Not Found Click Here to go back Home

        </a>
      
    </div>
  );
}
