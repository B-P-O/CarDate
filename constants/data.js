// cars.js
import images from "./images"; // Adjust path
import icons from "./icons"; // Assuming you have an icons file
export const cards = [
  {
    id: "1",
    title: "Tesla Model 3",
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    price: "$40,000",
    rating: 4.9,
    fueltype: "Electric",
     vehicletype: "Sedan",
    image: images.TeslaModel,
    horsepower: "283",
    seatcapacity: "5", // Changed from seatCapacity
    range: "263",
    topspeed: "140", // Changed from "top speed"
    mph: "5.3", // Changed from "0-60 mph"
    description: "The 2020 Tesla Model 3 is an electric sedan with impressive range, cutting-edge tech, and exhilarating performance."
  },
  {
    id: "2",
    title: "Ford F-150",
    make: "Ford",
    model: "F-150",
    year: 2020,
    price: "$35,000",
    rating: 4.8,
    fueltype: "Gasoline",
     vehicletype: "Truck",
    image: images.Ford,
    horsepower: "395",
    seatcapacity: "6",
    range: "600",
    topspeed: "107",
    mph: "5.9",
    description: "The 2020 Ford F-150 is a versatile full-size pickup known for its robust towing capacity and variety of engine options, making it a favorite for work and play."
  },
  {
    id: "3",
    title: "Toyota RAV4 Hybrid",
    make: "Toyota",
    model: "RAV4",
    year: 2020,
    price: "$28,000",
    rating: 4.8,
    fueltype: "Hybrid",
     vehicletype: "SUV",
    image: images.ToyotaRAV4,
    horsepower: "219",
    seatcapacity: "5",
    range: "580",
    topspeed: "117",
    mph: "7.8",
    description: "The 2020 Toyota RAV4 Hybrid is a compact SUV offering great fuel economy, all-wheel drive, and family-friendly space."
  },
  {
    id: "4",
    title: "Chevrolet Silverado",
    make: "Chevrolet",
    model: "Silverado",
    year: 2020,
    price: "$34,000",
    rating: 4.7,
    fueltype: "Gasoline",
     vehicletype: "Truck",
    image: images.ChevroletSilverad,
    horsepower: "355",
    seatcapacity: "6",
    range: "480",
    topspeed: "114",
    mph: "6.6",
    description: "The 2020 Chevrolet Silverado offers strong towing capabilities and a spacious cabin, blending rugged utility with modern comfort."
  },
  {
    id: "5",
    title: "Porsche Taycan",
    make: "Porsche",
    model: "Taycan",
    year: 2020,
    price: "$100,000",
    rating: 4.9,
    fueltype: "Electric",
     vehicletype: "Sedan",
    image: images.PorscheTaycan,
    horsepower: "402",
    seatcapacity: "4",
    range: "227",
    topspeed: "155",
    mph: "3.8",
    description: "The 2020 Porsche Taycan is a high-performance electric sedan with stunning acceleration and Porsche’s signature handling."
  },
  {
    id: "6",
    title: "Toyota Camry",
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: "$25,000",
    rating: 4.7,
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.ToyotaCamry,
    horsepower: "203",
    seatcapacity: "5",
    range: "475",
    topspeed: "135",
    mph: "7.6",
    description: "The 2020 Toyota Camry is a reliable midsize sedan offering a smooth ride, excellent fuel economy, and a reputation for durability."
  },
  {
    id: "7",
    title: "Rivian R1T",
    make: "Rivian",
    model: "R1T",
    year: 2022,
    price: "$70,000",
    rating: 4.7,
    fueltype: "Electric",
     vehicletype: "Truck",
    image: images.Rivian,
    horsepower: "835",
    seatcapacity: "5",
    range: "314",
    topspeed: "125",
    mph: "3.0",
    description: "The 2022 Rivian R1T is an all-electric adventure truck with off-road prowess and remarkable power."
  },
  {
    id: "8",
    title: "Honda Civic",
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: "$22,000",
    rating: 4.6,
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.HondaCivic,
    horsepower: "158",
    seatcapacity: "5",
    range: "400",
    topspeed: "137",
    mph: "8.2",
    description: "The 2020 Honda Civic is a compact sedan celebrated for its sporty handling, efficiency, and practical interior space."
  },
  {
    id: "9",
    title: "BMW i4",
    make: "BMW",
    model: "i4",
    year: 2022,
    price: "$55,000",
    rating: 4.8,
    fueltype: "Electric",
     vehicletype: "Sedan",
    image: images.BMWi4,
    horsepower: "335",
    seatcapacity: "5",
    range: "301",
    topspeed: "118",
    mph: "5.5",
    description: "The 2022 BMW i4 blends luxury with electric efficiency, offering a sporty drive and premium interior."
  },
  {
    id: "10",
    title: "Dodge Charger",
    make: "Dodge",
    model: "Charger",
    year: 2020,
    price: "$30,000",
    rating: 4.5,
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.DodgeCharger,
    horsepower: "292",
    seatcapacity: "5",
    range: "425",
    topspeed: "131",
    mph: "6.4",
    description: "The 2020 Dodge Charger is a bold full-size sedan with muscle-car roots, delivering strong performance and a spacious cabin."
  },
  {
    id: "11",
    title: "Jeep Wrangler 4xe",
    make: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "$50,000",
    rating: 4.7,
    fueltype: "Hybrid",
     vehicletype: "SUV",
    image: images.JeepWrangler,
    horsepower: "375",
    seatcapacity: "5",
    range: "370",
    topspeed: "110",
    mph: "6.0",
    description: "The 2021 Jeep Wrangler 4xe is a plug-in hybrid SUV combining off-road legend status with eco-conscious efficiency."
  },
  {
    id: "12",
    title: "Ford Mustang",
    make: "Ford",
    model: "Mustang",
    year: 2020,
    price: "$32,000",
    rating: 4.8,
    fueltype: "Gasoline",
     vehicletype: "Coupe",
    image: images.FordMustang,
    horsepower: "310",
    seatcapacity: "4",
    range: "400",
    topspeed: "155",
    mph: "5.1",
    description: "The 2020 Ford Mustang is an iconic sports car blending classic style with modern performance, perfect for driving enthusiasts."
  },
  {
    id: "13",
    title: "Lucid Air",
    make: "Lucid",
    model: "Air",
    year: 2022,
    price: "$80,000",
    rating: 4.8,
    fueltype: "Electric",
     vehicletype: "Sedan",
    image: images.LucidAir,
    horsepower: "620",
    seatcapacity: "5",
    range: "516",
    topspeed: "168",
    mph: "3.0",
    description: "The 2022 Lucid Air is a luxury electric sedan boasting exceptional range and powerful acceleration."
  },
  {
    id: "14",
    title: "Chevrolet Malibu",
    make: "Chevrolet",
    model: "Malibu",
    year: 2020,
    price: "$24,000",
    rating: "4.5",
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.ChevyMalibu,
    horsepower: "150",
    seatcapacity: "5",
    range: "450",
    topspeed: "130",
    mph: "8.5",
    description: "The 2020 Chevrolet Malibu is a midsize sedan offering a comfortable ride, decent efficiency, and a sleek design."
  },
  {
    id: "15",
    title: "Tesla Cybertruck",
    make: "Tesla",
    model: "Cybertruck",
    year: 2023,
    price: "$60,000",
    rating: 4.6,
    fueltype: "Electric",
     vehicletype: "Truck",
    image: images.CyberTruck,
    horsepower: "600",
    seatcapacity: "6",
    range: "340",
    topspeed: "120",
    mph: "4.5",
    description: "The 2023 Tesla Cybertruck is a futuristic electric truck with a rugged design and versatile capabilities."
  },
  {
    id: "16",
    title: "Toyota Prius",
    make: "Toyota",
    model: "Prius",
    year: 2020,
    price: "$25,000",
    rating: 4.6,
    fueltype: "Hybrid",
     vehicletype: "Hatchback",
    image: images.ToyotaCamry,
    horsepower: "121",
    seatcapacity: "5",
    range: "600",
    topspeed: "112",
    mph: "10.5",
    description: "The 2020 Toyota Prius is a hybrid hatchback renowned for its exceptional fuel efficiency and eco-friendly design."
  },
  {
    id: "17",
    title: "Nissan Altima",
    make: "Nissan",
    model: "Altima",
    year: 2020,
    price: "$26,000",
    rating: 4.6,
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.NissanAltima,
    horsepower: "188",
    seatcapacity: "5",
    range: "500",
    topspeed: "130",
    mph: "7.4",
    description: "The 2020 Nissan Altima is a midsize sedan with a refined ride, available AWD, and a focus on comfort and technology."
  },
  {
    id: "18",
    title: "BMW i7",
    make: "BMW",
    model: "i7",
    year: 2023,
    price: "$120,000",
    rating: 4.9,
    fueltype: "Electric",
     vehicletype: "Sedan",
    image: images.BMWi7,
    horsepower: "536",
    seatcapacity: "5",
    range: "318",
    topspeed: "130",
    mph: "4.5",
    description: "The 2023 BMW i7 is a luxurious electric sedan with top-tier performance and a plush, high-tech cabin."
  },
  {
    id: "19",
    title: "Hyundai Sonata",
    make: "Hyundai",
    model: "Sonata",
    year: 2020,
    price: "$23,000",
    rating: 4.5,
    fueltype: "Gasoline",
     vehicletype: "Sedan",
    image: images.HyundaiSonata,
    horsepower: "191",
    seatcapacity: "5",
    range: "475",
    topspeed: "135",
    mph: "7.7",
    description: "The 2020 Hyundai Sonata is a stylish midsize sedan with advanced tech, solid efficiency, and a competitive price point."
  },
  {
    id: "20",
    title: "GMC Sierra",
    make: "GMC",
    model: "Sierra",
    year: 2020,
    price: "$36,000",
    rating: 4.6,
    fueltype: "Gasoline",
     vehicletype: "Truck",
    image: images.GMC,
    horsepower: "355",
    seatcapacity: "6",
    range: "480",
    topspeed: "114",
    mph : "6.6",
    description: "The 2020 GMC Sierra combines upscale styling with powerful performance, appealing to those seeking a premium truck experience."
  },
];

