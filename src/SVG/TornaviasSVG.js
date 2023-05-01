/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react"
import ClassroomCard from '../Molecules/ClassroomCard'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import "./TornaviasSVG.css"

export const TornaviasSVG = (props) => {

  const [position, setPosition] = useState({x: 0, y: -100})

  const setNewPosition = (position) => {
    //setPosition(position)
    
    props.showCardFunc()
  }

    return (
<div className='imageContainer'>

<div className='imageHolder'>

<Box style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          className='cardInfo'></Box>

<svg
  id="svg1"
  version="1.1"
  viewBox="0 0 230 230"
  xmlns="http://www.w3.org/2000/svg"
  className='imageItself'
>
  <g id="layer1">
    <g fill="none" stroke="#000">
      <g>
        <path
          id="path1"
          d="m95.228 199.33a93.68 87.072 0 0 1-70.209-63.2"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path1-4"
          d="m25.366 92.379a93.68 87.072 0 0 1 48.19-55.706 93.68 87.072 0 0 1 76.818-3.4053"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path1-1"
          d="m176.07 47.576a93.212 86.84 0 0 1 31.367 86.009 93.212 86.84 0 0 1-68.102 65.008"
          strokeWidth=".99618"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <g>
          <path
            id="path4"
            d="m101.4 173.71a65.942 60.809 0 0 1-40.789-26.726"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path4-9"
            d="m56.026 138.84a65.942 60.809 0 0 1-3.6587-9.4542"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path4-3"
            d="m177.43 136.5a65.942 60.809 0 0 1-44.986 36.985"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path4-3-5"
            d="m157.97 67.265a65.942 60.809 0 0 1 22.498 60.062"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path4-3-5-5"
            d="m100.04 55.702a65.942 60.809 0 0 1 49.288 5.9304"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path4-3-5-5-6"
            d="m54.419 91.704a65.942 60.809 0 0 1 35.856-33.212"
            style={{ paintOrder: "stroke fill markers" }}
          />
        </g>
        <g strokeWidth="1.0074">
          <path
            id="path5"
            d="m104.57 161.04a51.871 48.015 0 0 1-32.301-21.056"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path5-1"
            d="m68.589 133.62a51.871 48.015 0 0 1-2.8029-7.4152"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path5-5"
            d="m164.21 131.79a51.871 48.015 0 0 1-34.931 28.989"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path5-5-1"
            d="m154.88 82.467a51.871 48.015 0 0 1 11.743 42.075"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path5-5-1-1"
            d="m103.11 67.767a51.871 48.015 0 0 1 32.065 1.8552"
            style={{ paintOrder: "stroke fill markers" }}
          />
          <path
            id="path5-5-1-1-2"
            d="m67.97 96.593a51.871 48.015 0 0 1 27.675-26.343"
            style={{ paintOrder: "stroke fill markers" }}
          />
        </g>
      </g>
      <g>
        <path
          id="path2"
          d="m98.155 186.74a79.74 74.213 0 0 1-59.248-54.213"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path2-0"
          d="m39.241 95.601a79.74 74.213 0 0 1 41.082-47.242 79.74 74.213 0 0 1 65.232-2.834"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path2-1"
          d="m148.67 46.568a79.74 74.213 0 0 1 8.0041 3.8177"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path2-4"
          d="m167.38 57.187a79.74 74.213 0 0 1 26.867 73.441 79.74 74.213 0 0 1-58.141 55.596"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path2-4-0"
          d="m131.98 187.14a79.74 74.213 0 0 1-8.7382 1.2496"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
    <circle
      id="path34"
      cx="129.49"
      cy="160.76"
      r=".044712"
      stroke="#000"
      strokeWidth=".26458"
    />
    <g fill="none" stroke="#000">
      <path
        id="path35"
        d="m129.37 160.84 3.3913 12.498"
        strokeWidth=".5"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g strokeWidth=".5">
        <path
          id="path36"
          d="m142.69 170.23-5.715-11.775"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path37"
          d="m150.66 166.33-7.4107-10.865"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path38"
          d="m158.83 160.93-9.2633-9.8286"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path39"
          d="m172.77 145.26-11.964-6.5314"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path42"
          d="m177.76 136.88-14.005-5.1498"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path43"
          d="m180.87 127.08-14.476-2.8575"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path44"
          d="m181.84 108.68-14.162 1.256"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path45"
          d="m176.82 90.498-12.906 5.244"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path46"
          d="m165.11 73.698-10.017 8.9179"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path47"
          d="m159.24 78.911-6.2802-5.4952"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path48"
          d="m158.42 67.293-5.4638 6.3116"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path49"
          d="m148.86 46.673 3.9079-8.1711"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path50"
          d="m161.42 42.498-8.704-4.0411"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path51"
          d="m156.4 50.403 4.9737-7.8602"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path52"
          d="m167.49 57.276 8.7923-9.6715"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path53"
          d="m186.05 56.365-10.08 8.4155"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path54"
          d="m202.38 80.45-12.278 5.1184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path55"
          d="m207.12 93.607-13.188 3.2657"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path56"
          d="m209.26 106.17-13.377 1.1932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path57"
          d="m209.73 119.45-13.502-0.40821"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path58"
          d="m207.5 133.17-13.157-2.6063"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path59"
          d="m203.48 145.83-12.403-4.616"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path60"
          d="m196.76 158.61-11.43-6.4686"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path61"
          d="m187.12 171.17-10.174-8.2271"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path62"
          d="m176.54 180.84-8.6981-9.6087"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path63"
          d="m165.36 188.25-7.2851-10.394"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path64"
          d="m153.9 193.9-5.5266-11.43"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path65"
          d="m146.45 196.67-4.2078-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path66"
          d="m136.09 185.96 3.5797 12.655"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path67"
          d="m133.89 195.97-1.9783-8.8551"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path68"
          d="m123.53 188.28 0.72223 9.1063"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path69"
          d="m133.89 196.01-9.6087 1.3816"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path70"
          d="m98.008 186.65-2.8421 12.701"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path71"
          d="m86.995 183.49-5.1513 11.99"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path72"
          d="m65.99 171.77-9.0592 10.214"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path73"
          d="m56.975 163.87-10.48 9.148"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path74"
          d="m48.627 153.61-12.035 7.3717"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path75"
          d="m42.898 143.22-13.278 5.8174"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path76"
          d="m38.857 132.91-13.944 3.4638"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path77"
          d="m101.16 173.72 3.153-12.656"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path78"
          d="m74.472 161.56 9.148-9.8141"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path79"
          d="m60.75 147.17 11.812-7.0164"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path80"
          d="m68.433 133.45-12.612 5.1957"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path81"
          d="m65.857 126.43-13.278 3.153"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path82"
          d="m81.831 78-8.8865-9.1691"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path83"
          d="m63.807 58.437-9.6715-9.5459"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path84"
          d="m73.604 51.623-7.7875-10.896"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path85"
          d="m84.343 46.411-5.558-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path86"
          d="m90.31 44.181-4.7416-12.184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path87"
          d="m96.307 42.486-3.3913-12.529"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path88"
          d="m108.68 40.57-1.6015-12.906"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path89"
          d="m121.3 40.507 0.62802-13.126"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path90"
          d="m134.11 42.046 3.0773-12.529"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path91"
          d="m145.32 45.312 4.7416-11.901"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path92"
          d="m95.365 70.244-5.244-11.556"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path93"
          d="m103.47 67.732-3.1401-12.089"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path94"
          d="m111.51 66.539-1.8841-12.498"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path95"
          d="m119.51 66.476 0.59662-12.78"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path96"
          d="m127.77 67.481 3.3913-12.341"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path97"
          d="m134.87 69.522 5.1812-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path98"
          d="m137.19 64.561 7.9131 3.5483"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path99"
          d="m149.19 61.295-4.145 6.8768"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path100"
          d="m94.944 157.91 5.9284-12.634"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path101"
          d="m94.034 141.55 6.8832 3.7303"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path102"
          d="m84.863 152.61 9.1702-11.08"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path103"
          d="m92.391 143.73 7.3939 3.9967"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path104"
          d="m99.274 148.83-7.616-4.0411"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path105"
          d="m90.548 145.7 8.1266 4.463"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path106"
          d="m98.141 151.3-8.3709-4.5518"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path107"
          d="m89.038 147.7 8.5263 4.8627"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path108"
          d="m97.098 153.63-9.0148-4.7516"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path109"
          d="m96.401 155.15-9.3889-5.1184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path110"
          d="m81.36 149.88 9.9228-10.237"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path111"
          d="m85.851 134.24 5.4952 5.3696"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path112"
          d="m73.793 141.93 11.995-7.6933"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path113"
          d="m83.731 135.62 5.9729 5.6842"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path114"
          d="m88.572 142.46-6.0617-5.9285"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path115"
          d="m87.75 143.42-6.5058-6.0839"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path116"
          d="m86.928 144.17-6.7722-6.2393"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path117"
          d="m85.818 145.19-6.8832-6.3059"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path118"
          d="m84.975 146.15-7.1053-6.639"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path119"
          d="m84.064 147.28-7.2829-7.0386"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path120"
          d="m80.073 79.225 11.21 10.268"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path121"
          d="m68.549 94.957 14.099 5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path122"
          d="m91.157 89.305-8.6039 11.304"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path123"
          d="m88.897 87.295-9.0435 12.215"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path124"
          d="m78.252 98.882 9.2633-12.843"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path125"
          d="m86.353 84.94-9.7343 13.188"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path126"
          d="m75.017 97.626 10.08-13.848"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path127"
          d="m83.778 82.554-10.457 14.319"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path128"
          d="m71.595 96.15 10.99-14.57"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path129"
          d="m85.662 79.476 9.2633-5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path130"
          d="m95.836 74.923-9.0749 5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path131"
          d="m87.955 81.926 8.4469-5.4952"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path132"
          d="m97.092 77.529-8.3213 5.3382"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path133"
          d="m89.682 83.967 7.8817-5.2126"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path134"
          d="m98.223 79.947-7.5991 4.9614"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path135"
          d="m91.566 86.07 7.2537-4.8044"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path136"
          d="m93.701 71.061 6.343 12.466"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path137"
          d="m83.715 77.09 9.4203 10.676"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path138"
          d="m100.04 83.276-7.0967 4.5218"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path139"
          d="m165.06 97.253-14.521 5.1069"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path140"
          d="m167.46 107.91-15.099 1.7319"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path141"
          d="m152.65 109.67-2.0872-7.2163"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path142"
          d="m155.14 109.33-2.1316-7.8158"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path143"
          d="m156.67 109.18-2.3092-8.06"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path144"
          d="m158.16 108.91-2.3758-8.3043"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path145"
          d="m159.71 108.82-2.7755-8.6373"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path146"
          d="m161.09 108.56-2.6645-8.8372"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path147"
          d="m162.51 108.4-2.7533-9.2368"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path148"
          d="m164.11 108.18-2.8865-9.4145"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path149"
          d="m167.9 111.91-15.292 0.65942"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path150"
          d="m166.93 123.19-14.696-2.7633"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path151"
          d="m152.64 112.42-0.37681 8.2271"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path153"
          d="m155.03 120.99 0.33306-8.4597"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path154"
          d="m156.47 121.32 0.46628-8.9482"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path155"
          d="m157.98 121.5 0.24424-9.1702"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path156"
          d="m159.27 121.86 0.48849-9.6143"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path157"
          d="m160.82 122.08 0.33306-9.8808"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path158"
          d="m162.2 122.25 0.5551-10.058"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path159"
          d="m163.67 122.52 0.44408-10.391"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
    <ellipse
      id="path160"
      cx="116.48"
      cy="114.2"
      rx="21.548"
      ry="20.574"
      fill="#666"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    />
    <g fill="#999" stroke="#000" strokeWidth=".25">
      <path
        id="path3"
        d="m124.19 196.24 9.5477-1.2878"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path6"
        d="m124.03 195.42 9.5033-1.2434"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path8"
        d="m124.12 194.4 9.1924-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path10"
        d="m123.99 193.57 9.1258-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path11"
        d="m123.99 192.73 8.9482-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path12"
        d="m123.94 192.02 8.815-1.1324"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g stroke="#000" strokeWidth=".38">
      <path
        id="path13"
        d="m131.88 186.65 0.1695 0.84336"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path14"
        d="m160.94 43.311-8.5593-3.9289"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path15"
        d="m160.5 44.083-8.4892-3.8353"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path16"
        d="m159.84 45.088-8.2085-3.9522"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path17"
        d="m159.19 45.977-8.0682-3.999"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path18"
        d="m158.74 46.796-8.0214-3.999"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g fill="#92ff92">
      <g stroke="#fff">
        <g strokeWidth=".50778">
          <path
            id="path152"
            transform="scale(.26458)"
            d="m572.78 711.79c-4.9461-10.257-9.2719-19.221-9.6129-19.919l-0.62001-1.2698 5.1935-2.2237c5.6488-2.4186 20.922-9.8412 26.106-12.687 2.9891-1.6409 3.2736-1.7304 3.7426-1.1786 1.0582 1.2452 25.096 35.736 25.099 36.014 0.0104 0.80808-22.311 12.155-33.454 17.006-3.6743 1.5996-6.8562 2.908-7.0711 2.9076-0.21481-3.8e-4 -4.4374-8.3929-9.3835-18.65z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title173">AULA 14</title>
          </path>
          <path
            id="path161"
            transform="scale(.26458)"
            d="m612.02 690.98c-7.0334-10.035-12.739-18.29-12.679-18.343 0.0602-0.0535 1.9391-1.178 4.1753-2.4989 8.5576-5.0547 20.486-13.041 27.4-18.345 1.5556-1.1933 3.0095-2.281 3.2308-2.417 0.37427-0.23005 30 32.047 30.362 33.08 0.36415 1.0382-20.08 15.348-33.631 23.541-2.9378 1.776-5.5056 3.2292-5.7063 3.2292s-6.1194-8.2106-13.153-18.246z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title172">AULA 13</title>
          </path>
          <path
            id="path162"
            transform="scale(.26458)"
            d="m651.64 664.53c-8.1805-9.0295-14.917-16.557-14.97-16.728-0.0528-0.17115 1.8132-1.8795 4.1466-3.7964 7.2454-5.9519 12.438-10.668 20.542-18.656l7.8143-7.7024 35.519 28.736-4.5375 4.5961c-7.2755 7.3695-13.02 12.882-18.348 17.606-5.8036 5.1459-14.555 12.363-14.991 12.363-0.16625 0-6.9954-7.3878-15.176-16.417z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title171">AULA 12</title>
          </path>
          <path
            id="path163"
            transform="scale(.26458)"
            d="m693.8 634.58c-6.7808-5.482-14.758-11.939-17.727-14.349l-5.3982-4.3816 3.6649-4.1322c7.872-8.8758 16.568-20.111 23.038-29.765 1.8896-2.8196 3.4746-5.1686 3.5222-5.2201 0.10174-0.10995 39.471 22.128 39.919 22.549 0.6745 0.63322-13.374 20.346-21.918 30.755-4.1863 5.1-11.334 13.319-12.23 14.062-0.46156 0.38295-2.3744-1.0316-12.871-9.5175z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title170">AULA 11</title>
          </path>
          <path
            id="path164"
            transform="scale(.26458)"
            d="m722.49 586.15c-10.889-6.1847-19.932-11.295-20.095-11.356-0.16291-0.0613 0.4967-1.3899 1.4658-2.9525 5.1561-8.3134 12.658-22.605 16.686-31.787 1.0236-2.3334 1.9815-4.3763 2.1287-4.5397 0.37295-0.41392 43.479 15.679 43.479 16.233 0 1.3976-9.7299 21.52-14.775 30.557-2.902 5.1977-8.4601 14.546-8.8478 14.882-0.13294 0.115-9.1512-4.8511-20.041-11.036z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title49">Laboratorio de Computacion IV</title>
          </path>
          <path
            id="path165"
            transform="scale(.26458)"
            d="m745.29 541.1c-11.57-4.3414-21.179-7.9521-21.354-8.0239-0.17481-0.0717 0.64164-2.5886 1.8143-5.593 2.7303-6.995 6.3816-18.107 8.57-26.081 1.6162-5.889 1.7636-6.2482 2.542-6.1952 1.4636 0.0996 44.658 8.687 44.932 8.9328 0.54561 0.48959-4.7531 18.88-8.4627 29.371-3.6199 10.238-5.828 15.559-6.4395 15.519-0.31078-0.0204-10.031-3.5891-21.601-7.9305z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title47">Laboratorio de Termodinamica</title>
          </path>
          <path
            id="path166"
            transform="scale(.26458)"
            d="m502.04 651.69c-0.21155-0.7292-2.8885-10.565-5.9487-21.857l-5.5641-20.531 3.1945-0.81048c4.1092-1.0426 15.262-4.6671 19.793-6.4327 1.9345-0.75374 3.6348-1.2508 3.7786-1.1046 0.32138 0.32677 19.751 40.367 19.751 40.703 0 0.29071-7.9274 3.3184-14.496 5.5363-4.4776 1.512-19.15 5.8224-19.819 5.8224-0.16765 0-0.47791-0.59662-0.68945-1.3258z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title177">AULA 17</title>
          </path>
          <path
            id="path167"
            transform="scale(.26458)"
            d="m529.38 620.35-9.9628-20.544 0.94723-0.43706c9.5392-4.4014 12.925-6.0331 16.323-7.867 2.5982-1.4021 4.22-2.0846 4.5003-1.8938 0.24101 0.16409 6.1699 8.7151 13.175 19.002 12.142 17.829 12.704 18.727 12.036 19.195-2.2663 1.5874-22.238 11.31-26.349 12.828-0.6416 0.23681-1.6301-1.6422-10.67-20.283z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title176">AULA 16</title>
          </path>
          <path
            id="path168"
            transform="scale(.26458)"
            d="m559.14 611.56c-5.4447-8.0101-11.279-16.588-12.966-19.063l-3.0662-4.499 3.5965-2.2004c4.9544-3.0312 10.319-6.6292 14.782-9.9151 2.0686-1.5228 3.8364-2.7687 3.9285-2.7687 0.29085 0 31.908 33.677 31.908 33.986 0 0.98244-24.887 17.844-27.86 18.876-0.2415 0.0838-4.6863-6.1232-10.324-14.417z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title175">Ingenieria en Energia</title>
          </path>
          <path
            id="path169"
            transform="scale(.26458)"
            d="m583.43 588.65c-8.7858-9.3196-15.962-17.066-15.948-17.214 0.0144-0.14813 1.7951-1.7012 3.957-3.4513 4.8263-3.9069 16.94-15.886 21.629-21.39 4.0478-4.7507 9.8173-12.339 12.947-17.028 1.2117-1.8155 2.2517-3.3597 2.3111-3.4316 0.13517-0.16351 41.155 22.181 41.807 22.773 0.39216 0.35627-0.0338 1.1946-2.4062 4.7357-7.9155 11.815-16.752 22.445-28.106 33.811-6.6488 6.6558-16.038 15.164-19.289 17.479l-0.92785 0.66069z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title174">AULA 15</title>
          </path>
          <path
            id="path171"
            transform="scale(.26458)"
            d="m758.9 497.19c-12.251-2.4374-22.297-4.4499-22.325-4.4721-0.0281-0.0222 0.3285-1.711 0.79248-3.7527 2.1066-9.2704 4.2123-22.796 5.1327-32.969l0.4398-4.8614 1.2625-2e-3c2.7118-5e-3 37.907 1.0713 41.704 1.2757l4.0254 0.21672-0.24086 3.586c-0.74361 11.071-3.2046 27.84-5.9354 40.444-0.99149 4.5761-1.1599 5.0349-1.8366 5.0024-0.40977-0.0196-10.768-2.03-23.019-4.4674z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title46">Laboratorio de Electronica II</title>
          </path>
          <path
            id="path172"
            transform="scale(.26458)"
            d="m766.68 449.57-23.335-0.6828v-15.934c0-10.379-0.16237-17.703-0.46578-21.007-0.25618-2.7903-0.41528-5.1163-0.35356-5.1689 0.2906-0.24772 46.288-4.1575 46.494-3.9519 0.92993 0.92993 1.9488 35.763 1.2839 43.893l-0.28919 3.5355z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title45">Laboratorio de Neuroingenieria</title>
          </path>
          <path
            id="path173"
            transform="scale(.26458)"
            d="m741.78 401.02c-1.1775-9.7218-3.3797-22.065-5.4718-30.669-0.47262-1.9438-0.82138-3.5721-0.77502-3.6184 0.14671-0.14671 44.46-11.055 44.909-11.055 1.4482 0 9.4267 43.222 8.2042 44.444-0.193 0.193-43.007 4.2311-45.874 4.3267-0.46571 0.0155-0.65446-0.63633-0.99259-3.428z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title44">Laboratiorio de Biologia</title>
          </path>
          <path
            id="path174"
            transform="scale(.26458)"
            d="m733.67 360.19c-2.5791-9.3569-7.7463-23.941-11.844-33.429l-1.2664-2.9323 1.4958-0.64091c14.953-6.407 41.047-17.016 41.277-16.783 1.0421 1.0568 8.6822 20.567 11.958 30.536 2.169 6.6011 4.6548 15.094 4.6462 15.875-5e-3 0.45322-4.4052 1.6477-22.185 6.0226-12.199 3.0015-22.338 5.5087-22.533 5.5715-0.19445 0.0628-0.89114-1.8361-1.5482-4.2198z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title43">Laboratorio de Biologia</title>
          </path>
          <path
            id="path175"
            transform="scale(.26458)"
            d="m717.73 317.73c-1.0063-2.1742-3.4084-6.9301-5.338-10.569-11.279-21.27-25.403-41.239-41.657-58.899l-3.3529-3.643 0.85677-0.82286c0.47122-0.45257 8.2533-6.9907 17.293-14.529l16.437-13.706 3.4807 3.6764c17.706 18.702 35.601 43.769 48.662 68.168 3.2657 6.1002 8.2599 16.304 8.0679 16.484-0.092 0.0861-40.165 16.836-41.866 17.5-0.69035 0.26923-0.90925-0.0407-2.5839-3.6589z"
            style={{ paintOrder: "stroke markers fill" }}
          >
            <title id="title34">Laboratorio de Quimica</title>
          </path>
        </g>
        <path
          id="path176"
          d="m163.91 94.492c-0.19882-0.44146-0.70638-1.4229-1.1279-2.181-1.7985-3.2344-3.6899-5.9378-6.0282-8.6159-0.5166-0.59167-0.93948-1.1001-0.93975-1.1298-7.9e-4 -0.08922 9.0859-8.1545 9.2009-8.1667 0.24454-0.0258 3.1208 3.272 4.8529 5.564 2.1028 2.7827 4.2687 6.2919 5.7933 9.3867 0.43976 0.89267 0.52394 1.1322 0.41865 1.1911-0.22014 0.12319-11.646 4.7542-11.73 4.7542-0.0429 0-0.24074-0.3612-0.43957-0.80266z"
          strokeWidth=".13435"
          style={{ paintOrder: "stroke markers fill" }}
          onClick={() => {
            const path = document.getElementById("path176")
            const pathBBox = path.getBoundingClientRect()
            setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
          }}
        >
          <title id="title41">AULA 9</title>
        </path>
        <g strokeWidth=".50778">
          <path
            id="path177"
            transform="scale(.26458)"
            d="m635.5 413.85c-0.0605-0.2029-0.2124-1.403-0.33766-2.667-0.44068-4.4468-2.2827-14.512-3.7325-20.394-2.0959-8.5038-7.1298-23.44-9.2882-27.56l-0.51712-0.98695 22.476-9.1235c12.362-5.0179 22.592-9.0015 22.734-8.8523 0.41579 0.43755 3.9479 9.0238 6.0746 14.767 5.1452 13.894 8.9745 29.34 11.027 44.476 0.45349 3.3449 0.75997 6.1491 0.68109 6.2316-0.36639 0.38296-49.014 4.4518-49.117 4.1081z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path177")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title42">AULA 10</title>
          </path>
          <path
            id="path178"
            transform="scale(.26458)"
            d="m655.65 473.66-23.353-4.6336 0.79741-3.9404c0.89007-4.3984 2.0222-11.95 2.5949-17.31 0.5706-5.3397 0.82191-20.944 0.4242-26.34-0.19351-2.6251-0.30507-4.8222-0.24792-4.8823 0.3038-0.31974 48.697-4.3692 48.957-4.0966 0.1662 0.1743 0.49882 3.8171 0.73917 8.0951 0.91062 16.209-0.31485 34.312-3.4226 50.558-1.3159 6.8794-1.438 7.2535-2.3549 7.2153-0.43002-0.0179-11.291-2.1177-24.134-4.6662z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path178")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title48">Laboratorio de Fisica</title>
          </path>
          <path
            id="path179"
            transform="scale(.26458)"
            d="m308.12 736.42c-0.38891-0.16104-4.1277-1.6312-8.3085-3.2669-18.198-7.12-36.9-16.332-53.917-26.557-9.0904-5.4621-28.461-18.599-28.461-19.302 0-0.29547 30.689-34.989 30.95-34.989 0.0869 0 1.7311 1.1708 3.6539 2.6018 19.286 14.353 45.342 28.649 69.164 37.948 2.7224 1.0626 5.0833 2.0612 5.2465 2.219 0.24012 0.23215-15.675 38.048-17.19 40.845-0.33213 0.61319-0.5919 0.7278-1.1375 0.50187z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path179")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title184">AULA 21</title>
          </path>
          <path
            id="path180"
            transform="scale(.26458)"
            d="m377.6 653.15c-31.449-8.0728-55.744-18.475-80.257-34.361-4.797-3.1089-13.081-8.9664-13.081-9.2492 0-0.21167 26.348-28.596 29.52-31.802l1.8954-1.9154 5.2402 3.5524c20.919 14.181 44.534 24.565 68.567 30.149l3.2227 0.74878-5.2592 21.107c-2.8926 11.609-5.3402 21.465-5.4392 21.902-0.21568 0.9534-0.18035 0.95445-4.4091-0.13107z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path180")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title178">AULA 18</title>
          </path>
          <path
            id="path181"
            transform="scale(.26458)"
            d="m278.42 605.21c-13.467-10.904-24.55-21.735-34.84-34.049-3.6502-4.3683-11.301-14.469-11.296-14.913 4e-3 -0.30128 40.29-24.318 40.428-24.101 0.92546 1.4561 7.1658 9.5331 9.868 12.772 6.8968 8.2674 19.061 19.922 28.647 27.448 2.3602 1.8528 2.3912 1.8986 1.7678 2.6127-1.8036 2.0659-30.646 32.962-30.827 33.022-0.11701 0.039-1.8037-1.2172-3.7483-2.7916z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path181")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title179">AULA 19</title>
          </path>
          <path
            id="path182"
            transform="scale(.26458)"
            d="m211.72 520.51c-3.2398-7.4235-4.5256-10.599-6.4728-15.987-2.3899-6.6132-4.6041-13.734-4.3495-13.989 0.1719-0.1719 44.618-10.756 45.634-10.867 0.5265-0.0575 1.0018 1.0152 2.7156 6.1284 1.1426 3.4089 3.2008 8.8859 4.5737 12.171 1.373 3.2852 2.4439 6.0254 2.3799 6.0895-0.064 0.064-9.3302 3.9129-20.592 8.553-11.261 4.6401-21.079 8.6916-21.818 9.0032l-1.343 0.56658z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path182")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title180">AULA 20</title>
          </path>
          <path
            id="path183"
            transform="scale(.26458)"
            d="m213.72 684.72c-5.7595-4.5029-10.651-8.4862-15.201-12.379-5.6721-4.8529-20.344-18.521-20.307-18.917 0.0126-0.13088 8.0868-7.2612 17.943-15.845l17.92-15.607 6.0104 5.8864c6.7818 6.6419 14.028 13.063 21.256 18.838 2.6987 2.1558 4.9518 3.9597 5.0068 4.0086 0.1091 0.0969-30.522 34.691-30.953 34.957-0.14497 0.0896-0.89921-0.33405-1.6761-0.94144z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path183")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title183">AULA 22</title>
          </path>
          <path
            id="path184"
            transform="scale(.26458)"
            d="m171.6 646.54c-10.951-11.825-20.31-23.35-29.202-35.962l-1.6242-2.3037 20.622-12.634c11.342-6.9487 20.701-12.634 20.797-12.634 0.0964 0 1.8719 2.3873 3.9456 5.3051 7.6039 10.699 13.087 17.427 24.508 30.069l1.7732 1.9628-17.795 15.53c-9.7875 8.5414-17.926 15.566-18.085 15.609-0.15945 0.0437-2.3824-2.18-4.9399-4.9415z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path184")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title182">AULA 23</title>
          </path>
          <path
            id="path185"
            transform="scale(.26458)"
            d="m136.01 601.11c-4.4095-6.8637-7.5871-12.146-11.21-18.634-4.0983-7.3398-9.9281-19.032-9.6204-19.296 0.13994-0.11968 10.198-4.5592 22.352-9.8656s22.199-9.705 22.325-9.7748c0.12511-0.0697 1.9871 3.412 4.1377 7.7373 4.2964 8.6408 8.647 16.393 13.694 24.401l3.2916 5.223-1.306 0.81616c-1.6754 1.047-39.767 24.334-40.073 24.498-0.12649 0.0679-1.7416-2.2294-3.589-5.1052z"
            style={{ paintOrder: "stroke markers fill" }}
            onClick={() => {
              const path = document.getElementById("path185")
              const pathBBox = path.getBoundingClientRect()
              setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
            }}
          >
            <title id="title181">AULA 24</title>
          </path>
        </g>
      </g>
      <g stroke="#000">
        <path
          id="path187"
          d="m24.567 136.42 41.697-10.114"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path188"
          d="m54.185 91.047 14.397 5.3631"
          strokeWidth="1.0575"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path189"
          d="m25.4 91.877 40.415 12.039"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
    <path
      id="path190"
      transform="scale(.26458)"
      d="m95.522 504.96c-5.7972-23.667-8.3852-43.738-8.7871-68.147-0.26639-16.181 0.42481-28.994 2.3744-44.017 2.1398-16.488 7.7929-42.663 9.1937-42.568 0.28347 0.0192 32.972 9.7056 72.64 21.525 39.669 11.82 72.624 21.631 73.234 21.803l1.1095 0.31214-0.65762 2.9111c-2.2694 10.046-3.5688 22.84-3.5813 35.261-0.0148 14.742 1.6271 28.472 4.9572 41.454 0.38658 1.507 0.62734 2.74 0.53502 2.74-0.0923 0-33.624 8.114-74.516 18.031-40.891 9.9172-74.428 18.031-74.527 18.031-0.09841 0-0.9876-3.3013-1.976-7.3362z"
      fill="#d1d1d1"
      stroke="#000"
      strokeWidth="1.3363"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <g fill="#92ff92" stroke="#fff" strokeWidth={0}>
      
      <path
        id="path203"
        transform="scale(.26458)"
        d="m545.75 168.35c-3.3075-1.2146-14.054-4.5787-19-5.9478-3.5078-0.97097-14.109-3.6154-17.375-4.334-0.85181-0.18744-0.98781-0.30519-0.91771-0.79461 0.0864-0.6034 10.468-42.94 10.653-43.441 0.12594-0.34204 1.6798-0.0202 10.617 2.1992 14.084 3.4975 36.012 10.375 35.818 11.234-0.0441 0.19573-3.8103 9.7215-8.3694 21.168-5.9792 15.013-8.3953 20.809-8.6698 20.8-0.20935-7e-3 -1.4494-0.40497-2.7556-0.88467z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path203")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title28">AULA 1</title>
      </path>

      <path
        id="path204"
        transform="scale(.26458)"
        d="m506.88 259.58c-5.1851-1.7733-9.9457-3.178-16-4.7211-5.4114-1.3792-6.2392-1.6531-6.1694-2.0408 0.20033-1.1125 11.396-41.72 11.552-41.902 0.44728-0.51924 16.13 3.527 26.559 6.8524 4.1261 1.3157 4.664 1.5474 4.4651 1.924-0.12438 0.23545-4.1298 9.4281-8.901 20.428-4.7711 11-8.7492 20.071-8.8401 20.157-0.0909 0.0865-1.2903-0.22746-2.6653-0.6977z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path204")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title30">AULA 2</title>
      </path>
      <path
        id="path205"
        transform="scale(.26458)"
        d="m505.38 157.22c-1.8565-0.48709-13.569-2.5234-19.125-3.3249-6.9726-1.0059-15.868-1.9804-22.188-2.4303l-4.3125-0.30709-5e-3 -1.1408c-5e-3 -1.2614 2.037-44.36 2.1061-44.442 0.0238-0.0283 2.1764 0.11333 4.7835 0.31464 12.531 0.96758 24.357 2.4301 36.24 4.4817 4.9631 0.85687 13.928 2.5998 14.062 2.7338 0.0557 0.0557-10.559 43.635-10.758 44.167-0.0299 0.08-0.39186 0.0568-0.80436-0.0514z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path205")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title29">AULA 3</title>
      </path>
      <path
        id="path206"
        transform="scale(.26458)"
        d="m477.75 251.98c-5.2802-1.027-13.431-2.1601-18.875-2.6239-6.2835-0.5354-5.8736-0.42726-5.8816-1.5519-0.0112-1.5816 1.7666-40.368 1.9002-41.458l0.12571-1.0249 1.1778 0.0898c0.64781 0.0494 3.4772 0.26352 6.2875 0.4758 5.2857 0.39925 11.705 1.0901 16.265 1.7504 6.1772 0.89443 14.938 2.463 15.195 2.7208 0.0542 0.0542-2.4988 9.5473-5.6734 21.096-3.1746 11.548-5.772 21.063-5.772 21.145 0 0.24413-0.94839 0.12058-4.75-0.6188z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path206")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title31">AULA 4</title>
      </path>
      <path
        id="path207"
        transform="scale(.26458)"
        d="m411.64 151.45c-0.16617-0.514-5.6352-45.037-5.5434-45.129 0.13147-0.13147 9.0237-0.7767 15.154-1.0996 9.3054-0.49014 37.842-0.26768 38.341 0.29888 0.10001 0.1135-2.0526 45.274-2.1633 45.385-0.037 0.037-4.0016-0.0606-8.8101-0.21686-10.817-0.35152-26.936 0.0763-35.433 0.94053-1.0651 0.10832-1.4678 0.0618-1.5456-0.17875z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path207")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title32">AULA 5</title>
      </path>
      <path
        id="path208"
        transform="scale(.26458)"
        d="m364.65 158.81c-0.81133-2.643-11.861-43.934-11.779-44.016 0.38675-0.38675 15.351-3.4323 23.505-4.7838 8.6155-1.428 18.476-2.7306 25.75-3.4016l1.75-0.16145 2.7185 22.088c1.4952 12.148 2.772 22.383 2.8374 22.743 0.11803 0.65095 0.10441 0.65708-1.8435 0.82967-10.333 0.91554-27.836 3.7395-38.948 6.2841-2.0547 0.4705-3.7627 0.85546-3.7956 0.85546-0.0329 0-0.12032-0.19688-0.19419-0.4375z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path208")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title33">AULA 7</title>
      </path>
      <path
        id="path211"
        transform="scale(.26458)"
        d="m333.56 144.06c-4.5726-11.787-8.3132-21.512-8.3125-21.61 3e-3 -0.44919 25.095-7.5209 25.361-7.1476 0.20141 0.28254 11.899 44.051 11.829 44.261-0.0483 0.14493-2.3646 0.86107-5.1472 1.5914-2.7826 0.73036-7.3503 2.0078-10.15 2.8387s-5.1304 1.5081-5.1785 1.5048c-0.0481-3e-3 -3.8288-9.6501-8.4014-21.438z"
        style={{ paintOrder: "stroke markers fill" }}
        onClick={() => {
          const path = document.getElementById("path211")
          const pathBBox = path.getBoundingClientRect()
          setNewPosition({x:pathBBox.x + pathBBox.width/2, y:pathBBox.y + pathBBox.height/2})
        }}
      >
        <title id="title35">AULA 6 BIS</title>
      </path>
    </g>
    <g strokeWidth={0}>
      <g>
        <text
          id="text215"
          x="155.65778"
          y="185.0307"
          fill="#ffa467"
          fontSize="3.175px"
          stroke="#ffffff"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan215" x="155.65778" y="185.0307" strokeWidth={0} />
        </text>
        <path
          id="path215"
          transform="scale(.26458)"
          d="m293.16 276.17-16.034-16.569 5.4539-4.0333c14.685-10.86 32.263-20.899 49.434-28.234 6.3171-2.6982 7.8535-3.1233 8.3638-2.3143 0.34383 0.54508 4.5079 9.5446 9.2534 19.999l8.6283 19.008-12.432 6.1646c-12.051 5.9759-23.598 12.995-31.953 19.424-2.2326 1.7179-4.1992 3.1235-4.3702 3.1235s-7.526-7.456-16.345-16.569z"
          fill="#92ff92"
          stroke="#fff"
          style={{ paintOrder: "stroke markers fill" }}
        >
          <title id="title40">AULA 8</title>
        </path>
        <path
          id="path216"
          transform="scale(.26458)"
          d="m309.57 152.7c-5.3219-11.441-9.4844-20.976-9.25-21.19 0.52279-0.47639 6.6722-2.8332 15.775-6.0459l6.8486-2.4172 0.98214 2.5995c0.54017 1.4297 4.2646 11.028 8.2764 21.329s7.2942 18.866 7.2942 19.034-1.2938 0.70821-2.875 1.2022c-2.2361 0.69855-10.429 3.6594-16.792 6.0688-0.35712 0.13521-4.3318-7.8382-10.259-20.581z"
          fill="#92ff92"
          stroke="#fff"
          style={{ paintOrder: "stroke markers fill" }}
        >
          <title id="title36">AULA 6</title>
        </path>
      </g>
      <path
        id="path217"
        transform="scale(.26458)"
        d="m235 352.94c-11.688-4.3518-22.2-8.2711-23.361-8.7096l-2.1108-0.79731 2.9478-5.8804c13.002-25.937 32.461-50.668 55.524-70.567 7.7613-6.6966 5.9469-6.9612 14.705 2.1442 4.1498 4.3143 11.415 11.862 16.144 16.772l8.5992 8.9276-3.6661 3.0832c-5.4628 4.5943-15.447 14.71-20.878 21.153-9.1138 10.812-15.982 21.129-22.625 33.989l-4.029 7.7987z"
        fill="#ff964f"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g fill="#000000" stroke="#ffffff" strokeWidth={0}>
      <g fontSize="3.175px">
        <text
          id="text217"
          x="153.2599"
          y="187.12656"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217"
            x="153.2599"
            y="187.12656"
            fill="#000000"
            strokeWidth={0}
          >
            A14
          </tspan>
        </text>
        <text
          id="text217-2"
          x="164.31969"
          y="180.5448"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8"
            x="164.31969"
            y="180.5448"
            fill="#000000"
            strokeWidth={0}
          >
            A13
          </tspan>
        </text>
        <text
          id="text217-2-5"
          x="132.60767"
          y="167.18179"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5"
            x="132.60767"
            y="167.18179"
            fill="#000000"
            strokeWidth={0}
          >
            A17
          </tspan>
        </text>
        <text
          id="text217-2-5-5"
          x="87.193977"
          y="165.04697"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0"
            x="87.193977"
            y="165.04697"
            fill="#000000"
            strokeWidth={0}
          >
            A18
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5"
          x="69.580513"
          y="185.25099"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7"
            x="69.580513"
            y="185.25099"
            fill="#000000"
            strokeWidth={0}
          >
            A21
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5-8"
          x="53.24823"
          y="174.23524"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7-0"
            x="53.24823"
            y="174.23524"
            fill="#000000"
            strokeWidth={0}
          >
            A22
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5-8-0"
          x="43.719116"
          y="163.85182"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7-0-2"
            x="43.719116"
            y="163.85182"
            fill="#000000"
            strokeWidth={0}
          >
            A23
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5-8-0-6"
          x="35.642521"
          y="153.25883"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7-0-2-5"
            x="35.642521"
            y="153.25883"
            fill="#000000"
            strokeWidth={0}
          >
            A24
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5-5"
          x="69.618492"
          y="152.06523"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7-9"
            x="69.618492"
            y="152.06523"
            fill="#000000"
            strokeWidth={0}
          >
            A19
          </tspan>
        </text>
        <text
          id="text217-2-5-5-5-5-8"
          x="57.79702"
          y="133.24034"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-0-7-9-6"
            x="57.79702"
            y="133.24034"
            fill="#000000"
            strokeWidth={0}
          >
            A20
          </tspan>
        </text>
        <text
          id="text217-2-5-0"
          x="140.61984"
          y="163.6776"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5"
            x="140.61984"
            y="163.6776"
            fill="#000000"
            strokeWidth={0}
          >
            A16
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2"
          x="157.64981"
          y="151.24063"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2"
            x="157.64981"
            y="151.24063"
            fill="#000000"
            strokeWidth={0}
          >
            A15
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3"
          x="169.9917"
          y="102.20565"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99"
            x="169.9917"
            y="102.20565"
            fill="#000000"
            strokeWidth={0}
          >
            A10
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2"
          x="163.47607"
          y="86.417725"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9"
            x="163.47607"
            y="86.417725"
            fill="#000000"
            strokeWidth={0}
          >
            A9
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2"
          x="139.53581"
          y="38.292843"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1"
            x="139.53581"
            y="38.292843"
            fill="#000000"
            strokeWidth={0}
          >
            A1
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9"
          x="131.8065"
          y="63.364277"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0"
            x="131.8065"
            y="63.364277"
            fill="#000000"
            strokeWidth={0}
          >
            A2
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9-3"
          x="122.65155"
          y="61.420773"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-14"
            x="122.65155"
            y="61.420773"
            fill="#000000"
            strokeWidth={0}
          >
            A4
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9-3-7"
          x="112.57254"
          y="35.207432"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-14-1"
            x="112.57254"
            y="35.207432"
            fill="#000000"
            strokeWidth={0}
          >
            A5
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9-3-7-6"
          x="99.213226"
          y="36.120396"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-14-1-0"
            x="99.213226"
            y="36.120396"
            fill="#000000"
            strokeWidth={0}
          >
            A7
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9-3-7-6-8"
          x="82.591331"
          y="69.257568"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-14-1-0-3"
            x="82.591331"
            y="69.257568"
            fill="#000000"
            strokeWidth={0}
          >
            A8
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-3-2-2-9-3-7-6-52"
          x="82.684875"
          y="40.165283"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-14-1-0-5"
            x="82.684875"
            y="40.165283"
            fill="#000000"
            strokeWidth={0}
          >
            A6
          </tspan>
        </text>
      </g>
      <text
        id="text217-2-5-0-2-3-2-2-9-3-7-6-5"
        transform="scale(.97877 1.0217)"
        x="90.415298"
        y="36.767822"
        fontSize="1.776px"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan
          id="tspan217-8-5-5-2-99-9-1-0-14-1-0-2"
          x="90.415298"
          y="36.767822"
          fill="#000000"
          strokeWidth={0}
        >
          A6 BIS
        </tspan>
      </text>
      <g fontSize="3.175px">
        <text
          id="text217-2-5-0-2-3-2-2-9-2"
          x="126.76752"
          y="35.789627"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-99-9-1-0-1"
            x="126.76752"
            y="35.789627"
            fill="#000000"
            strokeWidth={0}
          >
            A3
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4"
          x="174.55574"
          y="172.38638"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-9"
            x="174.55574"
            y="172.38638"
            fill="#000000"
            strokeWidth={0}
          >
            A12
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3"
          x="183.57175"
          y="162.70634"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan
            id="tspan217-8-5-5-2-9-7"
            x="183.57175"
            y="162.70634"
            fill="#000000"
            strokeWidth={0}
          >
            A11
          </tspan>
        </text>
      </g>
      <g fontSize="1.2742px">
        <text
          id="text217-2-5-0-2-4-3-3"
          transform="scale(1.0063 .99369)"
          x="188.42282"
          y="149.74419"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan217-8-5-5-2-9-7-4" x="188.42282" y="149.74419">
            Lab. de
          </tspan>
          <tspan id="tspan220" x="188.42282" y="151.33696">
            Computacion IV
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2"
          transform="scale(1.0063 .99369)"
          x="193.68211"
          y="138.0117"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan217-8-5-5-2-9-7-4-5" x="193.68211" y="138.0117">
            Lab. de
          </tspan>
          <tspan id="tspan220-3" x="193.68211" y="139.60448">
            Termodinamica
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9"
          transform="scale(1.0063 .99369)"
          x="197.06442"
          y="126.02027"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan217-8-5-5-2-9-7-4-5-9" x="197.06442" y="126.02027">
            Lab. de
          </tspan>
          <tspan id="tspan220-3-0" x="197.06442" y="127.61304">
            Electronica II
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9-5"
          transform="scale(1.0063 .99369)"
          x="196.7576"
          y="113.23967"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan220-3-0-8" x="196.7576" y="113.23967">
            Lab. de
          </tspan>
          <tspan id="tspan221" x="196.7576" y="114.83244">
            Neuroingenieria
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9-5-2"
          transform="scale(1.0063 .99369)"
          x="197.54736"
          y="101.26748"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan220-3-0-8-0" x="197.54736" y="101.26748">
            Lab. de
          </tspan>
          <tspan id="tspan221-2" x="197.54736" y="102.86025">
            Biologia
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9-5-2-1"
          transform="scale(1.0063 .99369)"
          x="195.03314"
          y="89.219086"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan220-3-0-8-0-6" x="195.03314" y="89.219086">
            Lab. de
          </tspan>
          <tspan id="tspan221-2-3" x="195.03314" y="90.811859">
            Biologia
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9-5-2-1-2"
          transform="scale(1.0063 .99369)"
          x="185.7654"
          y="72.11171"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan220-3-0-8-0-6-0" x="185.7654" y="72.11171">
            Lab. de
          </tspan>
          <tspan id="tspan221-2-3-4" x="185.7654" y="73.704483">
            Quimica
          </tspan>
        </text>
        <text
          id="text217-2-5-0-2-4-3-3-2-9-0"
          transform="scale(1.0063 .99369)"
          x="170.92624"
          y="117.4333"
          style={{ paintOrder: "stroke markers fill" }}
          xmlSpace="preserve"
        >
          <tspan id="tspan217-8-5-5-2-9-7-4-5-9-1" x="170.92624" y="117.4333">
            Lab. de
          </tspan>
          <tspan id="tspan220-3-0-2" x="170.92624" y="119.02607">
            Fisica
          </tspan>
        </text>
      </g>
      <text
        id="text217-2-5-0-3"
        transform="scale(1.0608 .94268)"
        x="139.0459"
        y="167.93153"
        fontSize="1.0826px"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan id="tspan217-8-5-5-0" x="139.0459" y="167.93153">
          Ingenieria
        </tspan>
        <tspan id="tspan218" x="139.0459" y="169.28474">
          en Energia
        </tspan>
      </text>
    </g>
    <text
      id="text1"
      x="123.75915"
      y="62.76825"
      fill="none"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan1" x="123.75915" y="62.76825" strokeWidth={0} />
    </text>
    <g fill="#808080" strokeWidth={0}>
      <path
        id="path9"
        transform="scale(.26458)"
        d="m111.16 554.23c-4.2099-9.6374-5.5392-13.136-9.7535-25.672-3.4446-10.246-3.6876-11.364-2.5763-11.842 1.77-0.7623 44.652-11.139 46.032-11.139 0.8535 1.1e-4 1.7762 1.9952 3.5156 7.6014 1.2971 4.1807 4.0813 11.958 6.1872 17.282 2.1058 5.3244 3.8288 9.9772 3.8288 10.34 0 0.47772-35.402 16.484-43.57 19.699-0.44557 0.1754-2.042-2.5561-3.664-6.2694z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path19"
        transform="scale(.26458)"
        d="m346.13 747.79c-10.315-2.6416-18.89-5.1266-31.013-8.9876-1.5006-0.47792-2.8564-1.2027-3.0128-1.6106-0.15638-0.40793 3.617-9.8103 8.3853-20.894l8.6696-20.153 9.8995 3.2503c5.4447 1.7876 14.195 4.326 19.445 5.6407s9.6559 2.4546 9.7903 2.5331c0.38201 0.22298-9.3454 43.382-9.7678 43.338-0.2068-0.0213-5.7854-1.424-12.397-3.1171z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path20"
        transform="scale(.26458)"
        d="m522.58 726.93c-3.2085-11.34-5.6302-20.822-5.3815-21.071 0.78692-0.78692 19.117-5.6355 19.616-5.1887 0.26228 0.23492 1.7454 4.0864 3.2959 8.5588 1.5505 4.4724 4.7307 13.578 7.0673 20.234l4.2483 12.102-9.3119 2.5598c-5.1216 1.4079-10.299 2.754-11.506 2.9912l-2.1944 0.43132z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path21"
        transform="scale(.26458)"
        d="m546.86 720.37c-3.8436-10.987-6.9883-20.244-6.9883-20.573 0-0.56523 18.247-7.4752 19.846-7.5157 0.88549-0.0224 19.826 38.679 19.224 39.281-0.49658 0.49658-23.578 8.7828-24.465 8.7828-0.34613 0-3.7741-8.9891-7.6176-19.976z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path22"
        transform="scale(.26458)"
        d="m658.32 235.29c-4.0835-3.8835-10.825-9.9257-14.982-13.427l-7.5571-6.3662 14.582-16.003c8.0202-8.8015 14.798-16.094 15.061-16.206 1.0214-0.4335 21.533 17.328 30.192 26.144l4.4156 4.4958-15.692 13.066c-8.6307 7.1864-16.345 13.582-17.144 14.212-1.3956 1.1015-1.7371 0.8739-8.8761-5.9153z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path23"
        transform="scale(.26458)"
        d="m591.85 287.72c-5.2503-4.6545-9.9406-8.8568-10.423-9.3383-0.69773-0.69647 0.80804-2.824 7.3626-10.403 4.5318-5.2401 8.6422-9.5274 9.1341-9.5274 1.0739 0 14.696 11.478 19.91 16.776l3.7101 3.7699-9.5966 8.4653c-5.2781 4.6559-9.8115 8.5226-10.074 8.5927-0.26262 0.0701-4.7732-3.6808-10.023-8.3353z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path24"
        transform="scale(.26458)"
        d="m533.2 249.19c-7.1701-3.2838-13.108-6.0439-13.195-6.1334-0.25787-0.26463 8.9566-21.317 9.6365-22.016 0.9681-0.99614 31.146 11.575 31.066 12.942-0.0785 1.3402-12.611 20.952-13.455 21.055-0.55872 0.0682-6.8823-2.5627-14.052-5.8465z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path25"
        transform="scale(.26458)"
        d="m421.1 240.42c-0.67547-4.4724-2.0941-13.906-3.1526-20.964l-1.9244-12.832 2.5304-0.41793c4.5158-0.74587 32.201-1.2638 33.115-0.61947 0.70936 0.49988 0.68381 4.7569-0.12808 21.333-0.55785 11.39-1.1157 20.805-1.2398 20.922-0.12401 0.11694-6.4686 0.32447-14.099 0.46117l-13.873 0.24854z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path26"
        transform="scale(.26458)"
        d="m264.9 174.21c-7.3802-10.371-13.07-19.016-12.728-19.338 2.566-2.4222 42.381-21.936 44.757-21.936 0.39127 0 17.771 36.163 19.692 40.973 0.10507 0.26314-2.2814 1.5484-5.3033 2.8562-7.0274 3.0413-23.524 11.234-28.353 14.082-2.0462 1.2065-3.945 2.1768-4.2195 2.1563-0.27457-0.0205-6.5048-8.477-13.845-18.792z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path27"
        transform="scale(.26458)"
        d="m224.03 201.99c-12.682-12.454-16.511-16.605-15.788-17.113 0.52512-0.36904 4.559-3.4012 8.9641-6.7381 14.613-11.07 31.379-21.811 32.344-20.721 1.2408 1.4017 25.671 35.914 25.965 36.681 0.17504 0.45615-1.684 2.0474-4.1312 3.5362-6.2425 3.7977-16.834 11.114-23.729 16.392-3.2147 2.4606-6.0785 4.4583-6.364 4.4394-0.28548-0.0189-8.0531-7.4332-17.261-16.476z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path28"
        transform="scale(.26458)"
        d="m123.09 352.92c-12.611-3.7628-23.059-7.2287-23.216-7.702s1.06-4.9178 2.7062-9.8767c13.236-39.87 35.018-77.476 63.997-110.49 7.612-8.6707 25.083-25.944 33.148-32.774l5.6222-4.7609 33.478 33.456-8.219 7.2243c-37.51 32.97-65.996 75.966-81.533 123.06-1.5375 4.6606-2.8536 8.5245-2.9247 8.5864-0.0711 0.062-10.448-2.966-23.059-6.7288z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path40"
        transform="scale(.26458)"
        d="m391.5 253.21c0-0.19473-2.3669-9.468-5.2598-20.607s-5.161-20.352-5.0401-20.473c0.43159-0.4316 14.679-3.1371 21.8-4.1398 3.9875-0.56145 7.9664-1.1346 8.8419-1.2736 1.5444-0.24521 1.6015-0.18881 1.9146 1.8887 0.17747 1.1778 1.6168 10.691 3.1986 21.141s2.8432 19.052 2.8032 19.116c-0.04 0.0635-3.5507 0.56211-7.8016 1.1079-6.9336 0.89026-17.272 2.6509-19.582 3.3348-0.48125 0.1425-0.875 0.0998-0.875-0.095z"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path170"
        transform="scale(.26458)"
        d="m630.89 535.58c-11.471-6.2305-20.864-11.478-20.874-11.662-0.01-0.18352 1.0293-2.096 2.3087-4.25 1.2794-2.154 4.01-7.353 6.068-11.553 3.3682-6.8747 3.8473-7.604 4.7988-7.3053 2.5566 0.80257 43.888 16.107 44.117 16.336 0.72766 0.72766-13.63 28.568-15.249 29.569-0.17277 0.10678-9.6993-4.9035-21.17-11.134z"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
  </g>
</svg>
</div>
</div>
    )
}

TornaviasSVG.propTypes = {
  showCardFunc: PropTypes.func
}