const express = require("express");
const productsController = require("../controllers/products");
const multer = require("multer");
const path = require("path");

//CONFIG
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/img/products");
  },
  filename: (req, file, cb) => {
    cb(
      null,

      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({ storage });

//RUTA ALTA PRODUCTO
router.get("/abmproduct", productsController.abmproduct);
router.post(
  "/abmproduct",
  uploadFile.single("image"),
  productsController.store
);

//RUTA EDIT PRODUCTO
router.get("/abmproductEdit/:id", productsController.edit);
router.put(
  "/abmproductEdit/:id",
  uploadFile.single("image"),
  productsController.update
);

//RUTA DELETE PRODUCTO
router.delete("/abmproductEdit/:id", productsController.destroy);

//RUTAS PRODUCTOS PARA PERRO
router.get("/perros", productsController.perros);
router.get("/perros/:id", productsController.detail);

//RUTAS PRODUCTOS GATOS
router.get("/gatos", productsController.gatos);
router.get("/gatos/:id", productsController.detail);

//RUTAS PRODUCTOS PECES
router.get("/peces", productsController.peces);
router.get("/peces/:id", productsController.detail);

//RUTAS PRODUCTOS AVES
router.get("/aves", productsController.aves);
router.get("/aves/:id", productsController.detail);

module.exports = router;
