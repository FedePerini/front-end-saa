/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react"
import ClassroomCard from '../Molecules/ClassroomCard'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import "./SVGStyles.css"

export const TornaviasSVG = (props) => {

  const [position, setPosition] = useState({x: 0, y: -100})

  const setNewPosition = (position) => {
    //setPosition(position)
    
    props.showCardFunc()
  }

    return (
<svg
  id="svg1"
  width="210mm"
  height="210mm"
  version="1.1"
  viewBox="0 0 230 230"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="g4" stroke="#000">
    <g id="g3" fill="none">
      <path
        id="path1"
        d="m95.228 199.33a93.68 87.072 0 0 1-70.209-63.2"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <path
        id="path1-4"
        d="m31.008 81.971c11.025-21.108 18.55-33.51 42.548-45.298 23.901-11.302 51.868-12.542 76.818-3.4053"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <path
        id="path1-1"
        d="m176.07 47.576a93.212 86.84 0 0 1 31.367 86.009 93.212 86.84 0 0 1-68.102 65.008"
        strokeWidth=".99618"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <g id="g1">
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
      <g id="g2" strokeWidth="1.0074">
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
      <path
        id="path2"
        d="m98.155 186.74a79.74 74.213 0 0 1-59.248-54.213"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path2-0"
        d="m43.445 86.726c8.7001-17.093 16.566-28.799 36.878-38.367 20.312-9.5678 44.05-10.599 65.232-2.834"
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
    <circle
      id="path34"
      cx="129.49"
      cy="160.76"
      r=".044712"
      strokeWidth=".26458"
    />
    <g id="g7" fill="none" strokeWidth=".5">
      <path
        id="path35"
        d="m129.37 160.84 3.3913 12.498"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g id="g6">
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
  <g id="g5" stroke="#000">
    <g id="g8" fill="#999" strokeWidth=".25">
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
    <g id="g9" strokeWidth=".38">
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
    <g id="g13" fill="#92ff92">
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
    <path
      id="path190"
      d="m25.273 133.6c-1.5338-6.2618-2.2186-11.572-2.3249-18.03-0.07048-4.2812 0.1124-7.6712 0.62822-11.646 0.56615-4.3624 2.0618-11.288 2.4325-11.263 0.075 0.0051 8.7237 2.5679 19.219 5.6951 10.496 3.1273 19.215 5.7231 19.376 5.7686l0.29355 0.0826-0.17399 0.77022c-0.60044 2.658-0.94423 6.043-0.94754 9.3294-0.0039 3.9004 0.4305 7.5331 1.3116 10.968 0.10228 0.39872 0.16598 0.72495 0.14156 0.72495s-8.8962 2.1468-19.715 4.7706c-10.819 2.6239-19.692 4.7706-19.718 4.7706-0.02604 0-0.2613-0.87346-0.52281-1.941z"
      fill="#d1d1d1"
      strokeWidth=".35356"
      style={{ paintOrder: "stroke markers fill" }}
    />
  </g>
  <text
    id="text215"
    x="155.65778"
    y="185.0307"
    fill="#ffa467"
    fontSize="3.175px"
    stroke="#ffffff"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
    xmlSpace="preserve"
  >
    <tspan id="tspan215" x="155.65778" y="185.0307" strokeWidth={0} />
  </text>
  <path
    id="path217"
    d="m62.176 93.381c-3.0924-1.1514-5.8737-2.1884-6.1809-2.3044l-0.55848-0.21095 0.77993-1.5558c3.4401-6.8624 8.5885-13.406 14.691-18.671 2.0535-1.7718 1.5734-1.8418 3.8906 0.56731 1.098 1.1415 3.0202 3.1384 4.2714 4.4375l2.2752 2.3621-0.96998 0.81575c-1.4453 1.2156-4.087 3.892-5.5239 5.5967-2.4113 2.8606-4.2285 5.5903-5.9861 8.9928l-1.066 2.0634z"
    fill="#808080"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
  />
  <g id="g261">
    <title id="title262">AULA 14</title>
    <path
      id="path152"
      d="m151.55 188.33c-1.3086-2.7138-2.4532-5.0855-2.5434-5.2702l-0.16404-0.33596 1.3741-0.58835c1.4946-0.63991 5.5355-2.6038 6.9071-3.3567 0.79086-0.43415 0.86613-0.45783 0.99022-0.31183 0.27998 0.32945 6.6399 9.455 6.6407 9.5286 3e-3 0.2138-5.903 3.216-8.8513 4.4994-0.97214 0.42322-1.814 0.7694-1.8709 0.76929-0.0568-1e-4 -1.174-2.2206-2.4827-4.9344z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title173">AULA 14</title>
    </path>
    <text
      id="text217"
      x="153.2599"
      y="187.12656"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g263">
    <title id="title264">AULA 13</title>
    <path
      id="path161"
      d="m161.93 182.82c-1.8609-2.6551-3.3705-4.8392-3.3546-4.8532 0.0159-0.0142 0.51305-0.31168 1.1047-0.66116 2.2642-1.3374 5.4202-3.4504 7.2495-4.8537 0.41159-0.31572 0.79626-0.60351 0.85481-0.63949 0.099-0.0609 7.9374 8.479 8.0332 8.7523 0.0963 0.27469-5.3128 4.0608-8.8981 6.2285-0.77729 0.4699-1.4567 0.85438-1.5098 0.85438s-1.6191-2.1724-3.48-4.8275z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title172">AULA 13</title>
    </path>
    <text
      id="text217-2"
      x="164.31969"
      y="180.5448"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g260">
    <title id="title261">AULA 17</title>
    <path
      id="path166"
      d="m132.83 172.42c-0.056-0.19293-0.76424-2.7953-1.5739-5.7829l-1.4722-5.4321 0.8452-0.21443c1.0872-0.27585 4.038-1.2348 5.2368-1.702 0.51183-0.19942 0.96169-0.33093 0.99974-0.29225 0.085 0.0864 5.2257 10.68 5.2257 10.769 0 0.0769-2.0974 0.87798-3.8354 1.4648-1.1847 0.40005-5.0667 1.5405-5.2437 1.5405-0.0444 0-0.12645-0.15785-0.18242-0.35078z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title177">AULA 17</title>
    </path>
    <text
      id="text217-2-5"
      x="132.60767"
      y="167.18179"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g258">
    <title id="title259">AULA 18</title>
    <path
      id="path180"
      d="m99.905 172.81c-8.3208-2.1359-14.749-4.8881-21.234-9.0912-1.2692-0.82255-3.461-2.3723-3.461-2.4472 0-0.056 6.9712-7.5659 7.8104-8.4142l0.50148-0.50678 1.3865 0.93989c5.5347 3.752 11.783 6.4994 18.141 7.9768l0.85266 0.19811-1.3915 5.5845c-0.76533 3.0715-1.4129 5.6792-1.4391 5.7948-0.0571 0.25225-0.0477 0.25253-1.1666-0.0347z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title178">AULA 18</title>
    </path>
    <text
      id="text217-2-5-5"
      x="86.788132"
      y="164.37056"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan
        id="tspan217-8-5-0"
        x="86.788132"
        y="164.37056"
        fill="#000000"
        strokeWidth={0}
      >
        A18
      </tspan>
    </text>
  </g>
  <g id="g259">
    <title id="title260">AULA 21</title>
    <path
      id="path179"
      d="m81.522 194.84c-0.1029-0.0426-1.0921-0.43158-2.1983-0.86435-4.8148-1.8838-9.763-4.3211-14.265-7.0264-2.4051-1.4452-7.5302-4.9209-7.5302-5.1069 0-0.0782 8.1197-9.2574 8.1888-9.2574 0.02299 0 0.45802 0.30977 0.96675 0.68839 5.1027 3.7975 11.997 7.58 18.299 10.04 0.72029 0.28114 1.3449 0.54535 1.3881 0.5871 0.06353 0.0614-4.1473 10.067-4.5481 10.807-0.08787 0.16224-0.1566 0.19256-0.30096 0.13279z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title184">AULA 21</title>
    </path>
    <text
      id="text217-2-5-5-5"
      x="69.580513"
      y="185.25099"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g257">
    <title id="title257">AULA 22</title>
    <path
      id="path183"
      d="m56.546 181.16c-1.5238-1.1914-2.818-2.2453-4.0219-3.2752-1.5007-1.284-5.3826-4.9003-5.3728-5.0051 0.0033-0.0346 2.1396-1.9212 4.7474-4.1923l4.7413-4.1293 1.5902 1.5574c1.7943 1.7573 3.7115 3.4562 5.6239 4.9842 0.71402 0.57039 1.3101 1.0477 1.3247 1.0606 0.02886 0.0256-8.0755 9.1785-8.1895 9.2489-0.03836 0.0237-0.23791-0.0884-0.44346-0.24908z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title183">AULA 22</title>
    </path>
    <text
      id="text217-2-5-5-5-8"
      x="53.24823"
      y="174.23524"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g255">
    <title id="title255">AULA 23</title>
    <path
      id="path184"
      d="m45.402 171.06c-2.8974-3.1287-5.3736-6.1779-7.7263-9.5148l-0.42973-0.60952 5.4562-3.3427c3.0009-1.8385 5.4771-3.3427 5.5025-3.3427 0.02551 0 0.49527 0.63163 1.0439 1.4036 2.0118 2.8307 3.4626 4.6108 6.4843 7.9557l0.46915 0.51931-4.7082 4.1089c-2.5896 2.2599-4.7429 4.1184-4.7849 4.1298-0.04219 0.0116-0.63034-0.57678-1.307-1.3074z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title182">AULA 23</title>
    </path>
    <text
      id="text217-2-5-5-5-8-0"
      x="43.719116"
      y="163.85182"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g253">
    <title id="title253">AULA 24</title>
    <path
      id="path185"
      d="m35.986 159.04c-1.1667-1.816-2.0074-3.2136-2.9659-4.9302-1.0843-1.942-2.6268-5.0355-2.5454-5.1053 0.03702-0.0317 2.6982-1.2063 5.9139-2.6102 3.2157-1.404 5.8734-2.5677 5.9067-2.5862 0.0331-0.0184 0.52575 0.90274 1.0948 2.0471 1.1367 2.2862 2.2878 4.3373 3.6232 6.456l0.87089 1.3819-0.34554 0.21594c-0.44328 0.27701-10.522 6.4383-10.603 6.4817-0.03347 0.018-0.46079-0.58985-0.94958-1.3507z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title181">AULA 24</title>
    </path>
    <text
      id="text217-2-5-5-5-8-0-6"
      x="35.642521"
      y="153.25883"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g256">
    <title id="title258">AULA 19</title>
    <path
      id="path181"
      d="m73.664 160.13c-3.5631-2.885-6.4954-5.7506-9.218-9.0087-0.96577-1.1558-2.99-3.8282-2.9887-3.9457 0.0011-0.0797 10.66-6.4341 10.696-6.3766 0.24486 0.38526 1.8959 2.5223 2.6109 3.3792 1.8248 2.1874 5.0432 5.271 7.5794 7.2622 0.62446 0.49021 0.63266 0.50233 0.46772 0.69127-0.4772 0.54659-8.1083 8.7211-8.1562 8.737-0.03096 0.0103-0.47722-0.32205-0.99173-0.7386z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title179">AULA 19</title>
    </path>
    <text
      id="text217-2-5-5-5-5"
      x="69.618492"
      y="152.06523"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g254">
    <title id="title254">AULA 20</title>
    <path
      id="path182"
      d="m56.017 137.72c-0.85719-1.9641-1.1974-2.8043-1.7126-4.2298-0.63232-1.7497-1.2182-3.6338-1.1508-3.7012 0.04548-0.0455 11.805-2.8458 12.074-2.8752 0.1393-0.0152 0.26506 0.26861 0.71849 1.6215 0.30231 0.90192 0.84687 2.351 1.2101 3.2202 0.36327 0.8692 0.64661 1.5942 0.62967 1.6112-0.01693 0.0169-2.4686 1.0353-5.4482 2.263-2.9794 1.2277-5.5771 2.2996-5.7726 2.3821l-0.35533 0.14991z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title180">AULA 20</title>
    </path>
    <text
      id="text217-2-5-5-5-5-8"
      x="57.79702"
      y="133.24034"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g262">
    <title id="title263">AULA 16</title>
    <path
      id="path167"
      d="m140.06 164.13-2.636-5.4355 0.25062-0.11564c2.5239-1.1645 3.4197-1.5962 4.3187-2.0814 0.68743-0.37096 1.1165-0.55154 1.1907-0.50106 0.0638 0.0434 1.6324 2.3058 3.4858 5.0276 3.2125 4.7172 3.3612 4.9548 3.1845 5.0786-0.59962 0.42-5.8837 2.9924-6.9714 3.394-0.16976 0.0627-0.43129-0.4345-2.8231-5.3665z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title176">AULA 16</title>
    </path>
    <text
      id="text217-2-5-0"
      x="140.61984"
      y="163.6776"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g266">
    <title id="title267">AULA 15</title>
    <path
      id="path169"
      d="m154.36 155.75c-2.3246-2.4658-4.2232-4.5153-4.2195-4.5545 4e-3 -0.0392 0.47495-0.45011 1.0469-0.91315 1.2769-1.0337 4.482-4.2031 5.7226-5.6594 1.071-1.2569 2.5975-3.2647 3.4255-4.5053 0.32059-0.48035 0.59575-0.88891 0.61147-0.90794 0.0358-0.0433 10.889 5.8686 11.061 6.0253 0.10375 0.0943-9e-3 0.31606-0.63664 1.253-2.0943 3.126-4.4322 5.9385-7.4363 8.9457-1.7591 1.761-4.2433 4.0121-5.1035 4.6246l-0.24549 0.17481z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title174">AULA 15</title>
    </path>
    <text
      id="text217-2-5-0-2"
      x="157.64981"
      y="151.24063"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g274">
    <title id="title274">AULA 10</title>
    <g id="g273">
      <path
        id="path177"
        d="m168.14 109.5c-0.016-0.0537-0.0562-0.3712-0.0893-0.70563-0.11659-1.1765-0.60395-3.8396-0.98754-5.3958-0.55454-2.2499-1.8864-6.2018-2.4575-7.2918l-0.13682-0.26113 5.9467-2.4139c3.2707-1.3276 5.9774-2.3816 6.015-2.3421 0.11001 0.11577 1.0445 2.3875 1.6072 3.9071 1.3613 3.6761 2.3745 7.7628 2.9175 11.767 0.11998 0.88499 0.20107 1.6269 0.1802 1.6488-0.0969 0.10133-12.968 1.1779-12.995 1.0869z"
        fill="#92ff92"
        stroke="#fff"
        strokeWidth=".13435"
        style={{ paintOrder: "stroke markers fill" }}
      >
        <title id="title42">AULA 10</title>
      </path>
      <text
        id="text217-2-5-0-2-3"
        x="169.9917"
        y="102.20565"
        fill="#000000"
        fontSize="3.175px"
        stroke="#ffffff"
        strokeWidth={0}
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
    </g>
  </g>
  <g id="g277">
    <title id="title277">AULA 9</title>
    <path
      id="path176"
      d="m163.91 94.492c-0.19882-0.44146-0.70638-1.4229-1.1279-2.181-1.7985-3.2344-3.6899-5.9378-6.0282-8.6159-0.5166-0.59167-0.93948-1.1001-0.93975-1.1298-7.9e-4 -0.08922 9.0859-8.1545 9.2009-8.1667 0.24454-0.0258 3.1208 3.272 4.8529 5.564 2.1028 2.7827 4.2687 6.2919 5.7933 9.3867 0.43976 0.89267 0.52394 1.1322 0.41865 1.1911-0.22014 0.12319-11.646 4.7542-11.73 4.7542-0.0429 0-0.24074-0.3612-0.43957-0.80266z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title41">AULA 9</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2"
      x="163.47607"
      y="86.417725"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g280">
    <title id="title280">AULA 1</title>
    <path
      id="path203"
      d="m144.39 44.407c-0.87509-0.32136-3.7184-1.2114-5.027-1.5737-0.92809-0.2569-3.733-0.95656-4.5971-1.1467-0.22537-0.04959-0.26136-0.08075-0.24281-0.21024 0.0229-0.15965 2.7696-11.361 2.8186-11.494 0.0333-0.0905 0.44444-0.0053 2.809 0.58186 3.7263 0.92537 9.528 2.745 9.4767 2.9723-0.0117 0.05179-1.0081 2.5721-2.2144 5.6006-1.582 3.9721-2.2212 5.5056-2.2939 5.5033-0.0554-0.0019-0.38348-0.10715-0.72908-0.23407z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title28">AULA 1</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2"
      x="139.53581"
      y="38.292843"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g279">
    <title id="title279">AULA 2</title>
    <path
      id="path204"
      d="m134.11 68.544c-1.3719-0.46918-2.6314-0.84084-4.2333-1.2491-1.4318-0.36491-1.6508-0.43738-1.6323-0.53996 0.053-0.29434 3.0152-11.038 3.0564-11.086 0.11834-0.13738 4.2677 0.93317 7.027 1.813 1.0917 0.34811 1.234 0.40941 1.1814 0.50905-0.0329 0.0623-1.0927 2.4945-2.355 5.4048-1.2623 2.9104-2.3149 5.3104-2.3389 5.3331-0.0241 0.02289-0.34138-0.06018-0.70518-0.1846z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title30">AULA 2</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9"
      x="131.8065"
      y="63.364277"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g281">
    <title id="title281">AULA 4</title>
    <path
      id="path206"
      d="m126.4 66.534c-1.397-0.27172-3.5536-0.57152-4.9939-0.69423-1.6625-0.14166-1.554-0.11304-1.5562-0.4106-3e-3 -0.41846 0.46741-10.681 0.50276-10.969l0.0333-0.27117 0.31162 0.02376c0.1714 0.01307 0.92 0.06972 1.6636 0.12589 1.3985 0.10563 3.0969 0.28842 4.3034 0.46312 1.6344 0.23665 3.9523 0.65166 4.0203 0.71987 0.0144 0.01434-0.66113 2.526-1.5011 5.5816-0.83994 3.0554-1.5272 5.5728-1.5272 5.5945 0 0.06459-0.25092 0.0319-1.2568-0.16372z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title31">AULA 4</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3"
      x="122.65155"
      y="61.420773"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g283">
    <title id="title283">AULA 5</title>
    <path
      id="path207"
      d="m108.91 39.935c-0.044-0.136-1.491-11.916-1.4667-11.94 0.0348-0.03478 2.3875-0.2055 4.0094-0.29093 2.462-0.12968 10.012-0.07082 10.144 0.07908 0.0265 0.03003-0.54308 11.979-0.57237 12.008-0.01 0.0098-1.0587-0.01603-2.331-0.05738-2.862-0.093-7.1267 0.02019-9.3749 0.24884-0.2818 0.02866-0.38835 0.01635-0.40893-0.04729z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title32">AULA 5</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3-7"
      x="112.57254"
      y="35.207432"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g284">
    <title id="title284">AULA 7</title>
    <path
      id="path208"
      d="m96.479 41.883c-0.21466-0.69928-3.1382-11.624-3.1165-11.646 0.10233-0.10233 4.0616-0.90812 6.219-1.2657 2.2795-0.37782 4.8884-0.72246 6.8129-0.9l0.46301-0.04272 0.71926 5.844c0.3956 3.2141 0.73342 5.9221 0.75072 6.0173 0.0312 0.17223 0.0276 0.17385-0.48775 0.21952-2.7339 0.24223-7.3648 0.9894-10.305 1.6626-0.54363 0.12448-0.99554 0.22634-1.0042 0.22634-0.0087 0-0.03183-0.05209-0.05138-0.11575z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title33">AULA 7</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3-7-6"
      x="99.213226"
      y="36.120396"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g287">
    <title id="title287">AULA 8</title>
    <path
      id="path215"
      d="m77.564 73.069-4.2423-4.3838 1.443-1.0671c3.8854-2.8733 8.5361-5.5295 13.079-7.4702 1.6714-0.71389 2.0779-0.82636 2.2129-0.61232 0.09097 0.14422 1.1927 2.5253 2.4483 5.2913l2.2829 5.0291-3.2893 1.631c-3.1885 1.5811-6.2436 3.4382-8.4541 5.1392-0.5907 0.45452-1.111 0.82642-1.1563 0.82642-0.04524 0-1.9912-1.9727-4.3246-4.3838z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title40">AULA 8</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3-7-6-8"
      x="82.591331"
      y="69.257568"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g286">
    <title id="title286">AULA 6</title>
    <path
      id="path216"
      d="m81.906 40.401c-1.4081-3.0271-2.5094-5.5498-2.4474-5.6064 0.13832-0.12604 1.7653-0.74961 4.1737-1.5996l1.812-0.63954 0.25985 0.68778c0.14292 0.37827 1.1283 2.9178 2.1898 5.6432 1.0614 2.7254 1.9299 4.9916 1.9299 5.036 0 0.04445-0.34231 0.18738-0.76067 0.31808-0.59163 0.18482-2.7593 0.9682-4.4428 1.6057-0.09449 0.03577-1.1461-2.0738-2.7143-5.4453z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title36">AULA 6</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3-7-6-52"
      x="82.684875"
      y="40.165283"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  <g id="g285">
    <title id="title285">AULA 6 BIS</title>
    <path
      id="path211"
      d="m88.253 37.98c-1.2098-3.1186-2.1995-5.6916-2.1993-5.7176 7.93e-4 -0.11885 6.6396-1.9899 6.71-1.8911 0.05329 0.07475 3.1482 11.655 3.1297 11.711-0.01278 0.03835-0.62563 0.22782-1.3618 0.42105-0.73622 0.19324-1.9447 0.53122-2.6855 0.75106-0.74074 0.21984-1.3574 0.39901-1.3701 0.39814-0.01273-7.94e-4 -1.013-2.5532-2.2228-5.6721z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title35">AULA 6 BIS</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-3-7-6-5"
      transform="scale(.89006 1.1235)"
      x="99.152931"
      y="33.688847"
      fill="#000000"
      fontSize="2.0729px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan
        id="tspan217-8-5-5-2-99-9-1-0-14-1-0-2"
        x="99.152931"
        y="33.688847"
        fill="#000000"
        strokeWidth={0}
      >
        A6 BIS
      </tspan>
    </text>
  </g>
  <g id="g282">
    <title id="title282">AULA 3</title>
    <path
      id="path205"
      d="m133.71 41.462c-0.49119-0.12887-3.5901-0.66764-5.0601-0.8797-1.8448-0.26614-4.1984-0.52397-5.8705-0.64301l-1.141-0.08125-1e-3 -0.30183c-1e-3 -0.33374 0.53895-11.737 0.55723-11.758 6e-3 -0.0075 0.57584 0.02998 1.2656 0.08325 3.3155 0.256 6.4444 0.64296 9.5884 1.1858 1.3131 0.22671 3.6851 0.68786 3.7205 0.72331 0.0147 0.01474-2.7937 11.545-2.8464 11.686-8e-3 0.02117-0.10367 0.01503-0.21281-0.0136z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title29">AULA 3</title>
    </path>
    <text
      id="text217-2-5-0-2-3-2-2-9-2"
      x="126.76752"
      y="35.789627"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g265">
    <title id="title266">AULA 12</title>
    <path
      id="path162"
      d="m172.41 175.82c-2.1644-2.389-3.9467-4.3806-3.9608-4.4259-0.014-0.0453 0.47974-0.49727 1.0971-1.0044 1.917-1.5748 3.2908-2.8225 5.435-4.936l2.0675-2.0379 9.3976 7.603-1.2005 1.216c-1.925 1.9498-3.4448 3.4083-4.8545 4.6582-1.5355 1.3615-3.851 3.271-3.9663 3.271-0.044 0-1.8508-1.9547-4.0153-4.3436z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title171">AULA 12</title>
    </path>
    <text
      id="text217-2-5-0-2-4"
      x="174.55574"
      y="172.38638"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  </g>
  <g id="g267">
    <title id="title268">AULA 11</title>
    <path
      id="path163"
      d="m183.57 167.9c-1.7941-1.4504-3.9047-3.1588-4.6902-3.7965l-1.4282-1.1593 0.96966-1.0933c2.0828-2.3484 4.3836-5.321 6.0954-7.8752 0.49995-0.74601 0.91931-1.3675 0.93191-1.3811 0.0269-0.0291 10.443 5.8546 10.562 5.966 0.17846 0.16754-3.5385 5.3832-5.7991 8.1372-1.1076 1.3494-2.9988 3.5239-3.2358 3.7205-0.12212 0.10132-0.62822-0.27295-3.4054-2.5181z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title170">AULA 11</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3"
      x="183.57175"
      y="162.70634"
      fill="#000000"
      fontSize="3.175px"
      stroke="#ffffff"
      strokeWidth={0}
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
  <g id="g268">
    <title id="title269">LABORATORIO DE COMPUTACION IV</title>
    <path
      id="path164"
      d="m191.16 155.08c-2.881-1.6364-5.2736-2.9884-5.3167-3.0046s0.13142-0.36774 0.38782-0.78118c1.3642-2.1996 3.349-5.9808 4.4148-8.4102 0.27083-0.61737 0.52427-1.1579 0.56321-1.2011 0.0987-0.10952 11.504 4.1484 11.504 4.2949 0 0.36978-2.5743 5.6938-3.9092 8.0848-0.76781 1.3752-2.2384 3.8486-2.341 3.9375-0.0352 0.0304-2.4212-1.2835-5.3024-2.9199z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title49">Laboratorio de Computacion IV</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3"
      transform="scale(.94434 1.0589)"
      x="200.00206"
      y="140.05003"
      fill="#000000"
      fontSize="1.5477px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan217-8-5-5-2-9-7-4" x="200.00206" y="140.05003">
        Lab. de
      </tspan>
      <tspan id="tspan220" x="200.00206" y="141.98473">
        Computacion IV
      </tspan>
    </text>
  </g>
  <g id="g269">
    <title id="title270">LABORATORIO DE TERMODINAMICA</title>
    <path
      id="path165"
      d="m197.19 143.16c-3.0612-1.1486-5.6035-2.104-5.6498-2.123s0.16976-0.68489 0.48002-1.4798c0.72239-1.8507 1.6884-4.7908 2.2674-6.9005 0.42762-1.5581 0.46662-1.6532 0.67257-1.6391 0.38724 0.0264 11.816 2.2984 11.888 2.3634 0.14435 0.12954-1.2576 4.9953-2.2391 7.771-0.95775 2.7088-1.542 4.1166-1.7038 4.106-0.0822-5e-3 -2.654-0.94961-5.7152-2.0982z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title47">Laboratorio de Termodinamica</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2"
      transform="scale(.90293 1.1075)"
      x="214.77887"
      y="123.53246"
      fill="#000000"
      fontSize="1.6206px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan217-8-5-5-2-9-7-4-5" x="214.77887" y="123.53246">
        Lab. de
      </tspan>
      <tspan id="tspan220-3" x="214.77887" y="125.55821">
        Termodinamica
      </tspan>
    </text>
  </g>
  <g id="g270">
    <title id="title271">LABORATORIO DE ELECTRONICA II</title>
    <path
      id="path171"
      d="m200.79 131.55c-3.2414-0.64489-5.8993-1.1774-5.9068-1.1832-7e-3 -6e-3 0.0869-0.45269 0.20968-0.99289 0.55736-2.4528 1.1145-6.0314 1.358-8.7229l0.11636-1.2862 0.33403-5.3e-4c0.71749-1e-3 10.029 0.28344 11.034 0.33752l1.065 0.0573-0.0637 0.94878c-0.19674 2.9292-0.84787 7.3659-1.5704 10.701-0.26233 1.2107-0.30688 1.3321-0.48593 1.3235-0.10841-5e-3 -2.849-0.53709-6.0904-1.182z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title46">Laboratorio de Electronica II</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9"
      transform="scale(.90649 1.1032)"
      x="217.54831"
      y="112.96473"
      fill="#000000"
      fontSize="1.7577px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan217-8-5-5-2-9-7-4-5-9" x="217.54831" y="112.96473">
        Lab. de
      </tspan>
      <tspan id="tspan220-3-0" x="217.54831" y="115.16183">
        Electronica II
      </tspan>
    </text>
  </g>
  <g id="g272">
    <title id="title273">LABORATORIO DE NEUROINGENIERIA</title>
    <path
      id="path172"
      d="m202.85 118.95-6.174-0.18065v-4.2158c0-2.7461-0.043-4.6839-0.12324-5.558-0.0678-0.73826-0.10987-1.3537-0.0935-1.3676 0.0769-0.0655 12.247-1.1 12.301-1.0456 0.24604 0.24605 0.51562 9.4622 0.3397 11.613l-0.0765 0.93543z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title45">Laboratorio de Neuroingenieria</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9-5"
      transform="scale(.92245 1.0841)"
      x="213.57022"
      y="103.56788"
      fill="#000000"
      fontSize="1.5726px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan220-3-0-8" x="213.57022" y="103.56788">
        Lab. de
      </tspan>
      <tspan id="tspan221" x="213.57022" y="105.5336">
        Neuroingenieria
      </tspan>
    </text>
  </g>
  <g id="g275">
    <title id="title275">LABORATORIO DE BIOLOGIA</title>
    <path
      id="path173"
      d="m196.26 106.1c-0.31154-2.5722-0.8942-5.838-1.4477-8.1144-0.12504-0.51429-0.21732-0.94511-0.20505-0.95736 0.0388-0.03882 11.763-2.9249 11.882-2.9249 0.38317 0 2.4941 11.436 2.1707 11.759-0.0511 0.0511-11.379 1.1195-12.137 1.1448-0.12322 4e-3 -0.17316-0.16836-0.26262-0.90698z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title44">Laboratiorio de Biologia</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9-5-2"
      transform="scale(1.0312 .96972)"
      x="191.37117"
      y="103.55194"
      fill="#000000"
      fontSize="2.0746px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan220-3-0-8-0" x="191.37117" y="103.55194">
        Lab. de
      </tspan>
      <tspan id="tspan221-2" x="191.37117" y="106.14519">
        Biologia
      </tspan>
    </text>
  </g>
  <g id="g276">
    <title id="title276">LABORATORIO DE BIOLOGIA</title>
    <path
      id="path174"
      d="m194.11 95.299c-0.68238-2.4756-2.0495-6.3343-3.1337-8.8446l-0.33506-0.77583 0.39576-0.16957c3.9563-1.6952 10.86-4.5021 10.921-4.4404 0.27572 0.27961 2.2971 5.4416 3.1638 8.0792 0.57388 1.7465 1.2316 3.9936 1.2293 4.2002-1e-3 0.11991-1.1655 0.43595-5.8697 1.5935-3.2276 0.79414-5.9102 1.4575-5.9618 1.4741-0.0514 0.01662-0.23578-0.4858-0.40963-1.1165z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title43">Laboratorio de Biologia</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9-5-2-1"
      transform="scale(.98402 1.0162)"
      x="197.7392"
      y="87.416489"
      fill="#000000"
      fontSize="2.1091px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan220-3-0-8-0-6" x="197.7392" y="87.416489">
        Lab. de
      </tspan>
      <tspan id="tspan221-2-3" x="197.7392" y="90.052879">
        Biologia
      </tspan>
    </text>
  </g>
  <g id="g278">
    <title id="title278">LABORATORIO DE QUIMICA</title>
    <path
      id="path175"
      d="m189.9 84.065c-0.26624-0.57525-0.90179-1.8336-1.4123-2.7963-2.9842-5.6276-6.7211-10.911-11.022-15.583l-0.88711-0.96386 0.22668-0.21771c0.12468-0.11974 2.1837-1.8496 4.5754-3.8441l4.3489-3.6263 0.92093 0.9727c4.6846 4.9482 9.4193 11.58 12.875 18.036 0.86404 1.614 2.1854 4.3137 2.1346 4.3613-0.0243 0.02278-10.627 4.4545-11.077 4.6302-0.18265 0.07123-0.24057-0.01077-0.68365-0.96807z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title34">Laboratorio de Quimica</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9-5-2-1-2"
      transform="scale(1.008 .99203)"
      x="182.77002"
      y="71.18"
      fill="#000000"
      fontSize="2.5371px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan220-3-0-8-0-6-0" x="182.77002" y="71.18">
        Lab. de
      </tspan>
      <tspan id="tspan221-2-3-4" x="182.77002" y="74.351425">
        Quimica
      </tspan>
    </text>
  </g>
  <g id="g271">
    <title id="title272">LABORATORIO DE FISICA</title>
    <path
      id="path178"
      d="m173.47 125.32-6.1787-1.226 0.21098-1.0426c0.23549-1.1637 0.53503-3.1617 0.68656-4.5799 0.15097-1.4128 0.21746-5.5414 0.11223-6.969-0.0512-0.69455-0.0807-1.2759-0.0656-1.2918 0.0804-0.0846 12.884-1.156 12.953-1.0839 0.044 0.0461 0.13198 1.0099 0.19557 2.1418 0.24093 4.2886-0.0833 9.0783-0.90555 13.377-0.34816 1.8202-0.38047 1.9191-0.62306 1.909-0.11378-5e-3 -2.9874-0.5603-6.3854-1.2346z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title48">Laboratorio de Fisica</title>
    </path>
    <text
      id="text217-2-5-0-2-4-3-3-2-9-0"
      transform="scale(.93597 1.0684)"
      x="182.11957"
      y="109.11846"
      fill="#000000"
      fontSize="2.3096px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan217-8-5-5-2-9-7-4-5-9-1" x="182.11957" y="109.11846">
        Lab. de
      </tspan>
      <tspan id="tspan220-3-0-2" x="182.11957" y="112.00555">
        Fisica
      </tspan>
    </text>
  </g>
  <g id="g264">
    <title id="title265">INGENIERIA EN ENERGIA</title>
    <path
      id="path168"
      d="m147.94 161.81c-1.4406-2.1193-2.9842-4.3888-3.4305-5.0437l-0.81126-1.1904 0.95156-0.58218c1.3108-0.802 2.7302-1.754 3.911-2.6233 0.54731-0.4029 1.015-0.73254 1.0394-0.73254 0.0769 0 8.4422 8.9103 8.4422 8.992 0 0.25993-6.5846 4.7212-7.3712 4.9942-0.0639 0.0222-1.2399-1.6201-2.7315-3.8144z"
      fill="#92ff92"
      stroke="#fff"
      strokeWidth=".13435"
      style={{ paintOrder: "stroke markers fill" }}
    >
      <title id="title175">Ingenieria en Energia</title>
    </path>
    <text
      id="text217-2-5-0-3"
      transform="scale(.93669 1.0676)"
      x="156.46025"
      y="147.38617"
      fill="#000000"
      fontSize="1.6338px"
      stroke="#ffffff"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
      xmlSpace="preserve"
    >
      <tspan id="tspan217-8-5-5-0" x="156.46025" y="147.38617">
        Ingenieria
      </tspan>
      <tspan id="tspan218" x="156.46025" y="149.42838">
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
  <g id="g10" fill="#808080" strokeWidth={0}>
    <path
      id="path9"
      d="m29.411 146.64c-1.1139-2.5499-1.4656-3.4755-2.5806-6.7923-0.91137-2.7109-0.97566-3.0067-0.68164-3.1332 0.46831-0.20169 11.814-2.9472 12.179-2.9472 0.22582 3e-5 0.46995 0.52789 0.93016 2.0112 0.34319 1.1061 1.0798 3.1638 1.637 4.5725 0.55715 1.4087 1.013 2.6398 1.013 2.7358 0 0.12639-9.3667 4.3613-11.528 5.212-0.11789 0.0464-0.54027-0.67629-0.96942-1.6588z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path19"
      d="m91.579 197.85c-2.7291-0.69892-4.9979-1.3564-8.2054-2.3779-0.39703-0.12645-0.75575-0.31821-0.79713-0.42613-0.04137-0.10793 0.95699-2.5956 2.2186-5.5281l2.2938-5.3321 2.6192 0.85997c1.4406 0.47296 3.7557 1.1446 5.1448 1.4924 1.389 0.34785 2.5548 0.64944 2.5903 0.67021 0.10107 0.059-2.4726 11.478-2.5844 11.466-0.05472-6e-3 -1.5307-0.37676-3.28-0.82472z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path20"
      d="m138.26 192.33c-0.84891-3.0003-1.4896-5.5091-1.4238-5.575 0.2082-0.2082 5.058-1.491 5.19-1.3728 0.0694 0.0622 0.4618 1.0812 0.87203 2.2645s1.2516 3.5925 1.8699 5.3535l1.124 3.2019-2.4637 0.67728c-1.3551 0.3725-2.7249 0.72865-3.0443 0.79141l-0.58059 0.11412z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path21"
      d="m144.69 190.6c-1.0169-2.9069-1.849-5.3562-1.849-5.4432 0-0.14955 4.8278-1.9778 5.2509-1.9885 0.23428-6e-3 5.2456 10.234 5.0863 10.393-0.13138 0.13139-6.2383 2.3238-6.4729 2.3238-0.0916 0-0.99856-2.3783-2.0155-5.2852z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path22"
      d="m174.18 62.253c-1.0804-1.0275-2.8641-2.6261-3.9639-3.5525l-1.9995-1.6844 3.8581-4.2341c2.122-2.3287 3.9152-4.2582 3.9848-4.2878 0.27024-0.1147 5.6972 4.5846 7.9882 6.9172l1.1683 1.1895-4.1518 3.457c-2.2835 1.9014-4.3246 3.5935-4.536 3.7602-0.36925 0.29144-0.45961 0.23122-2.3484-1.5651z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path23"
      d="m156.59 76.125c-1.3891-1.2315-2.6301-2.3433-2.7577-2.4707-0.18461-0.18427 0.21379-0.74717 1.948-2.7524 1.199-1.3864 2.2866-2.5208 2.4167-2.5208 0.28414 0 3.8883 3.0368 5.2678 4.4386l0.98162 0.99744-2.5391 2.2397c-1.3965 1.2319-2.5959 2.2549-2.6654 2.2735-0.0695 0.01855-1.2629-0.97387-2.6519-2.2054z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path24"
      d="m141.07 65.931c-1.8971-0.86883-3.4681-1.5991-3.4911-1.6228-0.0682-0.07002 2.3697-5.6401 2.5496-5.825 0.25614-0.26356 8.2406 3.0625 8.2194 3.4242-0.0208 0.35459-3.3366 5.5435-3.5599 5.5707-0.14783 0.01805-1.8209-0.67804-3.7179-1.5469z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path25"
      d="m111.41 63.61c-0.17872-1.1833-0.55406-3.6792-0.83412-5.5467l-0.50915-3.3951 0.66949-0.11058c1.1948-0.19734 8.5197-0.33438 8.7616-0.1639 0.18768 0.13226 0.18092 1.2586-0.0339 5.6443-0.1476 3.0136-0.29519 5.5046-0.32803 5.5355-0.0328 0.03094-1.7115 0.08585-3.7303 0.12202l-3.6705 0.06576z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path26"
      d="m70.087 46.092c-1.9527-2.744-3.4581-5.0313-3.3676-5.1164 0.67891-0.64087 11.213-5.8038 11.842-5.8038 0.10352 0 4.7019 9.568 5.2101 10.841 0.0278 0.06962-0.60361 0.40968-1.4031 0.75569-1.8593 0.80467-6.224 2.9723-7.5016 3.7258-0.54138 0.31922-1.0438 0.57594-1.1164 0.57051-0.07265-0.0054-1.721-2.2428-3.6631-4.972z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path27"
      d="m59.274 53.443c-3.3554-3.2951-4.3685-4.3934-4.1772-4.5278 0.13894-0.09764 1.2062-0.89989 2.3717-1.7828 3.8663-2.9289 8.3023-5.7708 8.5576-5.4824 0.32829 0.37086 6.792 9.5021 6.8698 9.7051 0.04631 0.12069-0.44555 0.5417-1.093 0.93561-1.6516 1.0048-4.4539 2.9405-6.2782 4.337-0.85054 0.65103-1.6082 1.1796-1.6838 1.1746-0.07553-5e-3 -2.1307-1.9667-4.5669-4.3592z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path40"
      d="m103.58 66.994c0-0.05152-0.62623-2.505-1.3916-5.4522-0.7654-2.9472-1.3655-5.3847-1.3335-5.4167 0.11419-0.11419 3.8838-0.83001 5.7678-1.0953 1.055-0.14855 2.1078-0.30019 2.3394-0.33697 0.40861-0.06488 0.42372-0.04995 0.50656 0.49971 0.047 0.31162 0.42777 2.8286 0.84629 5.5935 0.41851 2.7649 0.75225 5.0408 0.74167 5.0577-0.0106 0.0168-0.93945 0.14872-2.0642 0.29313-1.8345 0.23554-4.5698 0.70138-5.181 0.88232-0.12732 0.0377-0.2315 0.0264-0.2315-0.02513z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path170"
      d="m166.92 141.7c-3.035-1.6485-5.5202-3.0368-5.5228-3.0855-3e-3 -0.0486 0.27234-0.55456 0.61084-1.1245 0.3385-0.56991 1.061-1.9455 1.6055-3.0567 0.89116-1.8189 1.0179-2.0119 1.2697-1.9328 0.67642 0.21234 11.612 4.2616 11.672 4.3222 0.19253 0.19252-3.6062 7.5585-4.0346 7.8234-0.0457 0.0283-2.5662-1.2974-5.6012-2.9458z"
      style={{ paintOrder: "stroke markers fill" }}
    />
  </g>
  <g stroke="#000">
    <g id="g11" fill="none">
      <path
        id="path29"
        d="m7.6348 86.659a112.98 106.16 0 0 1 56.45-66.189"
        strokeWidth="1.2726"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path30"
        d="m7.8083 86.222 18.189 5.8679"
        strokeWidth="1.0163"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path31"
        d="m63.465 20.083 9.6533 16.746"
        strokeWidth="1.0258"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g15" fill="#808080">
      <g id="g12">
        <path
          id="path32"
          d="m31.194 81.917 12.378 4.7793"
          strokeWidth=".30019"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path33"
          d="m39.491 85.062 9.1625-15.87"
          strokeWidth=".3"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path41"
          d="m36.768 84.041 9.1814-15.903"
          strokeWidth=".3"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
      <g id="g14" strokeWidth=".1">
        <g id="g196">
          <path
            id="path191"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
        <g id="g196-8" transform="translate(2.5536 -4.4257)">
          <path
            id="path191-8"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192-8"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193-4"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
        <g id="g196-89" transform="translate(5.7513 -10.104)">
          <path
            id="path191-81"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192-3"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193-3"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
      </g>
    </g>
    <g id="g17" fill="#f2f2f2">
      <path
        id="path196"
        transform="scale(.26458)"
        d="m156.75 323.84c-3.2884-1.2678-6.0793-2.4054-6.2019-2.5279-0.12388-0.12388 7.3529-13.342 16.832-29.758 9.3803-16.244 17.055-29.621 17.055-29.726 0-0.10508-0.23246-0.33623-0.51658-0.51367-0.60507-0.37787-0.4679-0.57048-4.0419 5.6754l-2.3164 4.0481-4.1663-1.6653c-2.2914-0.91593-4.2532-1.7483-4.3595-1.8498-0.10628-0.10144 1.0476-2.3353 2.5642-4.9642 2.566-4.4479 2.7248-4.8036 2.2882-5.1229-0.25809-0.18871-0.54669-0.34312-0.64134-0.34312-0.0947 0-7.8137 13.248-17.153 29.44s-17.107 29.629-17.261 29.861c-0.24693 0.37173-1.3657 6.8e-4 -9.6228-3.1916-5.1389-1.9867-9.3813-3.6501-9.4275-3.6963-0.11004-0.11004 7.9754-15.426 13.122-24.857 22.197-40.675 39.613-65.25 61.447-86.706 2.6247-2.5793 6.2311-5.9951 8.0142-7.5908l3.242-2.9012 1.8272 1.7418c1.0049 0.95799 8.5763 8.4097 16.825 16.559l14.998 14.817-2.9102 2.5006c-7.4339 6.3878-16.388 15.41-23.445 23.625-15.947 18.562-30.57 41.408-47.351 73.975l-2.8218 5.4765z"
        strokeWidth=".098251"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g id="g16" strokeWidth=".049126">
        <path
          id="path197"
          transform="scale(.26458)"
          d="m160.91 290.76c-2.2876-0.92547-4.2591-1.7278-4.3811-1.783-0.18828-0.0852 0.57129-1.473 5.0241-9.1797 2.8852-4.9937 5.3017-9.1352 5.37-9.2035 0.0788-0.0788 1.6846 0.52427 4.3993 1.6521 2.3514 0.97692 4.3222 1.8198 4.3795 1.873 0.11385 0.1057-10.292 18.221-10.503 18.285-0.0712 0.0215-2.0012-0.71821-4.2888-1.6437z"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path198"
          transform="scale(.26458)"
          d="m151.1 307.43c-2.3948-0.97105-4.3737-1.7803-4.3974-1.7983-0.0431-0.0327 7.7272-13.552 7.8926-13.732 0.048-0.0523 2.0754 0.73739 4.5054 1.7548l4.4181 1.8498-3.9381 6.8237c-2.166 3.753-3.9805 6.8337-4.0322 6.8458-0.0518 0.0122-2.0535-0.77239-4.4484-1.7434z"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path199"
          transform="scale(.26458)"
          d="m144.45 319.17c-2.4084-0.93524-4.4156-1.7385-4.4604-1.785-0.0601-0.0623 4.6783-8.4797 4.958-8.8074 0.0486-0.0569 8.6237 3.4744 8.7869 3.6186 0.0749 0.0661-4.6612 8.4867-4.8585 8.6382-0.0259 0.0199-2.0176-0.72908-4.426-1.6643z"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
  </g>
  <g id="g28">
    <path
      id="path201"
      d="m25.727 91.397c-1.0238-0.30093-17.035-5.4895-17.08-5.535-0.070378-0.07038 0.67918-2.4383 1.5174-4.7937 8.43-23.688 25.402-43.687 48.13-56.721 1.8637-1.0687 5.2696-2.8847 5.3183-2.8358 0.05107 0.05135 8.7068 15.072 8.7068 15.109 0 0.01797-0.71355 0.40449-1.5857 0.85899-11.991 6.2491-20.123 12.884-26.963 22-3.7388 4.9828-7.1611 10.641-11.998 19.834-1.0495 1.995-1.2504 2.4414-1.138 2.529 0.11248 0.08756-0.26992 0.94159-2.1679 4.8413-1.2674 2.6043-2.3257 4.7526-2.3517 4.7741-0.02599 0.02151-0.20045-0.0059-0.38769-0.06097z"
      fill="#808080"
      stroke="#000"
      strokeWidth=".036763"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <text
      id="text201"
      transform="matrix(.20712 0 0 .27393 30.583 53.862)"
      fill="#000000"
      stroke="#000000"
      strokeWidth=".37795"
      style={{
        paintOrder: "stroke markers fill",
        shapeInside: "url(#rect202)",
        whiteSpace: "pre"
      }}
      xmlSpace="preserve"
    >
      <tspan id="tspan3" x={0} y={0}>
        Biblioteca
      </tspan>
      <tspan id="tspan4" x={0} y={15}>
        Central
      </tspan>
    </text>
  </g>
  <g stroke="#000">
    <g id="g211" transform="rotate(1.9861,-63.831,216.4)">
      <path
        id="path202"
        d="m107.37 198.71 4.8146-8.3912"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path209"
        d="m112.15 190.28 5.3304 8.116"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path210"
        d="m107.37 198.67 10.072-0.30941"
        strokeWidth=".10082"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g211-1" transform="rotate(-17.707,-363.09,-74.164)">
      <path
        id="path202-1"
        d="m107.37 198.71 4.8146-8.3912"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path209-6"
        d="m112.15 190.28 5.3304 8.116"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path210-7"
        d="m107.37 198.67 10.072-0.30941"
        strokeWidth=".10082"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g18">
      <text
        id="text211"
        transform="scale(.26458)"
        strokeWidth=".37795"
        style={{
          paintOrder: "stroke markers fill",
          shapeInside: "url(#rect211)",
          whiteSpace: "pre"
        }}
        xmlSpace="preserve"
      />
      <text
        id="text212"
        x="166.039"
        y="28.986303"
        fontSize="3.175px"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan id="tspan212" x="166.039" y="28.986303" strokeWidth=".1">
          Entrada
        </tspan>
      </text>
      <text
        id="text212-1"
        x="106.97243"
        y="208.95125"
        fontSize="3.175px"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan id="tspan212-3" x="106.97243" y="208.95125" strokeWidth=".1">
          Entrada
        </tspan>
      </text>
    </g>
  </g>
</svg>


    )
}

TornaviasSVG.propTypes = {
  showCardFunc: PropTypes.func
}