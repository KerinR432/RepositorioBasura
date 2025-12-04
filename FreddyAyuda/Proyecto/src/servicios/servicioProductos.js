
import http from "./http-axios.js";

class ServicioProductos {
  getAll() {
    return http.get("/productos");
  }
  
}

export default new ServicioProductos();
