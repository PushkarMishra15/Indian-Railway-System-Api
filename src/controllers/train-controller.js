import axios from "axios";

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
          'X-RapidAPI-Key': 'a35fa2e549mshb52d05bb8848201p1c6e35jsn2b2058e1811b',
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

// Book Ticket for the train

export const bookTicket = (req, res) =>{
    return res.status(200).json({message: "Ticked Booked !"});
}