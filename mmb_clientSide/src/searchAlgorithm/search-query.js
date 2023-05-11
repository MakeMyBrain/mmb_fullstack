const fs = require("fs");
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
  let readData = await fs.readFileSync("./searchModel.json", "utf-8");
  readData = JSON.parse(readData);
  const tf_idf = new TfIdf(
    readData.corpus,
    readData.tracker,
    readData.bloglink,
    readData.blogtitle
  );
  const search_query = await keyword_string(query);
  const search_result = await tf_idf.rankDocumentsByQuery(search_query);
  console.log(search_result);
};

SearchBlogFromQuery("my college is depressing");

