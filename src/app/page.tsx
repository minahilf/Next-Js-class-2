
//COMPONENTS CODE
// import {Header} from "../components/header";
// import {Footer} from "../components/footer";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   );
// }


//CSS CODE
// export default function Home(){
//   return(
//     <div className="homeContainer">
//       <div className="childcontainer">Hey, <br />
//         My name is <span className="pinkColor">Minahil</span> <br />
//         I am a Next JS Developer
//       </div>
//       <div className="childcontainer"></div>
//     </div>
//   )
// }

//TAILWIND CSS
export default function Home(){
  return(
    <div className="flex justify-between item-center bg-gray-300">
      <div className="w-fit h-[250px] m-[200px] text-[40px] font-black ml-4 ">
         Hey, <br />
        My name is <span className="pinkColor">Minahil</span> <br />
        I am a Typescript Developer
      </div>
      <div className="childcontainer">
      <img src="/pic.png"  alt="Portfolio" className="w-[300px] h-[auto] mt-10"
        /> 
        </div>
    </div>
  )
}

