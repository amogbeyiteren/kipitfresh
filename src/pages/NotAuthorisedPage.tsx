import errorImage from "../assets/images/error401.svg"

export default function NotAuthorisedPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">

        <img
        className="w-full max-w-[600px] aspect-auto"
        src={errorImage}
        />
        
        <a href="/" className="text-lg hover:underline text-[#173e1f] text-center">You are not  allowed to view this page Click Here to go back Home

        </a>
        <span className="text-center text-3xl font-semibold">
          OR
        </span>

        <a href="/login" className="text-lg hover:underline text-[#173e1f] text-center">Click Here to go to Login Page

</a>
      
    </div>
  );
}
