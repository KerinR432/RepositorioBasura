
import http from "./http-axios.js";

class ServicioProductos {
  getAll() {
    return http.get("/productos");
  }
  
  getId(id) {
    return http.get(`/productos/${id}`)
  }

  create(data){
    return http.post("/productos",data);
  }

  update (id,data) {
    return http.post(`/productos/${id}`,data)
  }

  delete(id) {
    return http.delete(`/productos/${id}`)
  }

}

export default new ServicioProductos();
