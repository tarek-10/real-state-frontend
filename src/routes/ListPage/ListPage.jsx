import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import { useLoaderData } from "react-router-dom";
import "./listPage.scss";

function ListPage() {
  const data = useLoaderData();
  console.log(data);

  const posts = data.postResponse; //

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {posts.map((post) => (
            <Card key={post.id} item={post} />
          ))}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  );
}

export default ListPage;
