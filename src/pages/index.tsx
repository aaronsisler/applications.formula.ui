import Head from "next/head";
import Counter from "../components/counter";
// import { Hyperlink } from "../atoms/hyperlink";

// const LandingPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Formula UI: Landing Page</title>
//       </Head>
//       <header>Header</header>
//       <main>
//         <h1>Formula UI</h1>
//         <p>
//           <Hyperlink title="Manager Page" href="/manager" />
//         </p>
//       </main>
//       <footer>Footer</footer>
//     </>
//   );
// };

// export default LandingPage;

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Formula UI: Landing Page</title>
      </Head>
      <header>Header</header>
      <main>
        <h1>Formula UI</h1>
        <Counter />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default LandingPage;
