import { createServer, Model } from "miragejs";

let server = () => {
  return createServer({
    models: {
      user: Model,
      hotels: Model,
    },

    seeds(server) {
      server.create("hotel", {
        id: "1",
        name: "Aurora Hotel",
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        image:
          "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 100,
        location: "Taichung, Taiwan",
        availability: false,
      });

      server.create("hotel", {
        id: "2",
        name: "Lorde Hotel",
        description:
          "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
        image:
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        price: 200,
        location: "Xi'an, China",
        availability: false,
      });
      server.create("hotel", {
        id: "3",
        name: "Deer Hotel",
        description:
          "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        image:
          "https://images.unsplash.com/photo-1514474208469-b634e8564bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 300,
        location: "Phnom Penh, Cambodia",
        availability: true,
      });
      server.create("hotel", {
        id: "4",
        name: "Maple Hotel",
        description:
          "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        image:
          "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        price: 300,
        location: "Sapporo, Japan",
        availability: true,
      });
      server.create("hotel", {
        id: "5",
        name: "Frodo Hotel",
        description:
          "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 400,
        location: "Brisbane, Australia",
        availability: false,
      });
      server.create("hotel", {
        id: "6",
        name: "Judes Hotel",
        description:
          "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 500,
        location: "Semarang, Indonesia",
        availability: true,
      });

      server.create("user", {
        id: 1,
        name: "bob",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/hotels", (schema) => {
        return schema.hotels.all();
      });

      this.get("/users", (schema, request) => {
        return schema.users.all();
      });
    },
  });
};

export default server;

// export default server;

// import React, { useState, useEffect } from "react";
// import { createServer, Model, Response } from "miragejs";

// createServer({
//   models: {
//     user: Model,
//     hotels: Model,
//   },

//   seeds(server) {
//     server.create("hotel", {
//       name: "Aurora Hotel",
//       description:
//         "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 100,
//       city: "Taichung, Taiwan",
//       availability: [true],
//     });
//     server.create("hotel", {
//       name: "Lorde Hotel",
//       description:
//         "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 200,
//       city: "Xi'an, China",
//       availability: [false],
//     });
//     server.create("hotel", {
//       name: "Deer Hotel",
//       description:
//         "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 300,
//       city: "Phnom Penh, Cambodia",
//       availability: [true],
//     });
//     server.create("hotel", {
//       name: "Maple Hotel",
//       description:
//         "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 300,
//       city: "Sapporo, Japan",
//       availability: [true],
//     });
//     server.create("hotel", {
//       name: "Frodo Hotel",
//       description:
//         "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 400,
//       city: "Brisbane, Australia",
//       availability: [false],
//     });
//     server.create("hotel", {
//       name: "Judes Hotel",
//       description:
//         "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
//       image: "../assets/images/postel-hotelimg.jpg",
//       price: 500,
//       city: "Semarang, Indonesia",
//       availability: [true],
//     });
//     server.create("user", {
//       id: "123",
//       name: "John Doe",
//       email: "w@w.com",
//       password: "123",
//     });
//   },
//   routes() {
//     this.namespace = "api";

//     this.get("/hotels", (schema) => {
//       return schema.hotels.all();
//     });

//     this.post("/hotels", (schema, request) => {
//       let attrs = JSON.parse(request.requestBody);
//       return schema.hotels.create(attrs);
//     });

//     this.get("/hotels/:id", (schema, request) => {
//       let id = request.params.id;

//       return schema.hotels.find(id);
//     });

//     this.patch("/hotels/:id", (schema, request) => {
//       let newAttrs = JSON.parse(request.requestBody);
//       let id = request.params.id;
//       let hotel = schema.hotels.find(id);

//       return hotel.update(newAttrs);
//     });

//     this.delete("/hotels/:id", (schema, request) => {
//       let id = request.params.id;

//       return schema.hotels.find(id).destroy();
//     });

//     this.post("/login", (schema, request) => {
//       let attrs = JSON.parse(request.requestBody);
//       let user = schema.users.findBy({ email: attrs.email });
//       if (user) {
//         return user;
//       } else {
//         return new Response(
//           401,
//           { some: "header" },
//           { errors: ["Invalid credentials"] },
//         );
//       }
//     });
//   },
// });
