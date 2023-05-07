const fs = require("fs");
const TfIdf = require("./tf-idf-search");
const keyword_extractor = require("keyword-extractor");

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

const arrayOfDocuments = [
  { title: "doc1", url: "google.com", doc: "doc1 content" },
  { title: "doc2", url: "google.com", doc: "doc2 content" },
  { title: "doc3", url: "google.com", doc: "doc3 content" },
];

const trainSearchModel = async (arrayOfDocuments) => {
  let urls = [];
  let titles = [];
  let docs = [];
  arrayOfDocuments.forEach((documentData) => {
    urls.push(documentData.url);
    titles.push(documentData.title);
    docs.push(keyword_string(documentData.doc));
  });
  const tf_idf = new TfIdf([], [], urls, titles);
  tf_idf.createCorpusFromStringArray(docs);
  const dataTOStore = {
    corpus: tf_idf.corpus,
    tracker: tf_idf.tracker,
    url: tf_idf.url,
    title: tf_idf.title,
  };
  //   fs.writeFile("searchModel.json", JSON.stringify(dataTOStore), (err) => {
  //     if (err) throw err;
  //     console.log("Done writing");
  //   });
  await fs.writeFileSync("./searchModel.json", JSON.stringify(dataTOStore));
  console.log("Done writing");
};

const train = async () => {
  let readData = await fs.readFileSync("./blogs.json", "utf-8");
  const blogs = JSON.parse(readData);
  await trainSearchModel(blogs);
};

// trainSearchModel(arrayOfDocuments);

train();
