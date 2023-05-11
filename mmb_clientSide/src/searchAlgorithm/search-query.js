// const fs = require("fs");
import corpus from '../searchAlgorithm/searchModel'
const TfIdf = require("./tf-idf-search");
const keyword_extractor = require("keyword-extractor");

const keyword_string = async (str) => {
  const extraction_result = keyword_extractor.extract(str, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });
  const ans = await extraction_result.join(" ").toLowerCase().trim();
  return ans;
};

const SearchBlogFromQuery = async (query) => {
  let readData = await corpus;
  // readData = JSON.parse(readData);
  const tf_idf = new TfIdf(
    readData.corpus,
    readData.tracker,
    readData.bloglink,
    readData.blogtitle,
    readData.blogmeta
  );
  const search_query = await keyword_string(query);
  const search_result = await tf_idf.rankDocumentsByQuery(search_query);
  console.log(search_result);
  return search_result;
};

export default { SearchBlogFromQuery }
SearchBlogFromQuery("sexual harassment");