export const featuredCards = [
  { ...cards.find((c) => c.title === "Tesla Model 3") },
  { ...cards.find((c) => c.title === "Porsche Taycan") },
  { ...cards.find((c) => c.title === "Ford F-150") },
  { ...cards.find((c) => c.title === "BMW i7") },
  { ...cards.find((c) => c.title === "Toyota RAV4 Hybrid") },
  { ...cards.find((c) => c.title === "Lucid Air") },
  { ...cards.find((c) => c.title === "Rivian R1T") },
  { ...cards.find((c) => c.title === "Tesla Cybertruck") },
  { ...cards.find((c) => c.title === "Ford Mustang") },
  { ...cards.find((c) => c.title === "Chevrolet Silverado") },
];

// Categories based on fueltype and  vehicletype
export const categories = [
  { title: "All", category: "All" },
  { title: "Gasoline", category: "Gasoline" }, // Fuel Type
  { title: "Electric", category: "Electric" }, // Fuel Type
  { title: "Hybrid", category: "Hybrid" }, // Fuel Type
  { title: "Sedans", category: "Sedan" }, // Vehicle Type
  { title: "Trucks", category: "Truck" }, // Vehicle Type
  { title: "SUVs", category: "SUV" }, // Vehicle Type
  { title: "Coupes", category: "Coupe" }, // Vehicle Type
  { title: "Hatchbacks", category: "Hatchback" }, // Vehicle Type
];

