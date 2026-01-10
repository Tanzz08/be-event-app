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
        identifier: "bustanuldarking23@gmail.com",
        password: "Bustanul_08",
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
          address: "",
        },
        isOnline: false,
        isFeatured: false,
        isPublish: false,
      },
      RemoveMediaRequest: {
        fileUrl: "",
      },
      CreateBannerRequest: {
        title: "Banner 3 - Title",
        image:
          "https://res.cloudinary.com/dwkxyrgnl/image/upload/v1768036198/fv8zk7lymlwrkz7t0yvu.jpg",
        isShow: false,
      },
      CreateTicketRequest: {
        price: 1500,
        name: "Ticket Reguler",
        events: "6961fd57ff5c0c6ab556a599",
        description: "Ticket Regular - Description",
        quantity: 100,
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
