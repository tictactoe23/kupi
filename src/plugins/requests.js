import axios from "axios";

export const getTicket = async (
  departure,
  arrival,
  date,
  adult,
  child,
  infant,
  isBusinessClass = false
) => {
  let resultArr = [];

  let response = await axios.post(
    "https://flights-api-shopping-target-site.kupibilet.ru/v4/search/new",
    {
      passengers: {
        adult: adult,
        child: child,
        infant: infant,
      },
      parts: [
        {
          departure: departure,
          arrival: arrival,
          date: date,
        },
      ],
      options: {
        cabin_class: `${isBusinessClass ? "C" : "Y"}`,
        agent: "loc747",
        tag: "aaa0000",
        isShortLifeCPCAgent: false,
        client_id: "8af58a56-8f71-4566-9e44-7ffa6bfa2738",
        visit_id: "b839490d-5517-4fbf-a325-dfb51bc9f870",
        ab_tag: "expirevalid",
        features: ["seat_selection", "refund_btn"],
        connection_search: true,
        client_name: "site_t",
        locale: "en",
        country: "US",
      },
    }
  );

  if (response.data.status == "fail") {
    return false;
  }

  let tickets = response.data.tickets;
  let timetables = response.data.timetable[0];
  let codes = response.data.codes;

  for (let i = 0; i < tickets.length; i++) {
    let resultObj = {
      price: "",
      aircraft: "",
      departureTime: "",
      arrivalTime: "",
      flightTime: "",
      departureAirport: "",
      arrivalAirport: "",
      airline: "",
      departureCity: "",
      arrivalCity: "",
    };
    let ticket = tickets[i];
    let timetableSegments = timetables[i].segments;

    let flightTime = 0;

    let price = ticket.min_price.toString();
    let priceIntegerPart = price.substr(0, price.length - 2);
    let priceFractionalPart = price.substr(-2);

    let aircraft = timetableSegments[0].equipment;
    resultObj.aircraft = codes.aircrafts[aircraft];

    resultObj.price = `${priceIntegerPart}.${priceFractionalPart}`;
    resultObj.departureTime = timetableSegments[0].departure_time;
    let departureAirportCode = timetableSegments[0].departure_airport;
    let departureAirportString = codes.airports[departureAirportCode];
    let airline = timetableSegments[0].airline;
    resultObj.departureAirport = departureAirportString.airport;
    resultObj.departureCity = `${departureAirportString.city.city}, ${departureAirportString.city.country}`;
    resultObj.airline = codes.airlines[airline].name;

    if (timetableSegments.length == 1) {
      flightTime = timetableSegments[0].flight_time;
      resultObj.arrivalTime = timetableSegments[0].arrival_time;
      let arrivalAirportCode = timetableSegments[0].arrival_airport;
      let arrivalAirportString = codes.airports[arrivalAirportCode];
      resultObj.arrivalAirport = arrivalAirportString.airport;
      resultObj.arrivalCity = `${arrivalAirportString.city.city}, ${arrivalAirportString.city.country}`;
    } else {
      resultObj.arrivalTime =
        timetableSegments[timetableSegments.length - 1].arrival_time;
      let arrivalAirportCode =
        timetableSegments[timetableSegments.length - 1].arrival_airport;
      let arrivalAirportString = codes.airports[arrivalAirportCode];
      resultObj.arrivalAirport = arrivalAirportString.airport;
      resultObj.arrivalCity = `${arrivalAirportString.city.city}, ${arrivalAirportString.city.country}`;

      for (let j = 0; j < timetableSegments.length; j++) {
        let timetableSegment = timetableSegments[j];
        flightTime += timetableSegment.flight_time;
      }
    }

    let flightHours = Math.floor(flightTime / 60);
    let flightMinutes = Math.round((flightTime / 60 - flightHours) * 60);
    resultObj.flightTime = `${flightHours}h ${flightMinutes}min`;

    resultArr.push(resultObj);
  }
  return resultArr;
};

export const getCountry = async (searchStr) => {
  let resultArr = [];
  let response = await axios.get(
    `https://hinter.kupibilet.ru/hinter.json?limit=10&str=${searchStr}`
  );
  let cities = response.data.data;

  for (let i = 0; i < cities.length; i++) {
    let resultObj = {
      city: "",
      country: "",
      code: "",
    };
    let cityObj = cities[i];

    resultObj.city = cityObj.city.name.en;
    resultObj.code = cityObj.city.code;
    resultObj.country = cityObj.country.en;

    resultArr.push(resultObj);
  }
  return resultArr;
};
