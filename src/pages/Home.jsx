import ListPosts from "../components/ListPosts";
import ListCategories from "../components/ListCategories";
import "../assets/css/base/base.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <section className="container flex flex--center">
        <ListCategories />
        <ListPosts url={"/posts"} />
      </section>
    </main>
  );
};

export default Home;
