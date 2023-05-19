import {img1} from './assets/asset'
const news = [
  {
    heading : "Solar Energy workshop 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "08",
    month: "APR",
    id: 1,
    imgSrc: {img1},
  },
  {
    heading : "Smart India Hackathon Project 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "10",
    month: "MAR",
    id: 2,
  },
  {
    heading : "BIT honors RDC Cadet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "07",
    month: "APR",
    id: 3,
  },
  {
    heading : "ATAL FDP @ Department of ETC",
    description: "Department of ETC are having ATAL FDP  ",
    date: "06",
    month: "JUN",
    id: "4",
  },
  {
    heading : "Speech Competition",
    description: "Poet's and Author's of BIT it's time to showcase your talent.",
    date: "05",
    month: "JAN",
    id: "5",
  },
  {
    heading : "FDP on Green Technology",
    description: "BIT is taking steps toward green Energy",
    date: "13",
    month: "DEC",
    id: "6",
  },
]

const color = {
  bitLightBlue : "#7EB2DD",
  bitBlue : "#062242",
  bitRed : "#800000"
}


const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "",
  paragraph:
    "",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexEnd: "flex justify-end items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  
};

export default styles;
export {color, news};

