const DB = {
  UserDB: [
    {
      id: 1,
      nombre: "Kyle",
      meetings: [
        { id: 1, hour: "13:30AM" },
        { id: 2, hour: "14:30PM" },
        { id: 13, hour: "18PM" }
      ]
    },
    {
      id: 2,
      nombre: "Paul",
      meetings: [
        { id: 3, hour: "7AM" },
        { id: 4, hour: "9AM" },
        { id: 4, hour: "13:30AM" },
        { id: 4, hour: "15:00AM" }
      ]
    },
    {
      id: 3,
      nombre: "Alex",
      meetings: [
        { id: 3, hour: "8AM" },
        { id: 4, hour: "9:30AM" },
        { id: 4, hour: "12:30PM" },
        { id: 4, hour: "15PM" }
      ]
    },
    {
      id: 4,
      nombre: "Luis",
      meetings: [
        { id: 3, hour: "9AM" },
        { id: 4, hour: "13:30PM" },
        { id: 4, hour: "15:00PM" },
        { id: 4, hour: "15:30PM" }
      ]
    },
    {
      id: 5,
      nombre: "Jairo",
      meetings: [
        { id: 3, hour: "8AM" },
        { id: 4, hour: "9AM" },
        { id: 4, hour: "18PM" }
      ]
    },
    {
      id: 6,
      nombre: "Sonya",
      meetings: [
        { id: 3, hour: "8AM" },
        { id: 4, hour: "12:30PM" },
        { id: 4, hour: "13:30PM" },
        { id: 4, hour: "15:30PM" }
      ]
    }
  ],
  ScheduleDB: [
    { hour: "7AM" },
    { hour: "7:30AM" },
    { hour: "8AM" },
    { hour: "8:30AM" },
    { hour: "9AM" },
    { hour: "9:30AM" },
    { hour: "10AM" },
    { hour: "10:30AM" },
    { hour: "11AM" },
    { hour: "11:30AM" },
    { hour: "12PM" },
    { hour: "12:30PM" },
    { hour: "13PM" },
    { hour: "13:30PM" },
    { hour: "14PM" },
    { hour: "14:30PM" },
    { hour: "15PM" },
    { hour: "15:30PM" },
    { hour: "16PM" },
    { hour: "16:30PM" },
    { hour: "17PM" }
  ],
  EventsDB: []
};

export default DB;