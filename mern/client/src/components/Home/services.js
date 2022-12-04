import React, { useState } from "react";
import { isEmpty } from "lodash";
import axios from "axios";
import Select from "react-select";

const Streaming = [
  { value: 1, label: "Netflix", title: "netflix" },
  { value: 2, label: "Hulu", title: "hulu" },
  { value: 3, label: "Disney+", title: "disney" },
  { value: 4, label: "HBO", title: "hbo" },
  { value: 5, label: "Hulu", title: "hulu" },
  { value: 6, label: "Peacock", title: "peacock" },
  { value: 7, label: "Paramount+", title: "paramount" },
  { value: 8, label: "Starz", title: "starz" },
  { value: 9, label: "Showtime", title: "showtime" },
  { value: 10, label: "Apple", title: "apple" },
  { value: 11, label: "Prime", title: "prime" },
];

const Year = [
  { value: 0, label: "N/A", title: "0" },
  { value: 1, label: "1950", title: "1950" },
  { value: 2, label: "1960", title: "1960" },
  { value: 3, label: "1970", title: "1970" },
  { value: 4, label: "1980", title: "1980" },
  { value: 5, label: "1990", title: "1990" },
  { value: 6, label: "2000", title: "2000" },
  { value: 7, label: "2010", title: "2010" },
  { value: 8, label: "2020", title: "2020" },
];

const Ratings = [
  { value: 0, label: "N/A", title: "0" },
  { value: 1, label: "60 and higher", title: "60" },
  { value: 2, label: "70 and higher", title: "70" },
  { value: 3, label: "80 and higher", title: "80" },
  { value: 4, label: "85 and higher", title: "85" },
  { value: 5, label: "90 and higher", title: "90" },
];

