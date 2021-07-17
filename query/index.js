const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const posts = {};
//  POSTS structure
//  posts === {
//     'abcd': {
//         id: 'abcd',
//         title: 'Post Title',
//         comments: [
//             { id: 'efgh', content: 'This is comment!' }
//         ]
//     }
// }

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  switch (type) {
    case "POST_CREATED":
      {
        const { id, title } = data;
        posts[id] = {
          id,
          title,
          comments: [],
        };
      }
      break;
    case "COMMENT_CREATED":
      {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content });
      }
      break;
  }

  console.log(posts);

  res.send({});
});

app.listen(PORT, () => console.log(`QueryServer running on PORT ${PORT}`));
