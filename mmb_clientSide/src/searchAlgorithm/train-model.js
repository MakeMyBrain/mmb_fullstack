const fs = require("fs");
const TfIdf = require("./tf-idf-search");
const keyword_extractor = require("keyword-extractor");
const { convert } = require("html-to-text");

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
  { blogtitle: "doc1", bloglink: "google.com", doc: "doc1 content" },
  { blogtitle: "doc2", bloglink: "google.com", doc: "doc2 content" },
  { blogtitle: "doc3", bloglink: "google.com", doc: "doc3 content" },
];

const trainSearchModel = async (arrayOfDocuments) => {
  let bloglinks = [];
  let blogtitles = [];
  let docs = [];
  arrayOfDocuments.forEach((documentData) => {
    const data = {
      blogtitle: documentData.title,
      bloglink: documentData.link,
      doc:
        documentData.title +
        " " +
        documentData.creator +
        " " +
        convert(documentData.encoded[0], {
          wordwrap: null,
        }),
    };
    bloglinks.push(data.bloglink);
    blogtitles.push(data.blogtitle);
    docs.push(keyword_string(data.doc));
  });
  const tf_idf = new TfIdf([], [], bloglinks, blogtitles);
  tf_idf.createCorpusFromStringArray(docs);
  const dataTOStore = {
    corpus: tf_idf.corpus,
    tracker: tf_idf.tracker,
    bloglink: tf_idf.bloglink,
    blogtitle: tf_idf.blogtitle,
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
  readData = JSON.parse(readData);
  await trainSearchModel(readData);
};

// trainSearchModel(arrayOfDocuments);

train();
