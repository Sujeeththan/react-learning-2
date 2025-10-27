import HomeCard from "../componensts/HomeCard";

function Home() {
  return (
    <>
      <HomeCard url="introduction" text="This page will 404 Error(page)" />
      <HomeCard url="jsx" />
      <HomeCard url="components" />
      <HomeCard url="props" />
      <HomeCard url="hooks" />
      <HomeCard url="fetch" />

      {/* <HomeCard url="forms" /> */}
    </>
  );
}

export default Home;
