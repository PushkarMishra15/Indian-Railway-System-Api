import axios from "axios";
import Ticket from "../models/ticket-schema.js";

// Data of the train from the railway api

export const trainInfo = async(req, res) =>{
    
    const from = req.params.from;
    const to = req.params.to;

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        params: {
          fromStationCode: from,
          toStationCode: to,
          dateOfJourney: '2024-01-21'
        },
        headers: {
          'X-RapidAPI-Key': 'YOUR API KEY',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return res.status(201).json(response.data);
      } catch (error) {
          console.error(error);
      }

}

// Check availability

export const checkAvailability = async(req, res) =>{
  
  const from = req.params.from;
  const to = req.params.to;
  const coach = req.params.class;
  const trainno = req.params.trainno;
  const date = req.params.date;

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
    params: {
      classType: coach,
      fromStationCode: from,
      quota: 'GN',
      toStationCode: to,
      trainNo: trainno,
      date: date
    },
    headers: {
      'X-RapidAPI-Key': 'YOUR API KEY',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response);
      return res.status(200).json(response.data);
  } catch (error) {
      console.error(error);
  }

}

// Book Ticket for the train 

export const bookTicket = async(req, res) =>{
     
  const {name, age, from , to , coach, trainno, date} = req.body;

  
  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability',
    params: {
      classType: coach,
      fromStationCode: from,
      quota: 'GN',
      toStationCode: to,
      trainNo: trainno,
      date: date
    },
    headers: {
      'X-RapidAPI-Key': 'YOUR API KEY',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
      const ticket = new Ticket({
        name : name,
        age : age,
        class : coach,
        seatstatus : response.data.data[0].current_status,
        trainno : trainno,
        date : date
       });
      
      try{

        await ticket.save();

      }catch(err){
        console.log("mongodb error is ", err);
      }

      return res.status(201).json([{message: "Congratulations Your Ticket has been Booked"},{ticket}]);

  } catch (err) {
      console.error("response error is ",err);
  }

  
}