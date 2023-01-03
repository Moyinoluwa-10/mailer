const app = require("../app");
const request = require("supertest");

describe("Home Route", () => {
  it("Should return status true and a message", async () => {
    const response = await request(app)
      .get("/")
      .set("content-type", "application/json");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: true,
      message: "Welcome to mailer",
    });
  });

  it("Should return error when routed to undefined route", async () => {
    const response = await request(app)
      .get("/undefined")
      .set("content-type", "application/json");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: false,
      message: "Route not found",
    });
  });
});
