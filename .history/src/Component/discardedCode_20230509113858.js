import React from 'react'

const discardedCode = () => {
  return (
    <>
        {/* Old Navbar Idea */}
        <div
        className={`bg-bit-red font-bold text-[14px] h-10 flex justify-center items-center gap-5 w-full basis-0 grow`}
      >
        <div className="flex items-center">
          <Button variant="text" sx={buttonStyle}>
            Event
          </Button>
          <Button variant="text" sx={buttonStyle}>
            News
          </Button>
          <Button variant="text" sx={buttonStyle}>
            Careers
          </Button>
          <Button variant="text" sx={buttonStyle}>
            Info On
          </Button>
          {/* <ul className={`${styles.flexEnd}`}>
            <li>EVENT</li>
            <li>NEWS</li>
            <li>CAREERS</li>
            <li className={`${styles.flexEnd}`}>
              INFO ON
              <span>
                <img src={downArrow} alt="Down Arrow" />
              </span>
            </li>
          </ul> */}
        </div>

        <div className={`w-[340px] h-[135px] bg-white inline-block`}>
          {/* <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          /> */}
        </div>

        <div className={`flex items-center basis-0 grow`}>
          <Button variant="text" sx={buttonStyle}>
            About
          </Button>
          <Button variant="text" sx={buttonStyle}>
            Visit
          </Button>
          <Button variant="text" sx={buttonStyle}>
            Contact Us
          </Button>
          <Button variant="text" sx={buttonStyle}>
            IIC
          </Button>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            sx={{ borderColor: "white" }}
            inputProps={{
              "aria-label": "weight",
            }}
          />
          {/* <TextField
            {...params}
            label="Find Department"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          /> */}
          {/* <ul className={`${styles.flexStart}`}>
            <li>ABOUT</li>
            <li>VISIT</li>
            <li>CONTACT US</li>
            <li>IIC</li>
          </ul>
          <div>
            <p>Find Department</p>
            <img src={search} alt="Search" />
          </div> */}
        </div>
      </div>
      
      <div>
      {/* <div
          className="bg-white border-4 border-black rounded-xl absolute top-[8vw] left-[12vw] z-10
          h-[20vw] w-[30vw]"
        > */}
        <div
          className="bg-white border-4 border-black rounded-xl absolute top-[8vw] left-[12vw] z-10
          lg:h-[270px] lg:w-[440px]
          md:h-[215px] md:w-[350px] "
        >
          <img
            src={startDoubleQuote}
            alt="startDoubleQuote"
            className="absolute top-[-40px] left-[-5px]"
          />
          <img
            src={deppHeard}
            alt="Depp Heard Lawsuit"
            className="object-cover h-full w-full p-1 rounded-xl"
          />
        </div>
        {/* <div
          className="bg-white border-4 border-black rounded-xl absolute bottom-[8vw] right-[12vw]
          h-[25vw] w-[39vw]"
        > */}
        <div
          className="bg-white border-4 border-black rounded-xl absolute bottom-[8vw] right-[12vw]
          lg:h-[385px] lg:w-[605px]
          md:h-[286px] md:w-[450px]"
        >
          <img
            src={endDoubleQuote}
            alt="endDoubleQuote"
            className="absolute bottom-[-40px] right-[-5px]"
          />
          <div className="mx-20 flex items-center justify-center h-full">
            <div>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  textAlign: "justify",
                  lineHeight: "30px",
                }}
              >
                Bhilai Institute Of Technology, Durg, with a mission to provide
                world class technical manpower to serve the industry, profession
                and society and to contribute effectively to the national
                economic development, has acquired the status of one of the
                premier technological institutions of India. Read more...
              </Typography>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  textAlign: "justify",
                  lineHeight: "30px",
                  pt: 1,
                }}
              >
                - Dr. Arun Arora, Director
              </Typography>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default discardedCode