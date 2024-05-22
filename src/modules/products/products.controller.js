import connectionDB from "../../../db/connectionDB.js";

// ========================================== GET PRODUCTS ==========================================

export const getProducts = (req, res) => {
  const query = `select * from products`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }
    return res.status(201).json(result);
  });
};

// ========================================== ADD PRODUCT ==========================================

export const addProduct = (req, res) => {
  const { name, price, description } = req.body;

  const query = `insert into products (name,price,description) value("${name}","${price}","${description}")`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }
    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to add" });
    }
    return res.status(201).json({ msg: "Product added" });
  });
};

// ========================================== UPDATE PRODUCT ==========================================

export const updateProduct = (req, res) => {
  const { id, name, price, description } = req.body;

  const query = `update products set name="${name}", price="${price}", description="${description}" where id="${id}"`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }

    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to update" });
    }

    return res.status(201).json({ msg: "Product updated" });
  });
};

// ========================================== DELETE PRODUCT ==========================================

export const deleteProduct = (req, res) => {
  const { id } = req.body;

  const query = `delete from products where id="${id}"`;

  connectionDB.execute(query, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "query error", err });
    }

    if (!result.affectedRows) {
      return res.status(400).json({ msg: "failed to delete" });
    }

    return res.status(201).json({ msg: "Product Deleted" });
  });
};