const Services = () => {
  // these are for algorithm for suggestions
  const [similarRating, setSimilarRating] = useState("");
  const [genre, setGenre] = useState("");
  // these are to change values when user selection changes
  const [services, setServices] = useState("netflix");
  const [type, setType] = useState("movie");
  const [minRating, setMinRating] = useState("0");
  const [ranPage, setRandomPage] = useState("1");
  const [title, setTitle] = useState("");
  const [yearMin, setYearMin] = useState("0");

  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/search/ultra",
    params: {
      country: "us",
      services: services,
      // this is movie or series
      type: type,
      order_by: "year",
      // year min can be changed
      year_min: yearMin,
      // year max can be changed and cannot be smaller than or equal to min
      year_max: "2023",
      // this value is changed in axios request
      page: ranPage,
      genres: "",
      genres_relation: "or",
      desc: "true",
      language: "en",
      // this can be changed
      min_imdb_rating: minRating,
      max_imdb_rating: "100",
      // maybe change this but unsure if needed
      min_imdb_vote_count: "1",
      max_imdb_vote_count: "1000000",
      output_language: "en",
    },
    headers: {},
  };

  // this is the random media
  const [media, setMedia] = useState(null);
  const [totalPageNumber, setTotalPageNumber] = useState("");
  const [arrayLength, setArrayLength] = useState("");
  const [ranPage2, setRandomPage2] = useState("1");
  const [similarMedia, setSimilarMedia] = useState(null);
  const [similarMedia2, setSimilarMedia2] = useState(null);
  const [similarMedia3, setSimilarMedia3] = useState(null);
  const [similarMedia4, setSimilarMedia4] = useState(null);

  const numberOfResults = (pages, length) => {
    let num = 0;
    if (pages > 1) {
      num += (pages - 1) * 25;
      num.toString();
      num += "+";
    } else {
      num += length;
      num.toString();
    }
    return num;
  };

  // this function fetches data from the backend, returns as a json file, and saves it to my document file
  const handleClick = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setSimilarMedia(null);
        // this needs to change the page number to a randomized value of the total number of page numbers
        const totalPages = response.data.total_pages;
        setTotalPageNumber(totalPages);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        console.log(
          "--- New Search ---",
          "\n",
          "Random page number: " + randomPage + "/" + totalPages
        );
        setRandomPage(randomPage.toString());
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(options)
      .then(function (response) {
        const randomCount = Math.floor(
          Math.random() * response.data.results.length
        );
        console.log(
          "Index/Array Length: " +
            randomCount +
            "/" +
            response.data.results.length
        );
        setArrayLength(response.data.results.length);
        setMedia(response.data.results[randomCount]);
        console.log(response.data.results[randomCount]);
        let rating = response.data.results[randomCount].imdbRating;
        setSimilarRating(rating);
        let genre = response.data.results[randomCount].genres.toString();
        console.log("Genre Numbers: " + genre);
        setGenre(genre);
        setTitle(response.data.results[randomCount].title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const [minRating2, setmin] = useState(null);

  const options2 = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/search/ultra",
    params: {
      country: "us",
      services: services,
      // this is movie or series
      type: type,
      order_by: "year",
      // year min can be changed
      year_min: yearMin,
      // year max can be changed and cannot be smaller than or equal to min
      year_max: "2023",
      // this value is changed in axios request
      page: ranPage2,
      genres: genre,
      genres_relation: "or",
      desc: "false",
      language: "en",
      // this can be changed
      min_imdb_rating: "0",
      max_imdb_rating: "100",
      // maybe change this but unsure if needed
      min_imdb_vote_count: "1",
      max_imdb_vote_count: "1000000",
      output_language: "en",
    },
    headers: {},
  };

  const doFirst = () => {
    console.log("--- Algorithm ---");
    console.log("This is the genre numbers from previous search: " + genre);
    console.log("original rating: " + similarRating);
    options2.params.min_imdb_rating = (similarRating - 7).toString();
    if (similarRating + 8 > 100) {
      options2.params.max_imdb_rating = 100;
    } else {
      options2.params.max_imdb_rating = (similarRating + 8).toString();
    }
    console.log("max rating: " + options2.params.max_imdb_rating);
    console.log("min rating: " + options2.params.min_imdb_rating);
  };

  // here is my algorithmic component
  const handleClickAgain = async () => {
    doFirst();

    await axios
      .request(options2)
      .then(function (response) {
        // this needs to change the page number to a randomized value of the total number of page numbers
        const totalPages = response.data.total_pages;
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        setRandomPage2(randomPage.toString());
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(options2)
      .then(function (response) {
        // Shuffle array
        const shuffled = response.data.results.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 4);
        console.log(selected);

        //
        setSimilarMedia(selected[0]);
        setSimilarMedia2(selected[1]);
        setSimilarMedia3(selected[2]);
        setSimilarMedia4(selected[3]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const setService = (e) => {
    let searchString = "";
    if (Array.isArray(e)) {
      e.forEach((service, index) => {
        if (index === 0) {
          searchString += service.title;
        } else {
          searchString += "," + service.title;
        }
      });
    }

    setServices(searchString);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const pickRating = (e) => {
    setMinRating(e.title);
  };

  const pickYear = (e) => {
    setYearMin(e.title);
  };

  return (
    <div className="mt-5 shadow-md rounded-md p-3 bg-white">
      <h1 className="text-umber">Choiced</h1>
      <h3 className="text-umber">
        Select your service(s)<i>*</i>
      </h3>

      <div className="mx-auto">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className=" px-2	">
            <Select
              options={Streaming}
              onChange={setService}
              isMulti
              defaultValue={Streaming[0]}
            />
          </div>
        </div>
      </div>
      <h3 className="text-umber">Type</h3>
      <div>
        <div className="flex gap-2">
          <div>
            <input
              type="radio"
              value="movie"
              checked={type === "movie"}
              onChange={handleChange}
            />{" "}
            Movie
          </div>
          <div>
            <input
              type="radio"
              value="series"
              checked={type === "series"}
              onChange={handleChange}
            />{" "}
            Series
          </div>
        </div>
      </div>
      <h3 className="text-umber">Minimum Year</h3>
      <div className="mx-auto">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className=" px-2	">
            <Select options={Year} onChange={pickYear} defaultValue={Year[0]} />
          </div>
        </div>
      </div>

      <h3 className="text-umber">IMDB Rating</h3>
      <div className="mx-auto">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className=" px-2	">
            <Select
              options={Ratings}
              onChange={pickRating}
              defaultValue={Ratings[0]}
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleClick}
        type="submit"
        className="bg-rmetalic p-2 rounded-md text-white mb-2 mt-2"
      >
        Search
      </button>
      <div role="textbox">
        {!isEmpty(media) ? (
          <p className="shadow-lg rounded-md p-3 bg-cultured">
            Your random result is: <b>{media.title}</b> out of{" "}
            {numberOfResults(totalPageNumber, arrayLength)} amount of results.
            <br />
            {media.title} is a {options.params.type} that came out in{" "}
            {media.year} and is watchable on{" "}
            {Object.keys(media.streamingInfo).toString()}
            {media.steamingInfo}. It has a {media.imdbRating} rating on IMDB.{" "}
            <br />
            About: <i>{media.overview}</i>
            <img
              className="scale-150 ml-5 mt-10 mb-10"
              src={media.posterURLs[92]}
              alt={media.tagline}
            ></img>
            <button
              onClick={handleClick}
              type="submit"
              className="bg-rmetalic p-2 rounded-md text-white mb-2 mt-2 mr-2"
            >
              Search Again
            </button>
            <button
              onClick={handleClickAgain}
              type="submit"
              className="bg-bone p-2 rounded-md text-umber mb-2 mt-2"
            >
              Similar to: {title}
            </button>
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div>
        {!isEmpty(similarMedia) ? (
          <div className="grid gap-2 lg:grid-cols-4 mt-3 mb-3">
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-bone">
              <div className="p-4">
                <h4 className="text-xl font-semibold text-umber">
                  {similarMedia.title}
                </h4>
                <p className="mb-2 leading-normal">
                  It is a {options.params.type} that came out in{" "}
                  {similarMedia.year} and is watchable on{" "}
                  {Object.keys(similarMedia.streamingInfo).toString()}. It has a{" "}
                  {similarMedia.imdbRating} rating on IMDB. <br />
                  About: <i>{similarMedia.overview}</i>
                </p>
              </div>
              <img
                className="w-fit h-48 mb-2 ml-3 "
                src={similarMedia.posterURLs[92]}
                alt={similarMedia.tagline}
              />
            </div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-bone">
              <div className="p-4">
                <h4 className="text-xl font-semibold text-umber ">
                  {similarMedia2.title}
                </h4>
                <p className="mb-2 leading-normal">
                  It is a {options.params.type} that came out in{" "}
                  {similarMedia2.year} and is watchable on{" "}
                  {Object.keys(similarMedia2.streamingInfo).toString()}. It has
                  a {similarMedia2.imdbRating} rating on IMDB. <br />
                  About: <i>{similarMedia2.overview}</i>
                </p>
              </div>
              <img
                className="w-fit h-48 mb-2 ml-3 "
                src={similarMedia2.posterURLs[92]}
                alt={similarMedia2.tagline}
              />
            </div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-bone">
              <div className="p-4">
                <h4 className="text-xl font-semibold text-umber">
                  {similarMedia3.title}
                </h4>
                <p className="mb-2 leading-normal">
                  It is a {options.params.type} that came out in{" "}
                  {similarMedia3.year} and is watchable on{" "}
                  {Object.keys(similarMedia3.streamingInfo).toString()}. It has
                  a {similarMedia3.imdbRating} rating on IMDB. <br />
                  About: <i>{similarMedia3.overview}</i>
                </p>
              </div>
              <img
                className="w-fit h-48 mb-2 ml-3 "
                src={similarMedia3.posterURLs[92]}
                alt={similarMedia3.tagline}
              />
            </div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-bone">
              <div className="p-4">
                <h4 className="text-xl font-semibold text-umber">
                  {similarMedia4.title}
                </h4>
                <p className="mb-2 leading-normal">
                  It is a {options.params.type} that came out in{" "}
                  {similarMedia4.year} and is watchable on{" "}
                  {Object.keys(similarMedia4.streamingInfo).toString()}. It has
                  a {similarMedia4.imdbRating} rating on IMDB. <br />
                  About: <i>{similarMedia4.overview}</i>
                </p>
              </div>
              <img
                className="w-fit h-48 mb-2 ml-3 "
                src={similarMedia4.posterURLs[92]}
                alt={similarMedia4.tagline}
              />
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Services;
