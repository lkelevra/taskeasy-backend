const app = require("../src/app");
const request = require("supertest");
const DB = require("../db.testing");

describe("Lista de clientes", () => {
  test("Debe responder un arreglo de datos", () => {
    return request(app)
      .get("/users")
      .set("Accept", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body)).toBe(
          JSON.stringify(DB.default.UserDB)
        );
      });
  });
});

describe("Lista de clientes", () => {
  test("Debe responder la disponibilidad de los usuarios", () => {
    return request(app)
      .get("/users/disponibility")
      .set("Accept", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body)).toBe(
          JSON.stringify(DB.default.UserDisponibility)
        );
      });
  });
});
