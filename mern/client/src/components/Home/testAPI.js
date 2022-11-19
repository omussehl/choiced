// useState is a hook, and we use curly braces to destructure it
import React, { useState } from "react";
import { isEmpty } from "lodash";
import axios from "axios";
import Select from "react-select";

const Services = [
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

const Type = [
  { value: 1, label: "Movie", title: "movie" },
  { value: 2, label: "Series", title: "series" },
];

const Ratings = [
  { value: 1, label: "> 6", title: "6" },
  { value: 2, label: "> 7", title: "7" },
  { value: 3, label: "> 8", title: "8" },
  { value: 4, label: "> 9", title: "9" },
  { value: 5, label: "> 9.5", title: "9.5" },
];

const Test = () => {
  // this is the initial value

  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/search/ultra",
    params: {
      country: "us",
      services: "hulu",
      // this is movie or series
      type: "movie",
      order_by: "year",
      // year min can be changed
      year_min: "1980",
      // year max can be changed and cannot be smaller than or equal to min
      year_max: "2022",
      // this value is changed in axios request
      page: "1",
      genres: "18,80",
      genres_relation: "or",
      desc: "true",
      language: "en",
      // this can be changed
      min_imdb_rating: "70",
      max_imdb_rating: "100",
      // maybe change this but unsure if needed
      min_imdb_vote_count: "100",
      max_imdb_vote_count: "1000000",
      output_language: "en",
    },
    headers: {},
  };

  const [media, setMedia] = useState(null);
  // this function fetches data from the backend, returns as a json file, and saves it to my document file

  const handleClick = async () => {
    await axios
      .request(options)
      .then(function (response) {
        // this needs to change the page number to a randomized value of the total number of page numbers
        const totalPages = response.data.total_pages;
        const randomPage = Math.floor(Math.random() * totalPages);
        options.params.page = randomPage.toString();
        console.log(randomPage);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(options)
      .then(function (response) {
        // currently this is 25 but need to get an accurate numnber
        const randomCount = Math.floor(
          Math.random() * response.data.results.length
        );
        console.log(response.data.results.length);
        console.log(response.data.results[randomCount]);
        setMedia(response.data.results[randomCount]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(
      Array.isArray(e) ? e.map((service) => service.title + ",") : []
    );
    // removes the final comma at the end, still not changing actual values tho
    const selections = selectedOptions.substring(0, selectedOptions.length - 1);
    options.params.services = selections;
  };

  return (
    <div className="p-3">
      <h2 className="text-umber">Movie of the Night - API</h2>
      <h3 className="text-umber">Select your serivce(s)</h3>
      <div className="mx-auto">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className=" px-2	">
            <Select options={Services} onChange={setHandle} isMulti />
          </div>
          {selectedOptions}
        </div>
      </div>
      <p>dropdown of all of the available shows</p>
      <h3 className="text-umber">Type</h3>
      <p>options: movies, series</p>
      <h3 className="text-umber">Year</h3>
      <p>beginning year, end year</p>
      <h3 className="text-umber">IMDB Rating</h3>
      <p>options: > 5, > 6, > 7, > 8 , > 9</p>

      <button
        onClick={handleClick}
        type="submit"
        className="bg-rmetalic p-2 rounded-md text-white mb-2 mt-2"
      >
        Search
      </button>
      <div role="textbox">
        {!isEmpty(media) ? (
          <p className="shadow-md rounded-md p-3 bg-white">
            Your random result is: <b>{media.title}</b>
            <br />
            {media.title} is a {options.params.type} that came out in{" "}
            {media.year} on {options.params.services}
            {media.steamingInfo}. It has a {media.imdbRating} rating on IMDB.{" "}
            <br />
            About: <i>{media.overview}</i>{" "}
            <img src={media.posterURLs[92]} alt={media.tagline}></img>
            <button
              onClick={handleClick}
              type="submit"
              className="bg-rmetalic p-2 rounded-md text-white mb-2 mt-2"
            >
              Other Similar Titles
            </button>
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Test;
