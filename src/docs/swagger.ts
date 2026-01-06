import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API Event APP",
    description: "Dokumentasi API Event APP",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
      description: "Local Server",
    },
    {
      url: "https://be-event-app-one.vercel.app/api",
      description: "Deploy Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "Tanzz",
        password: "bustanul_089",
      },
      RegisterRequest: {
        fullName: "member2025",
        username: "member2025",
        email: "member2025@yopmail.com",
        password: "Member2025!",
        confirmPassword: "Member2025!",
      },
      ActivationRequest: {
        code: "abdef"
      }
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
