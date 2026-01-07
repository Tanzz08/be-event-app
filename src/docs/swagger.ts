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
        fullName: "member2026",
        username: "member2026",
        email: "member2026@yopmail.com",
        password: "Member2026!",
        confirmPassword: "Member2026!",
      },
      ActivationRequest: {
        code: "abdef",
      },
      CreateCategoryRequest: {
        name: "",
        description: "",
        icon: "",
      },
      CreateEventsRequest: {
        name: "",
        banner: "fileUrl",
        category: "categiry objectID",
        description: "",
        startDate: "yyyy-mm-dd hh:mm:ss",
        endDate: "2024-12-16 13:45:00",
        location: {
          region: "region id",
          coordinates: [0, 0],
        },
        isOnline: false,
        isFeatured: false,
      },
      RemoveMediaRequest: {
        fileUrl: "",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
