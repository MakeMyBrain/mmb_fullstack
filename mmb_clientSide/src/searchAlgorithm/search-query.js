// const fs = require("fs");
import corpus from "../searchAlgorithm/searchModel";
import TfIdf from "./tf-idf-search";
// const TfIdf = require("./tf-idf-search");
import keyword_extractor from "keyword-extractor";
// const keyword_extractor = require("keyword-extractor");

const keyword_string = (str) => {
  const extraction_result = keyword_extractor.extract(str, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });
  const ans = extraction_result.join(" ").toLowerCase().trim();
  return ans;
};

const SearchBlogFromQuery = (query) => {
  let readData = corpus.corpus;
  const tf_idf = new TfIdf(
    readData.corpus,
    readData.tracker,
    readData.bloglink,
    readData.blogtitle,
    readData.blogmeta
  );
  const search_query = keyword_string(query);
  const search_result = tf_idf.rankDocumentsByQuery(search_query);
  //TODO: filter array

  return search_result;
};

export default SearchBlogFromQuery;
// SearchBlogFromQuery("sexual harassment");
