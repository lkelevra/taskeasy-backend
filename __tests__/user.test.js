const app = require("../src/app");
const request = require("supertest");

describe("Lista de clientes", () => {
  test("Debe responder un arreglo de datos", () => {
    return request(app)
      .get("/users")
      .set("Accept", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});


