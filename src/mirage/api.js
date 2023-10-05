export async function getUsers() {
  const res = await fetch("/api/users");
  const json = await res.json();
  return json;
}

export async function getHotels() {
  const res = await fetch("/api/hotels");
  const json = await res.json();
  return json;
}

// export async function getHotels(id) {
//   const url = id ? `/api/hotels/${id}` : "/api/hotels";
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw {
//       message: "failed to fetch hotels",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   console.log(data);
//   return data.hotels;
// }
