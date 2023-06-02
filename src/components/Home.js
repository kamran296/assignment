import React, { useEffect, useState } from "react";
import HomeItem from "./HomeItem";
import "./HomeCss.css";
function Home() {
  //   const [movie, setMovie] = useState();
  //   const func = async (req,res)={
  //   const response = await fetch("https://api.tvmaze.com/search/shows?q=all", {
  //     method: "GET",
  //   });
  //   console.log(response.json);
  //   setMovie({ respo: response.json });
  // }
  //   async componentDidMount() {
  //     let url =
  //       "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b7e46e560a6140d5bbea970ae5a8c381";
  //     this.setState({
  //       loading: true,
  //     });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //       loading: false,
  //     });
  //   }

  const [movies, setMovie] = useState([]);
  useEffect(() => {
    const val = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all",
          {
            method: "GET",
          }
        );

        const data = await response.json();
        setMovie(data);
        console.log(data[0]);
      } catch {
        console.log("error");
      }
    };
    val();
  }, []);

  return (
    <div className="container">
      {movies.map((movie) => {
        return <HomeItem movie={movie} />;
      })}
    </div>
  );
}

export default Home;
