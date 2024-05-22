import connectionDB from "../../../db/connectionDB.js";

// ========================================== GET POSTS ==========================================

export const getPosts = (req, res) => {
  const query = `select * from posts`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }
    return res.status(201).json(result);
  });
};

// ========================================== ADD POST ==========================================

export const addPost = (req, res) => {
  const { title, price, description } = req.body;

  const query = `insert into posts (title,price,description) value("${title}","${price}","${description}")`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }
    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to add" });
    }
    return res.status(201).json({ msg: "post added" });
  });
};

// ========================================== UPDATE POST ==========================================

export const updatePost = (req, res) => {
  const { id, title, price, description } = req.body;

  const query = `update posts set title="${title}", price="${price}", description="${description}" where id="${id}"`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }

    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to update" });
    }

    return res.status(201).json({ msg: "post updated" });
  });
};

// ========================================== DELETE POST ==========================================

export const deletePost = (req, res) => {
  const { id } = req.body;

  const query = `delete from posts where id="${id}"`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }

    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to delete" });
    }

    return res.status(201).json({ msg: "Post Deleted" });
  });
};