// Facilities for efficiency/performance
export const facilities = [
  {
    title: "Fuel Type",
    icon: icons.range, // Clock or speed icon
  },
  {
    title: "Year",
    icon: icons.year, // Clock or speed icon
  },
  {
    title: "Horsepower",
    icon: icons.horsepower, // Add to icons.js (e.g., a horsepower symbol)
  },
  {
    title: "Seat Capacity",
    icon: icons.capacity, // Gas pump or efficiency icon
  },
  {
    title: "Range",
    icon: icons.Range1, // Battery icon for EVs
  },
  {
    title: "Top Speed",
    icon: icons.speed, // Speedometer icon
  },
  {
    title: "MPH",
    icon: icons.acceleration, // Clock or speed icon
  },
 
  {
    title: "Vehicle Type",
    icon: icons.VehiclesType, // Clock or speed icon
  }
];

// Settings (unchanged but car-themed)
export const settings = [
  {
    title: "Your Profile",
    icon: icons.profile,
  },
  {
    title: "My BookMark",
    icon: icons.bookmarkPage,
  },
  {
    title: "Dark Mode",
    icon: icons.checkBox,
  },
  {
    title: "Google Map ",
    icon: icons.Google,
  },
  {
    title: "Payments",
    icon: icons.Payments,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.Security,
  }, 
 
  
];
