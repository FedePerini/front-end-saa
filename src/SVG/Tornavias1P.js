/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react"
import ClassroomCard from '../Molecules/ClassroomCard'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import "./SVGStyles.css"

export const Tornavias1P = () => {

    return (
        <svg
        id="svg1"
        width="210mm"
        height="210mm"
        version="1.1"
        viewBox="0 0 210 210"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs id="defs1">
            <clipPath id="clipPath392">
            <path
                id="path393"
                d="m134.68 31.153v151.9h71.022v-151.9zm28.879 100.64v5.3e-4c0.0741-5.3e-4 0.15844 0.0127 0.25114 0.0434 0.15816 0.0525 0.31511 0.10758 0.47233 0.16278 0.23731 0.0914 0.47546 0.1811 0.70848 0.28318 0.31674 0.13472 0.63449 0.27009 0.93586 0.43719 0.15309 0.0832 0.30458 0.17277 0.46974 0.23047 0.65565 0.22914 0.53525 0.85902-0.13798 0.68833-0.0298-8e-3 -0.0593-0.0159-0.0884-0.0253-0.0233 0.0258-0.0441 0.0519-0.0734 0.0775-0.0742 0.0649-0.15292 0.12428-0.22841 0.18758 0.14894 0.13755 0.13152 0.42154-0.19638 0.63356-0.0604 0.0391-0.12083 0.0777-0.18603 0.10852-0.1279 0.0658-0.22213 0.17455-0.31523 0.28215-0.16366 0.18227-0.31258 0.37844-0.43305 0.59221-0.13546 0.22408-0.2683 0.45034-0.41237 0.66921-0.26209 0.3724-0.56637 0.70215-0.91261 0.99891-0.11605 0.0987-0.23376 0.19552-0.35088 0.293-0.0102 0.11609-0.0766 0.25084-0.22066 0.38137-0.15145 0.13718-0.0713 0.0639-0.2403 0.21963-0.10213 0.0916-0.20395 0.18359-0.3054 0.27595 0.0519 0.13485 0.0173 0.32532-0.17829 0.5178-0.27777 0.27339-0.13243 0.13113-0.43615 0.42633-0.24469 0.24072-0.48993 0.48118-0.73483 0.72192 0.0225 0.031 0.0427 0.0636 0.0589 0.0987 0.1031 0.22286-0.11932 0.32409-0.22583 0.10284-4e-3 -8e-3 -8e-3 -0.0167-0.0129-0.0248-0.0364 0.036-0.0732 0.0714-0.10955 0.10749 0.0105 0.0353 4e-3 0.069-0.0165 0.0935 0.15865 0.13556 0.0268 0.29355-0.17415 0.17622-0.0175-0.0102-0.0344-0.0209-0.0512-0.032-0.0243 0.0246-0.0497 0.0482-0.0739 0.0729 0.0883 0.10198 0.17624 0.2042 0.26355 0.30695 0.15902 0.18713-0.0296 0.34885-0.18862 0.16175-0.0826-0.0971-0.16571-0.19395-0.24908-0.29042-0.036 0.0376-0.0702 0.0768-0.10593 0.11472 0.0135 0.013 0.0269 0.0255 0.0398 0.0367 0.0186 0.0161 0.0397 0.0289 0.0589 0.0444 0.1911 0.15419 0.14866 0.34671-0.0713 0.23771-0.0203-0.0101-0.0416-0.0187-0.061-0.0305-0.0208-0.0127-0.0385-0.0301-0.0579-0.045-6e-3 -5.3e-4 -0.0116-1e-3 -0.0176-2e-3 -0.0325-4e-3 -0.0648-0.0106-0.0966-0.0181-0.0416 0.0446-0.0837 0.0886-0.12402 0.13435-0.0796 0.0946-0.16046 0.18841-0.23926 0.28371-3e-3 3e-3 -5e-3 6e-3 -8e-3 9e-3 0.15666 0.18397 0.0508 0.47199-0.38446 0.5364-0.0889 0.0131-0.16311 0.0159-0.22479-3e-3 -0.27556 0.38967-0.54528 0.78542-0.73588 1.2252-0.27616 0.63727-0.90514 0.32287-0.62736-0.31368 0.0557-0.12771 0.1176-0.25192 0.18397-0.37362-0.19 0.22919-0.3758 0.46186-0.56275 0.6935-0.13192 0.15605-0.26695 0.31359-0.41599 0.45475 0.0285 0.0207 0.057 0.0412 0.0858 0.0615 0.56706 0.401 0.29066 0.96922-0.31419 0.62787-0.1467-0.0828-0.28144-0.18356-0.41238-0.28938-0.13181 0.0379-0.17374-8e-3 -0.16071-0.13281-0.0117-0.01-0.0231-0.0187-0.0346-0.0284-0.0422-0.0201-0.0753-0.0486-0.10179-0.0847-0.30189-0.24764-0.26145-0.21395-0.601-0.48318-0.499-0.39158-0.99801-0.78303-1.5074-1.1612-0.41825-0.31047-0.28649-0.7053 0.0403-0.70848 0.10893-1e-3 0.23992 0.0417 0.37932 0.14521 0.40735 0.30251 0.80821 0.61326 1.2077 0.92604 0.054-0.1229 0.12629-0.24995 0.23875-0.38292 0.59357-0.70188 1.2587-1.3408 1.9063-1.9921 0.95856-0.92913 1.9471-1.8264 2.8737-2.7879 0.55916-0.61767 1.0956-1.2548 1.6397-1.8857 0.36012-0.4571 0.81432-0.82374 1.2402-1.2159 0.3061-0.2609 0.60236-0.53153 0.89401-0.80822 0.1263-0.14198 0.28477-0.25315 0.40204-0.40308 0.0712-0.091 0.14399-0.16607 0.21755-0.22996-0.2227-0.0972-0.45023-0.18261-0.67695-0.26975-0.14691-0.0508-0.29315-0.10281-0.4408-0.15141-0.56618-0.18651-0.48441-0.7047-0.0331-0.70952z"
                fill="#f00"
            />
            </clipPath>
            <clipPath id="clipPath395">
            <path
                id="path396"
                d="m139.41 120.33v33.396h33.963v-33.396zm24.153 11.458v0.00106c0.0741-5.3e-4 0.15844 0.0127 0.25114 0.0434 0.15816 0.0525 0.31511 0.10758 0.47233 0.16278 0.23731 0.0914 0.47546 0.1811 0.70848 0.28318 0.31674 0.13472 0.63449 0.27009 0.93586 0.43719 0.15309 0.0832 0.30458 0.17277 0.46974 0.23047 0.65565 0.22914 0.53525 0.85902-0.13798 0.68833-0.0286-7e-3 -0.0568-0.0153-0.0847-0.0243-0.0231 0.0256-0.048 0.0512-0.077 0.0765-0.0742 0.0648-0.15039 0.12691-0.22583 0.19017 0.14605 0.13846 0.12696 0.42023-0.19896 0.63097-0.0604 0.0391-0.12083 0.0777-0.18603 0.10852-0.0305 0.0157-0.0587 0.0343-0.0858 0.0543-5e-3 4e-3 -0.01 8e-3 -0.0145 0.0114-0.0801 0.0621-0.14813 0.13925-0.21498 0.21652-0.16366 0.18226-0.31258 0.37844-0.43305 0.59221-0.13551 0.22411-0.2683 0.45034-0.41237 0.66921-0.26209 0.3724-0.56637 0.70215-0.91261 0.99891-0.45486 0.38709-0.92323 0.75803-1.3746 1.1493-0.48876 0.43078-0.97287 0.86689-1.4392 1.3219 9e-3 9e-3 0.0183 0.0176 0.0274 0.0264 0.0548 0.0541 0.1547 0.15171 0.2098 0.20981 0.0652 0.0687 0.12889 0.14067 0.16899 0.22737 0.1031 0.22286-0.11932 0.32409-0.22583 0.10284-0.0301-0.0625-0.0785-0.11328-0.12609-0.16278-0.0577-0.0601-0.14352-0.14381-0.20102-0.20051-0.0104-0.01-0.0207-0.02-0.031-0.03-5e-3 5e-3 -9e-3 9e-3 -0.0139 0.0134 0.0616 0.0666 0.12484 0.13207 0.2005 0.18293 0.20382 0.13699 0.0669 0.34235-0.13745 0.20619-0.0899-0.0599-0.16588-0.13641-0.23927-0.21497l-0.0139 0.0139c0.0533 0.0542 0.10676 0.10812 0.1602 0.16226 0.0445 0.0417 0.0885 0.0838 0.13849 0.11886 3e-3 2e-3 0.0679 0.0425 0.0729 0.0465 9e-3 6e-3 0.0173 0.0121 0.0264 0.0181 0.20212 0.13944 0.0632 0.32221-0.14882 0.19844-0.0497-0.029-0.0955-0.0625-0.14005-0.0982 8e-4 0.0376-0.0115 0.068-0.0315 0.0884 0.10348 0.11912 0.20791 0.23741 0.31005 0.3576 0.15902 0.18713-0.0296 0.34885-0.18861 0.16175-0.0844-0.0994-0.17102-0.19694-0.25631-0.29559-0.0211 0.049-0.0837 0.0774-0.16433 0.0532 0.0345 0.0366 0.0711 0.0736 0.10542 0.10335 0.0186 0.0161 0.0397 0.0288 0.0589 0.0444 0.19111 0.15417 0.14867 0.34671-0.0713 0.23771-0.0203-0.0101-0.0416-0.0187-0.061-0.0305-0.0224-0.0137-0.0434-0.0294-0.0641-0.0455-4e-3 -2.6e-4 -8e-3 -1e-3 -0.0114-2e-3 -0.15933-0.0213-0.30949-0.0847-0.45579-0.14831-0.0572-0.0267-0.11323-0.0554-0.16846-0.0858-0.27307 0.27157-0.54623 0.54309-0.81752 0.81649-0.19796 0.2072-0.37751 0.39153-0.56793 0.60512-0.28324 0.31775-0.54208 0.65599-0.80925 0.98702-0.13187 0.15601-0.26545 0.31518-0.41444 0.45631 0.0279 0.0203 0.056 0.0405 0.0842 0.0605 0.56707 0.40099 0.29067 0.96922-0.31419 0.62786-0.14553-0.0821-0.27931-0.18189-0.40928-0.28679-0.14039 0.0433-0.17913-7e-3 -0.16485-0.13644-2e-3 -2e-3 -5e-3 -4e-3 -7e-3 -6e-3 -0.0665-0.0227-0.11828-0.0668-0.15089-0.12454-0.27396-0.22467-0.25019-0.20424-0.57981-0.46561-0.4991-0.39158-0.99802-0.78304-1.5074-1.1612-0.41827-0.31048-0.28776-0.70529 0.0393-0.70848 0.10893-1e-3 0.23992 0.0417 0.37931 0.14521 0.40559 0.30121 0.80478 0.61051 1.2025 0.92191 0.054-0.12102 0.13352-0.24826 0.24391-0.37879 0.59355-0.70188 1.2587-1.3408 1.9063-1.9921 0.95856-0.92909 1.9471-1.8264 2.8737-2.7879 0.55916-0.61767 1.0956-1.2548 1.6397-1.8857 0.36014-0.45711 0.81431-0.82375 1.2402-1.216 0.30608-0.26089 0.60235-0.53152 0.894-0.80822 0.12631-0.14199 0.28475-0.25316 0.40204-0.40307 0.0708-0.0906 0.14333-0.16628 0.21653-0.22996-0.22243-0.097-0.4495-0.18274-0.67593-0.26976-0.14692-0.0508-0.29316-0.1028-0.4408-0.15141-0.56669-0.18666-0.48411-0.70558-0.0315-0.70951zm-3.7259 8.5974-0.017 0.0171c0.0296 0.0228 0.0597 0.0453 0.0899 0.0672-0.0245-0.0279-0.0483-0.0564-0.0729-0.0842zm-0.28732 0.28681c-0.0116 0.0115-0.0231 0.0231-0.0346 0.0346 0.0278 0.0144 0.0559 0.028 0.0842 0.0413 6e-3 3e-3 0.0124 6e-3 0.0186 8e-3 -0.0212-0.0262-0.0415-0.0505-0.0682-0.0837z"
                fill="#f00"
            />
            </clipPath>
            <clipPath id="clipPath398">
            <path
                id="path399"
                d="m131.45 40.762v129.92h60.712v-129.92zm32.11 91.029v5.3e-4c0.0741-5.3e-4 0.15844 0.0127 0.25114 0.0434 0.15816 0.0525 0.31511 0.10758 0.47233 0.16278 0.23731 0.0914 0.47546 0.1811 0.70848 0.28318 0.31674 0.13472 0.63449 0.27009 0.93586 0.43719 0.15309 0.0832 0.30458 0.17277 0.46974 0.23047 0.65565 0.22914 0.53525 0.85902-0.13798 0.68833-0.0298-8e-3 -0.0593-0.0159-0.0884-0.0253-0.0233 0.0258-0.0441 0.0519-0.0734 0.0775-0.0742 0.0649-0.15292 0.12428-0.22841 0.18758 0.14894 0.13755 0.13152 0.42154-0.19638 0.63356-0.0604 0.0391-0.12083 0.0777-0.18603 0.10852-0.1279 0.0658-0.22213 0.17455-0.31523 0.28215-0.16366 0.18227-0.31258 0.37844-0.43305 0.59221-0.13546 0.22408-0.2683 0.45034-0.41237 0.66921-0.26209 0.3724-0.56637 0.70215-0.91261 0.99891-0.11605 0.0987-0.23376 0.19552-0.35088 0.293-0.0102 0.11609-0.0766 0.25084-0.22066 0.38137-0.15145 0.13718-0.0713 0.0639-0.2403 0.21963-0.10077 0.0904-0.20116 0.18121-0.30127 0.27233 0.0526 0.13489 0.0138 0.32837-0.18242 0.52142-0.27777 0.27339-0.13243 0.13113-0.43615 0.42633-0.24469 0.24072-0.48993 0.48118-0.73483 0.72192 0.0225 0.031 0.0427 0.0636 0.0589 0.0987 0.1031 0.22286-0.11932 0.32409-0.22583 0.10284-4e-3 -8e-3 -8e-3 -0.0167-0.0129-0.0248-0.0364 0.036-0.0732 0.0714-0.10955 0.10749 0.0105 0.0353 4e-3 0.069-0.0165 0.0935 0.15865 0.13556 0.0268 0.29355-0.17415 0.17622-0.0175-0.0102-0.0344-0.0209-0.0512-0.032-0.0243 0.0246-0.0497 0.0482-0.0739 0.0729 0.0883 0.10198 0.17624 0.2042 0.26355 0.30695 0.15902 0.18713-0.0296 0.34885-0.18862 0.16175-0.0826-0.0971-0.16571-0.19395-0.24908-0.29042-0.036 0.0376-0.0702 0.0768-0.10593 0.11472 0.0135 0.013 0.0269 0.0255 0.0398 0.0367 0.0186 0.0161 0.0397 0.0289 0.0589 0.0444 0.1911 0.15419 0.14866 0.34671-0.0713 0.23771-0.0203-0.0101-0.0416-0.0187-0.061-0.0305-0.0208-0.0127-0.0385-0.0301-0.0579-0.045-6e-3 -5.3e-4 -0.0116-1e-3 -0.0176-2e-3 -0.0325-4e-3 -0.0648-0.0106-0.0966-0.0181-0.0416 0.0446-0.0837 0.0886-0.12402 0.13435-0.0796 0.0946-0.16046 0.18841-0.23926 0.28371-3e-3 3e-3 -5e-3 6e-3 -8e-3 9e-3 0.15666 0.18397 0.0508 0.47199-0.38446 0.5364-0.0889 0.0131-0.16311 0.0159-0.22479-3e-3 -0.27556 0.38967-0.54528 0.78542-0.73588 1.2252-0.27616 0.63727-0.90514 0.32287-0.62736-0.31368 0.0557-0.12771 0.1176-0.25192 0.18397-0.37362-0.19 0.22919-0.3758 0.46186-0.56275 0.6935-0.13192 0.15605-0.26695 0.31359-0.41599 0.45475 0.0285 0.0207 0.057 0.0412 0.0858 0.0615 0.56706 0.401 0.29066 0.96922-0.31419 0.62787-0.1467-0.0828-0.28144-0.18356-0.41238-0.28938-0.13181 0.0379-0.17374-8e-3 -0.16071-0.13281-0.0117-0.01-0.0231-0.0187-0.0346-0.0284-0.0422-0.0201-0.0753-0.0486-0.10179-0.0847-0.30189-0.24764-0.26145-0.21395-0.601-0.48318-0.499-0.39158-0.99801-0.78303-1.5074-1.1612-0.41825-0.31047-0.28649-0.7053 0.0403-0.70848 0.10893-1e-3 0.23992 0.0417 0.37932 0.14521 0.40735 0.30251 0.80821 0.61326 1.2077 0.92604 0.054-0.1229 0.12629-0.24995 0.23875-0.38292 0.59357-0.70188 1.2587-1.3408 1.9063-1.9921 0.95856-0.92913 1.9471-1.8264 2.8737-2.7879 0.55916-0.61767 1.0956-1.2548 1.6397-1.8857 0.36012-0.4571 0.81432-0.82374 1.2402-1.2159 0.3061-0.2609 0.60236-0.53153 0.89401-0.80822 0.1263-0.14198 0.28477-0.25315 0.40204-0.40308 0.0712-0.091 0.14399-0.16607 0.21755-0.22996-0.2227-0.0972-0.45023-0.18261-0.67695-0.26975-0.14691-0.0508-0.29315-0.10281-0.4408-0.15141-0.56618-0.18651-0.48441-0.7047-0.0331-0.70952z"
                fill="#f00"
            />
            </clipPath>
        </defs>
        <g id="layer1">
            <g fill="none" stroke="#000">
            <path
                id="path1"
                d="m90.687 183.3a93.68 87.072 0 0 1-70.209-63.2"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path1-4"
                d="m21.986 76.125c17.11-38.55 27.151-45.034 47.029-55.481 23.901-11.302 51.868-12.542 76.818-3.4053"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path1-1"
                d="m171.53 31.547a93.212 86.84 0 0 1 31.367 86.009 93.212 86.84 0 0 1-68.102 65.008"
                clipPath="url(#clipPath392)"
                strokeWidth=".99618"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path2"
                d="m93.614 170.71a79.74 74.213 0 0 1-59.248-54.213"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path2-0"
                d="m34.432 80.049c5.7184-19.94 21.038-38.151 41.35-47.719 20.312-9.5678 44.05-10.599 65.232-2.834"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path2-1"
                d="m144.13 30.539a79.74 74.213 0 0 1 8.0041 3.8177"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path2-4"
                d="m162.84 41.158a79.74 74.213 0 0 1 26.867 73.441 79.74 74.213 0 0 1-58.141 55.596"
                clipPath="url(#clipPath398)"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path2-4-0"
                d="m127.44 171.11a79.74 74.213 0 0 1-8.7382 1.2496"
                style={{ paintOrder: "stroke markers fill" }}
            />
            </g>
            <circle
            id="path34"
            cx="124.95"
            cy="144.73"
            r=".044712"
            stroke="#000"
            strokeWidth=".26458"
            />
            <g fill="none" stroke="#000">
            <g strokeWidth=".5">
                <path
                id="path49"
                d="m144.32 30.644 3.9079-8.1711"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path50"
                d="m156.88 26.469-8.704-4.0411"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path51"
                d="m151.86 34.374 4.9737-7.8602"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path52"
                d="m162.95 41.247 8.7923-9.6715"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path53"
                d="m181.51 40.336-10.08 8.4155"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path57"
                d="m205.19 103.42-13.502-0.40821"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path58"
                d="m202.96 117.14-13.157-2.6063"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path59"
                d="m198.94 129.8-12.403-4.616"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path60"
                d="m192.22 142.58-11.43-6.4686"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path61"
                d="m182.58 155.14-10.174-8.2271"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path62"
                d="m172 164.81-8.6981-9.6087"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path63"
                d="m160.82 172.22-7.2851-10.394"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path64"
                d="m149.36 177.87-5.5266-11.43"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path66"
                d="m131.55 169.93 3.5797 12.655"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path67"
                d="m129.35 179.94-1.9783-8.8551"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path68"
                d="m118.99 172.25 0.72223 9.1063"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path69"
                d="m129.35 179.98-9.6087 1.3816"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path70"
                d="m93.467 170.62-2.8421 12.701"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path71"
                d="m82.454 167.46-5.1513 11.99"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path72"
                d="m58.814 153.68-9.0592 10.214"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path73"
                d="m52.434 147.84-10.48 9.148"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path74"
                d="m44.086 137.58-12.035 7.3717"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path75"
                d="m38.357 127.19-13.278 5.8174"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path76"
                d="m34.316 116.88-13.944 3.4638"
                style={{ paintOrder: "stroke markers fill" }}
                />
            </g>
            <path
                id="path4-9"
                d="m49.455 125.49a75.17 70.341 0 0 1-4.1707-10.936"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path4"
                d="m94.894 160.32a65.942 60.809 0 0 1-40.789-26.726"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path77"
                d="m94.651 160.33 3.1117-12.466"
                strokeWidth=".49297"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <g strokeWidth=".5">
                <path
                id="path78"
                d="m67.966 148.17 9.148-9.8141"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path79"
                d="m54.244 133.78 11.812-7.0164"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path80"
                d="m61.927 120.06-12.612 5.1957"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path81"
                d="m61.316 110.4-13.278 3.153"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path83"
                d="m59.266 42.408-9.6715-9.5459"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path84"
                d="m69.063 35.594-7.7875-10.896"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path85"
                d="m79.802 30.382-5.558-11.932"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path91"
                d="m140.78 29.283 4.7416-11.901"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path100"
                d="m90.403 141.88 5.9284-12.634"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path101"
                d="m89.493 125.52 6.8832 3.7303"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path102"
                d="m80.322 136.58 9.1702-11.08"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path103"
                d="m87.85 127.7 7.3939 3.9967"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path104"
                d="m94.733 132.8-7.616-4.0411"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path105"
                d="m86.007 129.67 8.1266 4.463"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path106"
                d="m93.6 135.27-8.3709-4.5518"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path107"
                d="m84.497 131.67 8.5263 4.8627"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path108"
                d="m92.557 137.6-9.0148-4.7516"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path109"
                d="m91.86 139.12-9.3889-5.1184"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path110"
                d="m76.819 133.85 9.9228-10.237"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path111"
                d="m81.31 118.21 5.4952 5.3696"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path112"
                d="m69.252 125.9 11.995-7.6933"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path113"
                d="m79.19 119.59 5.9729 5.6842"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path114"
                d="m84.031 126.43-6.0617-5.9285"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path115"
                d="m83.209 127.39-6.5058-6.0839"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path116"
                d="m82.387 128.14-6.7722-6.2393"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path117"
                d="m81.277 129.16-6.8832-6.3059"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path118"
                d="m80.434 130.12-7.1053-6.639"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path119"
                d="m79.523 131.25-7.2829-7.0386"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path120"
                d="m75.532 63.196 11.21 10.268"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path121"
                d="m64.008 78.928 14.099 5.7464"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path122"
                d="m86.616 73.276-8.6039 11.304"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path123"
                d="m84.356 71.266-9.0435 12.215"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path124"
                d="m73.711 82.853 9.2633-12.843"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path125"
                d="m81.812 68.911-9.7343 13.188"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path126"
                d="m70.476 81.597 10.08-13.848"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path127"
                d="m79.237 66.525-10.457 14.319"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path128"
                d="m67.054 80.121 10.99-14.57"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path129"
                d="m81.121 63.447 9.2633-5.7464"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path130"
                d="m91.295 58.894-9.0749 5.7464"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path131"
                d="m83.414 65.897 8.4469-5.4952"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path132"
                d="m92.551 61.5-8.3213 5.3382"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path133"
                d="m85.141 67.938 7.8817-5.2126"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path134"
                d="m93.682 63.918-7.5991 4.9614"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path135"
                d="m87.025 70.041 7.2537-4.8044"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path136"
                d="m89.16 55.032 6.343 12.466"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path137"
                d="m79.174 61.061 9.4203 10.676"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path138"
                d="m95.499 67.247-7.0967 4.5218"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path139"
                d="m160.52 81.224-14.521 5.1069"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path140"
                d="m162.92 91.881-15.099 1.7319"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path141"
                d="m148.11 93.641-2.0872-7.2163"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path142"
                d="m150.6 93.301-2.1316-7.8158"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path143"
                d="m152.13 93.151-2.3092-8.06"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path144"
                d="m153.62 92.881-2.3758-8.3043"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path145"
                d="m155.17 92.791-2.7755-8.6373"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path146"
                d="m156.55 92.531-2.6645-8.8372"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path147"
                d="m157.97 92.371-2.7533-9.2368"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path148"
                d="m159.57 92.151-2.8865-9.4145"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path149"
                d="m163.36 95.881-15.292 0.65942"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path150"
                d="m162.39 107.16-14.696-2.7633"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path151"
                d="m148.1 96.391-0.37681 8.2271"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path153"
                d="m150.49 104.96 0.33306-8.4597"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path154"
                d="m151.93 105.29 0.46628-8.9482"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path155"
                d="m153.44 105.47 0.24424-9.1702"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path156"
                d="m154.73 105.83 0.48849-9.6143"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path157"
                d="m156.28 106.05 0.33306-9.8808"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path158"
                d="m157.66 106.22 0.5551-10.058"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path159"
                d="m159.13 106.49 0.44408-10.391"
                style={{ paintOrder: "stroke markers fill" }}
                />
            </g>
            </g>
            <ellipse
            id="path160"
            cx="111.94"
            cy="98.171"
            rx="21.548"
            ry="20.574"
            fill="#666"
            strokeWidth={0}
            style={{ paintOrder: "stroke markers fill" }}
            />
            <g stroke="#000">
            <g
                id="g8"
                transform="translate(-4.5409 -16.029)"
                fill="#999"
                strokeWidth=".25"
            >
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
            <g id="g9" transform="translate(-4.5409 -16.029)" strokeWidth=".38">
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
            <path
                id="path187"
                d="m20.026 120.39 41.697-10.114"
                fill="#92ff92"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path189"
                d="m20.859 75.848 40.415 12.039"
                fill="#92ff92"
                style={{ paintOrder: "stroke markers fill" }}
            />
            </g>
            <g fill="none" stroke="#000">
            <path
                id="path29"
                d="m3.0939 70.63a112.98 106.16 0 0 1 56.45-66.189"
                strokeWidth="1.2726"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path30"
                d="m3.2674 70.193 18.189 5.8679"
                strokeWidth="1.0163"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path31"
                d="m58.924 4.0545 9.6533 16.746"
                strokeWidth="1.0258"
                style={{ paintOrder: "stroke markers fill" }}
            />
            </g>
            <text
            id="text211"
            transform="matrix(.26458 0 0 .26458 -4.5409 -16.029)"
            fill="#000000"
            stroke="#000000"
            strokeWidth=".37795"
            style={{
                paintOrder: "stroke markers fill",
                shapeInside: "url(#rect211)",
                whiteSpace: "pre"
            }}
            xmlSpace="preserve"
            />
            <g fill="none" stroke="#000">
            <g>
                <path
                id="path7"
                d="m124.26 51.432a51.947 48.21 0 0 1 38.014 58.342 51.947 48.21 0 0 1-62.864 35.279 51.947 48.21 0 0 1-38.015-58.342 51.947 48.21 0 0 1 62.864-35.28"
                strokeWidth="1.0069"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <g strokeWidth=".5">
                <path
                    id="path7-9"
                    d="m57.966 86.754a55.173 51.562 0 0 1 20.165-29.368"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path7-9-3"
                    d="m85.074 53.089a55.173 51.562 0 0 1 44.623-3.479"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path7-9-3-1"
                    d="m163.41 80.633a55.173 51.562 0 0 1 1.9354 29.268"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path7-9-3-1-7"
                    d="m163.04 117.11a55.173 51.562 0 0 1-25.613 26.713"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path7-9-3-1-7-7"
                    d="m97.974 148.14a55.173 51.562 0 0 1-32.21-21.375"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path7-9-3-1-7-7-2"
                    d="m61.919 120.33a55.173 51.562 0 0 1-3.4882-8.8126"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                </g>
            </g>
            <path
                id="path4-3-5"
                d="m175.47 75.759c5.663 8.1472 6.3837 26.09 3.911 36.977"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path43"
                d="m179.78 112.5-14.196-2.7557"
                strokeWidth=".48624"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path45"
                d="m175.73 75.894-12.245 4.9573"
                strokeWidth=".47354"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path4-3"
                transform="translate(3.4501 1.4375)"
                d="m172.89 120.47c-3.4252 11.892-21.962 30.089-33.367 32.771"
                clipPath="url(#clipPath395)"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path37"
                d="m143.31 154.8-5.741-11.193"
                strokeWidth=".44667"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path42"
                d="m176.67 122.3-13.54-4.8766"
                strokeWidth=".47841"
                style={{ paintOrder: "stroke markers fill" }}
            />
            </g>
            <path
            id="path400"
            d="m159.09 145.69-9.0538-10.126"
            fill="#999"
            stroke="#000"
            strokeWidth="1.038"
            style={{ paintOrder: "stroke markers fill" }}
            />
            <path
            id="path401"
            d="m170.08 134.01-12.263-7.1864"
            fill="#999"
            stroke="#000"
            strokeWidth="1.073"
            style={{ paintOrder: "stroke markers fill" }}
            />
            <g fill="none" stroke="#000">
            <g>
                <path
                id="path402"
                d="m154.48 140.44c3.9974-2.7006 7.2849-5.9405 9.1673-10.196"
                strokeWidth=".5"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path403"
                d="m166.77 102.75 13.555 1.9278"
                strokeWidth=".52027"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path404"
                d="m166.92 95.298 13.8-1.0575"
                strokeWidth=".5042"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path405"
                d="m165.77 87.824 13.097-3.3734"
                strokeWidth=".5"
                style={{ paintOrder: "stroke markers fill" }}
                />
            </g>
            <path
                id="path4-3-5-5-6"
                d="m44.708 82.846c2.0133-10.368 15.523-29.706 25.354-36.255"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path82"
                d="m77.983 57.577-8.4245-11.196"
                strokeWidth=".51848"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path4-3-5-5"
                d="m78.967 41.965c22.436-12.201 45.929-7.6865 55.731-3.8916"
                style={{ paintOrder: "stroke fill markers" }}
            />
            <path
                id="path97"
                d="m129.49 49.511 4.9785-11.499"
                strokeWidth=".48115"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <path
                id="path406"
                d="m79.159 41.737 6.1255 11.168"
                strokeWidth=".52342"
                style={{ paintOrder: "stroke markers fill" }}
            />
            </g>
            <path
            id="path412"
            d="m48.054 73.951 12.284 5.4194"
            fill="#999"
            stroke="#000"
            strokeWidth=".53832"
            style={{ paintOrder: "stroke markers fill" }}
            />
            <g fill="#808080">
            <g stroke="#000">
                <path
                id="path417"
                d="m55.01 168.43 8.6731-10.782"
                strokeWidth=".5"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path418"
                d="m60.041 171.4 8.2419-10.494"
                strokeWidth=".5"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path419"
                d="m65.032 165.14 5.7381 3.4304"
                strokeWidth=".53492"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path420"
                d="m73.418 163.54-3.023 5.1268"
                strokeWidth=".48816"
                style={{ paintOrder: "stroke markers fill" }}
                />
            </g>
            <g stroke="#fff">
                <path
                id="path447"
                transform="scale(.26458)"
                d="m206.28 289.04c-11.654-5.1446-21.427-9.5021-21.718-9.6834-0.43281-0.27005 0.0174-1.34 2.4884-5.9139 18.957-35.091 48.141-71.673 72.505-90.889 2.2743-1.7936 4.324-3.2194 4.5548-3.1684 0.32576 0.072 27.423 35.701 28.478 37.445 0.14716 0.2432-1.1667 1.4795-3.2718 3.0788-13.075 9.9335-26.541 23.349-37.22 37.083-8.0973 10.413-16.465 24.174-21.916 36.04-1.2354 2.6894-2.351 4.996-2.4789 5.1257-0.12796 0.12968-9.7679-3.9734-21.422-9.1179z"
                strokeWidth="1.369"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                id="path448"
                transform="scale(.26458)"
                d="m78.781 284.5c-18.82-6.0084-63.102-20.4-63.262-20.559-0.11528-0.11529 0.72254-3.111 1.8618-6.6572 14.548-45.282 37.342-87.585 67.391-125.07 15.007-18.722 34.152-38.526 52.506-54.315 23.899-20.559 52.127-39.689 79.751-54.048l6.2218-3.2341 1.4297 2.4627c10.935 18.836 31.61 54.895 31.52 54.976-0.0643 0.05785-3.7029 2.0215-8.0857 4.3637-35.409 18.922-55.289 32.806-74.647 52.131-14.857 14.831-26.491 29.632-39.873 50.729-15.616 24.617-33.5 59.011-49.77 95.713-1.0813 2.4392-2.0475 4.4224-2.1471 4.4071-0.09961-0.0153-1.4036-0.41807-2.8977-0.89508z"
                strokeWidth="1.369"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <g strokeWidth="1.936">
                <path
                    id="path449"
                    transform="scale(.26458)"
                    d="m207.2 141.87-17.159-16.826 1.5368-1.3119c3.2789-2.7992 15.112-11.554 20.234-14.969 9.0629-6.0438 20.088-12.558 20.504-12.114 1.0313 1.1014 26.623 37.101 26.623 37.45 0 0.21998-0.74917 0.82986-1.6648 1.3553-6.2875 3.6079-21.416 14.252-31.832 22.395-1.0582 0.8274-1.4836 0.45478-18.242-15.979z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path450"
                    transform="scale(.26458)"
                    d="m248.18 114.41c-7.1801-10.046-13.228-18.555-13.439-18.908-0.76081-1.2725 25.769-15.278 41.898-22.118l3.6068-1.5296 9.5836 20.603c5.271 11.332 9.5836 20.819 9.5836 21.083s-2.8238 1.7171-6.275 3.2295c-7.8259 3.4294-19.54 9.259-26.19 13.034-2.783 1.5797-5.2068 2.8721-5.3862 2.8721s-6.2007-8.2193-13.381-18.265z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path451"
                    transform="scale(.26458)"
                    d="m320.53 193.95c-1.4082-2.5717-6.2559-11.416-10.773-19.653l-8.2123-14.978 6.7456-3.284c45.772-22.284 96.7-29.947 149.99-22.569 13.041 1.8053 28.36 5.2799 40.74 9.2401l7.2629 2.3234-1.4623 3.4253c-3.6512 8.5527-15.892 36.647-16.026 36.781-0.0818 0.0818-2.4455-0.53046-5.2526-1.3606-21.331-6.3077-49.426-9.5017-72.208-8.2089-29.914 1.6975-57.511 8.475-82.543 20.271l-5.7057 2.6888z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path452"
                    transform="scale(.26458)"
                    d="m300.77 110.06c-0.6781-1.5094-4.6317-10.005-8.7858-18.88-4.1541-8.8747-7.9632-17.079-8.4646-18.232l-0.91171-2.0958 5.1975-1.9449c33.045-12.366 64.379-19.566 100.48-23.089 11.231-1.0961 42.486-1.5486 54.554-0.78975 31.831 2.0016 61.295 7.3413 90.45 16.392 11.221 3.4834 14.85 4.9075 14.667 5.7557-0.25656 1.1937-16.05 40.63-16.43 41.028-0.19837 0.20721-1.6098-0.0979-3.1366-0.67802-4.2533-1.6161-18.623-5.8754-26.6-7.8841-62.684-15.786-130.22-12.303-190.34 9.8161-4.226 1.5546-8.079 2.9435-8.5622 3.0862-0.66648 0.19694-1.1761-0.40284-2.1114-2.4848z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path453"
                    transform="scale(.26458)"
                    d="m647.5 181.21c-1.3071-1.8783-14.87-14.418-22.175-20.501-5.7945-4.8257-6.6916-5.7658-6.147-6.4413 1.7361-2.1529 28.172-31.132 28.776-31.544 0.50671-0.34579 2.0723 0.6377 5.7081 3.5857 7.2801 5.903 18.136 15.725 24.113 21.816l5.1983 5.2975-17.337 14.469c-17.207 14.36-17.343 14.46-18.137 13.318z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path454"
                    transform="scale(.26458)"
                    d="m626.04 324.81c-0.80317-3.1027-2.449-8.5887-3.6575-12.191-1.2084-3.6024-2.1649-6.588-2.1254-6.6346 0.0395-0.0467 9.5084-3.9088 21.042-8.5826 15.681-6.3544 21.077-8.3356 21.391-7.855 3.3294 5.0838 7.621 15.016 10.107 23.391 0.87034 2.9324 1.5229 5.3736 1.4501 5.4249-0.0728 0.0513-10.16 2.668-22.415 5.8148s-22.744 5.8459-23.307 5.9978c-0.9218 0.24855-1.1709-0.28923-2.4848-5.3651z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path455"
                    transform="scale(.26458)"
                    d="m93.489 492.93c-5.7938-13.597-13.838-36.599-12.898-36.881 1.4396-0.43279 47.273-11.422 47.638-11.422 0.25812 0 1.8825 4.3221 3.6097 9.6046 1.7272 5.2826 4.6613 13.366 6.5202 17.963 1.8589 4.597 3.2922 8.4458 3.1852 8.5528-0.14516 0.14517-41.004 18.172-44.265 19.53-0.32074 0.13354-1.9407-3.0065-3.79-7.3465z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path456"
                    transform="scale(.26458)"
                    d="m118.06 539.05c-7.4228-11.421-20.604-35.55-19.838-36.316 0.40664-0.40664 44.576-19.73 44.716-19.562 0.0609 0.0731 2.2011 4.2822 4.7561 9.3534 3.8691 7.6795 11.438 20.922 15.115 26.448l0.89705 1.3477-18.844 11.536c-10.364 6.3447-19.681 12.026-20.704 12.625l-1.8596 1.0896z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path457"
                    transform="scale(.26458)"
                    d="m153.04 584.31c-9.4423-10.284-19.624-22.828-26.932-33.181l-2.3879-3.3828 19.544-11.985c10.749-6.5915 20.061-12.27 20.694-12.618 1.0898-0.60041 1.3472-0.35747 4.8846 4.6102 7.0447 9.8933 14.411 19.019 22.196 27.499 2.1271 2.3169 3.8538 4.3659 3.837 4.5534-0.024 0.26908-16.535 14.762-33.461 29.371l-2.1792 1.881z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path458"
                    transform="scale(.26458)"
                    d="m182.09 612.24c-3.235-2.7608-9.2987-8.2134-13.475-12.117l-7.5929-7.0972 1.19-1.133c2.8756-2.738 34.264-29.956 34.546-29.956 0.17228 0 2.8802 2.4608 6.0176 5.4685 3.1374 3.0077 8.0712 7.5479 10.964 10.089s5.198 4.8057 5.1225 5.0314c-0.18342 0.54873-30.286 34.656-30.625 34.699-0.14588 0.0187-2.9121-2.2249-6.1471-4.9858z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path459"
                    transform="scale(.26458)"
                    d="m199.58 626.2c-5.1334-3.8428-9.2639-7.1511-9.1789-7.3517 0.085-0.20059 7.0506-8.1315 15.479-17.624l15.324-17.26 1.5798 1.2593c0.86891 0.69262 4.6164 3.5164 8.3278 6.2752 3.7114 2.7587 6.7657 5.1915 6.7873 5.4062 0.0322 0.31945-26.318 33.4-28.372 35.618-0.49353 0.53313-2.4492-0.70999-9.9478-6.3234z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path460"
                    transform="scale(.26458)"
                    d="m219.04 639.78c-5.7175-3.7422-7.714-5.3053-7.361-5.7628 5.932-7.687 28.568-35.43 28.843-35.35 0.37586 0.10896 12.674 8.1354 14.487 9.4556 0.86552 0.62998-0.15492 2.074-13.241 18.738-7.7985 9.9302-14.337 18.055-14.531 18.055-0.1935 0-3.8823-2.3107-8.1973-5.135z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path461"
                    transform="scale(.26458)"
                    d="m281.74 672.13c-11.445-4.5927-20.197-8.5459-30.223-13.652-8.7875-4.4752-21.071-11.306-21.458-11.934-0.19943-0.32268 13.247-17.907 15.289-19.994 0.56943-0.58202 2.3269 0.28884 10.852 5.3774 5.5949 3.3396 10.396 6.0724 10.67 6.0731 0.27342 6.4e-4 0.73444-0.4639 1.0245-1.0323 1.3992-2.7421 9.126-15.645 9.5116-15.883 0.24158-0.1493 3.736 1.2741 7.7653 3.1631s11.089 4.9643 15.689 6.834c4.5994 1.8697 8.3821 3.5734 8.406 3.786 0.0239 0.21262-3.8545 9.4706-8.6187 20.573-5.9086 13.77-8.9064 20.186-9.4305 20.185-0.4226-1e-3 -4.6871-1.5747-9.4766-3.4966z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path462"
                    transform="scale(.26458)"
                    d="m349.61 601.61c-25.849-6.6543-51.451-17.559-72.938-31.066-6.7753-4.259-16.705-11.173-16.705-11.632 0-0.179 7.0884-7.9288 15.752-17.222l15.752-16.896 5.6343 3.9388c11.662 8.1525 25.056 15.513 39.015 21.44 7.6794 3.2607 23.357 8.6266 28.473 9.7454 1.62 0.35424 2.9454 0.82695 2.9454 1.0505 0 1.1654-10.384 42.456-10.673 42.44-0.18733-0.0104-3.4525-0.82006-7.2559-1.7992z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path715"
                    transform="scale(.26458)"
                    d="m185.31 465.5c-3.3913-7.6365-7.8153-19.271-9.9996-26.298l-1.7656-5.6798 46.17-11.194 2.3739 7.1787c2.468 7.4631 6.1776 16.833 8.4033 21.225 0.71 1.4011 1.1203 2.6477 0.91182 2.7702-0.60266 0.35401-43.04 17.76-43.3 17.76-0.12906 0-1.3863-2.5932-2.7938-5.7628z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path716"
                    transform="scale(.26458)"
                    d="m252.27 553.17c-14.441-11.616-28.917-26.554-40.131-41.412-3.4941-4.6295-4.2941-5.9962-3.7867-6.4688 0.71924-0.67004 39.627-23.775 40.036-23.775 0.14305 0 1.6727 1.8557 3.3993 4.1238 8.2457 10.832 22.209 25.201 32.581 33.526l5.1051 4.098-14.31 15.367c-7.8706 8.4521-15.053 16.137-15.962 17.078l-1.6514 1.7104z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path717"
                    transform="scale(.26458)"
                    d="m531.75 563.24c-5.2648-10.298-9.442-18.935-9.2827-19.193 0.15933-0.25778 2.6824-1.7351 5.6068-3.2829 10.095-5.3431 21.173-12.74 31.477-21.017l6.3239-5.0801 1.6902 1.7355c4.6264 4.7503 28.963 32.421 28.836 32.787-0.35276 1.0222-13.217 10.787-21.404 16.248-11.807 7.8748-25.662 14.871-32.077 16.197l-1.5984 0.33045z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                <path
                    id="path718"
                    transform="scale(.26458)"
                    d="m506.41 670.38c-2.6428-9.356-5.3241-18.876-5.9584-21.156l-1.1533-4.1454 7.2431-1.9364c8.7659-2.3436 22.377-6.7142 30.461-9.7817 3.2705-1.2409 6.1009-2.0873 6.2898-1.8808 0.46175 0.50475 18.899 38.777 18.899 39.231 0 0.41894-0.19058 0.49602-11.537 4.6664-11.238 4.1304-27.955 9.2593-38.155 11.706-1.2843 0.30811-1.2858 0.30404-6.0898-16.703z"
                    style={{ paintOrder: "stroke markers fill" }}
                />
                </g>
            </g>
            </g>
            <g id="g740">
            <title id="title741">AULA 32</title>
            <path
                id="path430"
                transform="scale(.26458)"
                d="m556.54 653.17c-4.4824-9.2964-8.8183-18.308-9.6353-20.025l-1.4855-3.1226 6.1943-2.6792c6.2632-2.7091 20.027-9.4437 25.438-12.446l2.9438-1.6338 12.602 18c6.9309 9.9002 12.742 18.186 12.915 18.414 0.34872 0.46042-0.87119 1.1805-10.96 6.4694-7.4532 3.9073-16.408 8.1846-24.172 11.546-3.0465 1.3191-5.573 2.3943-5.6143 2.3893-0.0414-5e-3 -3.7426-7.6152-8.225-16.912z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text718"
                x="149.01758"
                y="171.04152"
                fill="#000000"
                fontSize="3.175px"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan718" x="149.01758" y="171.04152" fill="#000000">
                A32
                </tspan>
            </text>
            </g>
            <g id="g741">
            <title id="title742">LABORATORIO DE CIENCIAS HUMANAS</title>
            <path
                id="path429"
                transform="scale(.26458)"
                d="m338.4 689.82c-8.3674-1.8682-18.729-4.5859-26.991-7.0791-4.9938-1.507-16.467-5.2893-17.138-5.6498-0.37459-0.20119-0.13153-0.79807 8.5875-21.087 7.4101-17.244 9.0229-20.858 9.2597-20.752 0.97381 0.43595 14.562 4.9117 17.945 5.9108 5.3328 1.575 12.478 3.4701 17.614 4.6719 3.3888 0.79294 4.106 1.0146 4.0346 1.2468-0.0752 0.24463-9.3571 41.641-9.6366 42.978-0.0573 0.27393-0.19578 0.49102-0.30784 0.48243-0.11206-9e-3 -1.6273-0.33347-3.3673-0.72195z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".24779"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text718-22"
                transform="scale(1.0084 .99168)"
                x="80.192314"
                y="175.37871"
                fill="#000000"
                fontSize="2.0209px"
                strokeWidth=".63651"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan718-6" x="80.192314" y="175.37871">
                Lab. de
                </tspan>
                <tspan id="tspan723" x="80.192314" y="177.90485">
                Ciencias
                </tspan>
                <tspan id="tspan724" x="80.192314" y="180.43098">
                Humanas
                </tspan>
            </text>
            </g>
            <g id="g742">
            <title id="title743">CENTRO DE ESTUDIOS LATINO-AMERICANOS</title>
            <path
                id="path428"
                transform="scale(.26458)"
                d="m256.83 629.47c-5.1065-3.0622-9.3657-5.6159-9.4649-5.6748-0.13722-0.0815 1.101-1.7428 5.1742-6.9419 2.945-3.7592 5.4269-6.914 5.5153-7.0107 0.13387-0.14653 0.62183 0.0936 2.9303 1.442 4.3762 2.5562 11.423 6.428 13.806 7.5858 0.40499 0.19676 0.73362 0.41778 0.73027 0.49115-0.01 0.21582-9.1379 15.604-9.2784 15.642-0.0704 0.0188-4.3061-2.4712-9.4125-5.5335z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".17521"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text718-22-6"
                transform="scale(.92086 1.0859)"
                x="72.745789"
                y="150.64951"
                fill="#000000"
                fontSize=".87509px"
                strokeWidth=".27562"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan724-3" x="72.745789" y="150.64951">
                Centro de
                </tspan>
                <tspan id="tspan726" x="72.745789" y="151.74336">
                Est. Latino-
                </tspan>
                <tspan id="tspan727" x="72.745789" y="152.83723">
                americanos
                </tspan>
            </text>
            </g>
            <g id="g739">
            <title id="title740">
                CENTRO DE INVESTIGACION Y DESARROLLOS INFORMATICOS
            </title>
            <path
                id="path431"
                transform="scale(.26458)"
                d="m595.19 630.85c-6.9063-9.8456-12.637-18.124-12.735-18.396-0.11838-0.32853 1.2501-1.3368 4.0701-2.9988 8.0339-4.7348 17.537-11.072 26.231-17.494l4.5967-3.3951 1.5609 1.6914c0.85849 0.9303 7.6947 8.4666 15.191 16.747l13.631 15.056-2.7642 2.1393c-4.608 3.5663-14.377 10.453-20.513 14.461-5.7541 3.7585-15.102 9.4726-16.16 9.8788-0.409 0.15695-3.8095-4.4316-13.109-17.689z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text718-2"
                x="159.47574"
                y="164.9463"
                fill="#000000"
                fontSize="3.175px"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan718-5" x="159.47574" y="164.9463" fill="#000000">
                CIDI
                </tspan>
            </text>
            </g>
            <path
            id="path719"
            transform="scale(.26458)"
            d="m577.66 521.04c-3.8595-4.3133-7.4027-8.288-7.8736-8.8324l-0.85625-0.99001 4.2406-4.1102c6.8921-6.6803 13.593-14.202 19.491-21.877 1.5154-1.9722 2.8522-3.6224 2.9707-3.6673 0.18608-0.0704 20.209 11.485 20.828 12.02 0.12596 0.10888-0.55062 1.6094-1.5104 3.3499-5.9716 10.829-14.232 20.009-25.867 28.746-2.113 1.5868-3.9688 2.9568-4.124 3.0446-0.15959 0.0902-3.3308-3.2476-7.2995-7.683z"
            fill="#808080"
            stroke="#fff"
            strokeWidth=".96803"
            style={{ paintOrder: "stroke markers fill" }}
            />
            <g id="g738">
            <title id="title739">LABORATORIO DE ELECTRONICA IV</title>
            <path
                id="path432"
                transform="scale(.26458)"
                d="m635.14 604.68c-7.8672-8.6865-14.654-16.23-15.082-16.763l-0.77844-0.9691 3.8573-3.1164c6.7537-5.4565 13.42-11.479 21.267-19.212l7.63-7.5196 17.616 14.21c9.6887 7.8154 17.624 14.334 17.634 14.485 0.0322 0.4772-10.787 11.363-16.643 16.746-8.0234 7.3747-20.394 17.932-21.011 17.932-0.10193 0-6.6222-7.1071-14.489-15.794z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            >
                <title id="title738">LABORATORIO DE ELECTRONICA IV</title>
            </path>
            <text
                id="text719"
                transform="scale(.98705 1.0131)"
                x="168.87459"
                y="152.69884"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719" x="168.87459" y="152.69884">
                Lab. de
                </tspan>
                <tspan id="tspan720" x="168.87459" y="155.09721">
                Electronica IV
                </tspan>
            </text>
            </g>
            <g id="g743">
            <title id="title744">LABORATORIO DE ELECTRONICA III</title>
            <path
                id="path433"
                transform="scale(.26458)"
                d="m672.26 570.45c-9.1569-7.3983-17.112-13.841-17.678-14.316l-1.0291-0.86472 3.5976-4.0705c8.0158-9.0695 15.483-18.697 22.384-28.861 2.3075-3.3985 4.2518-6.1791 4.3207-6.1791 0.16735 0 39.756 22.422 39.975 22.64 0.28544 0.28544-7.3967 11.487-13.18 19.218-6.6786 8.9278-20.408 25.42-21.469 25.79-0.14973 0.0522-7.7642-5.9583-16.921-13.357z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2"
                transform="scale(.98705 1.0131)"
                x="178.72127"
                y="142.12279"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7" x="178.72127" y="142.12279">
                Lab. de
                </tspan>
                <tspan id="tspan720-1" x="178.72127" y="144.52116">
                Electronica III
                </tspan>
            </text>
            </g>
            <g id="g736">
            <title id="title736">LABORATORIO DE ELECTRONICA I</title>
            <g id="g735">
                <path
                id="path434"
                transform="scale(.26458)"
                d="m705.23 525.52c-10.957-6.1993-19.979-11.322-20.049-11.384-0.0702-0.0618 0.92948-1.875 2.2216-4.0294 5.7014-9.5064 12.418-22.415 16.391-31.503l1.7672-4.0418 2.008 0.75173c1.1044 0.41345 10.859 4.0473 21.677 8.0753 10.818 4.028 19.746 7.4006 19.84 7.4948 0.46749 0.46749-9.7228 21.626-14.764 30.655-2.6818 4.803-7.8791 13.545-8.6926 14.621-0.437 0.57808-2.1538-0.31743-20.399-10.64z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <text
                id="text719-2-4"
                transform="scale(.98705 1.0131)"
                x="186.51857"
                y="130.68481"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
                >
                <tspan id="tspan719-7-9" x="186.51857" y="130.68481">
                    Lab. de
                </tspan>
                <tspan id="tspan720-1-3" x="186.51857" y="133.08319">
                    Electronica I
                </tspan>
                </text>
            </g>
            </g>
            <g id="g734">
            <title id="title735">LABORATORIO DE COMPUTACION II</title>
            <path
                id="path439"
                transform="scale(.26458)"
                d="m728.23 480.58c-11.853-4.4078-21.599-8.0479-21.657-8.089-0.0578-0.0411 0.37308-1.2783 0.95745-2.7494 3.615-9.1002 8.0283-22.637 10.587-32.472 0.62598-2.4064 0.89703-2.9648 1.3714-2.8256 0.32519 0.0955 10.613 2.1489 22.862 4.5632 12.249 2.4143 22.322 4.4406 22.384 4.5029 0.29207 0.29206-2.8901 11.874-5.777 21.027-2.8237 8.9522-8.4446 24.102-8.9312 24.072-0.13466-8e-3 -9.9431-3.6214-21.797-8.0292z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-4-8"
                transform="scale(.99039 1.0097)"
                x="190.92059"
                y="119.57588"
                fill="#000000"
                fontSize="1.562px"
                strokeWidth=".49198"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-9-5" x="190.92059" y="119.57588">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-3-2" x="190.92059" y="121.52844">
                Computacion II
                </tspan>
            </text>
            </g>
            <g id="g733">
            <title id="title734">LABORATORIO DE COMPUTACION</title>
            <path
                id="path440"
                transform="scale(.26458)"
                d="m742.08 436.66c-12.205-2.4373-22.283-4.5235-22.396-4.6362-0.11265-0.11266 0.21227-2.134 0.72204-4.4918 2.1687-10.031 4.0245-22.125 4.9377-32.177 0.23526-2.5898 0.46547-4.75 0.51158-4.8004 0.0461-0.0504 10.339 0.23338 22.872 0.63057s23.09 0.72365 23.46 0.72546c0.6187 3e-3 0.65289 0.23855 0.43426 2.9916-1.0723 13.502-3.5727 30.315-6.3288 42.556-0.41444 1.8406-0.75352 3.4299-0.75352 3.5316 0 0.33786-1.1269 0.12988-23.459-4.3296z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-4-8-5"
                transform="scale(.9992 1.0008)"
                x="192.10068"
                y="108.48872"
                fill="#000000"
                fontSize="1.6065px"
                strokeWidth=".50597"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-9-5-4" x="192.10068" y="108.48872">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-3-2-8" x="192.10068" y="110.4968">
                Computacion I
                </tspan>
            </text>
            </g>
            <g id="g737">
            <title id="title737">LABORATORIO DE BIOMEDICA</title>
            <path
                id="path435"
                transform="scale(.26458)"
                d="m619.75 490.37c-11.555-6.7869-21.063-12.388-21.13-12.447-0.0668-0.0591 0.6802-1.3024 1.66-2.7629 4.8284-7.1972 9.406-15.336 13.921-24.751 1.8455-3.8481 2.5862-5.0558 3.0714-5.0078 1.157 0.11432 46.486 16.569 46.486 16.875 0 0.16425-0.58923 1.8718-1.3094 3.7946-2.655 7.0886-7.9422 17.088-13.252 25.062-3.4065 5.1162-8.0336 11.611-8.2585 11.592-0.0996-8e-3 -9.6349-5.5682-21.19-12.355z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-1"
                transform="scale(.98705 1.0131)"
                x="163.86244"
                y="123.05952"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-7" x="163.86244" y="123.05952">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-1" x="163.86244" y="125.4579">
                Biomedica
                </tspan>
            </text>
            </g>
            <g id="g731">
            <title id="title733">LABORATORIO DE OPTICA</title>
            <path
                id="path436"
                transform="scale(.26458)"
                d="m651.44 418.64c-13.248-2.5901-24.137-4.7558-24.199-4.8128-0.0615-0.057 0.38059-2.5254 0.98233-5.4854 1.1497-5.6555 2.5613-14.764 2.574-16.61 4e-3 -0.59766 0.14116-1.2973 0.30451-1.5548 0.23652-0.37283 5.2192 0.22874 24.47 2.9544 13.295 1.8824 24.269 3.5186 24.387 3.6361 0.30779 0.30778-0.90026 11.442-1.9098 17.603-1.1899 7.2607-1.6091 9.0614-2.0995 9.0175-0.23252-0.0208-11.262-2.157-24.51-4.7471z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-1-1"
                transform="scale(.98705 1.0131)"
                x="170.10451"
                y="105.33401"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-7-4" x="170.10451" y="105.33401">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-1-9" x="170.10451" y="107.73238">
                Optica
                </tspan>
            </text>
            </g>
            <g id="g730">
            <title id="title732">LABORATORIO DE IMAGENES</title>
            <path
                id="path437"
                transform="scale(.26458)"
                d="m655.79 390.79c-13.447-1.9435-24.453-3.5453-24.457-3.5596-4e-3 -0.0143 0.1208-1.8596 0.27802-4.1008 0.15722-2.2412 0.24224-8.0792 0.18894-12.973l-0.0969-8.8983 24.253-1.8628c13.339-1.0246 24.313-1.8031 24.386-1.73 0.43156 0.43155 0.70908 18.375 0.41444 26.796-0.18768 5.3639-0.38062 9.7774-0.42876 9.8077-0.0481 0.0303-11.09-1.535-24.537-3.4785z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-1-1-5"
                transform="scale(.98705 1.0131)"
                x="171.04628"
                y="97.054512"
                fill="#000000"
                fontSize="1.9187px"
                strokeWidth=".60431"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-7-4-5" x="171.04628" y="97.054512">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-1-9-8" x="171.04628" y="99.452888">
                Imagenes
                </tspan>
            </text>
            </g>
            <g id="g729">
            <title id="title731">LABORATORIO DE COMPUTACION III (LABO REDES)</title>
            <path
                id="path438"
                transform="scale(.26458)"
                d="m631.36 356.15c-0.4189-4.8318-1.28-11.291-2.2574-16.933-0.51767-2.9883-0.96014-5.6666-0.98328-5.9519-0.056-0.69005 46.557-12.8 46.924-12.191 0.27912 0.46367 2.2625 10.073 2.8477 13.796 1.4921 9.4948 2.5214 20.465 1.9202 20.465-0.19104 0-10.931 0.81477-23.867 1.8106-12.936 0.99582-23.705 1.8108-23.93 1.8111-0.24933 2.8e-4 -0.50567-1.1005-0.65358-2.8067z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth=".49558"
                style={{ paintOrder: "stroke markers fill" }}
            />
            <text
                id="text719-2-1-1-5-4"
                transform="scale(.94699 1.056)"
                x="176.61465"
                y="84.381706"
                fill="#000000"
                fontSize="1.6644px"
                strokeWidth=".52422"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
            >
                <tspan id="tspan719-7-7-4-5-5" x="176.61465" y="84.381706">
                Lab. de
                </tspan>
                <tspan id="tspan720-1-1-9-8-1" x="176.61465" y="86.462219">
                Computacion III
                </tspan>
                <tspan id="tspan721" x="176.61465" y="88.542732">
                Labo Redes
                </tspan>
            </text>
            </g>
            <path
            id="path721"
            transform="scale(.26458)"
            d="m753.26 389.02c-10.283-0.34967-20.611-0.65937-22.95-0.68823l-4.2529-0.0525 0.33852-10.117c0.873-26.089-2.9885-55.419-10.771-81.807-11.543-39.14-32.673-76.523-60.591-107.19l-4.7626-5.2322 34.601-28.857 3.759 4.0374c5.9279 6.367 16.082 18.614 21.981 26.511 30.366 40.653 50.326 86.954 58.531 135.77 3.0291 18.024 4.0921 31.428 4.0853 51.518-5e-3 13.79-0.18604 17.012-0.9471 16.824-0.17844-0.0441-8.7381-0.36624-19.021-0.71591z"
            fill="#808080"
            stroke="#fff"
            strokeWidth="1.936"
            style={{ paintOrder: "stroke markers fill" }}
            />
            <g id="g728">
            <title id="title728">AULA 33</title>
            <g id="g727">
                <path
                id="path446"
                transform="scale(.26458)"
                d="m197.73 319.86c-10.706-3.2132-21.004-6.3063-22.885-6.8736l-3.4198-1.0315 1.2045-4.4789c1.938-7.2067 9.4792-25.737 10.474-25.737 0.39079 0 41.696 18.184 42.756 18.823 0.48402 0.29162 0.041 2.023-1.8029 7.0458-1.3446 3.6626-3.1964 9.2525-4.1153 12.422-0.91884 3.1695-1.9125 5.7426-2.2081 5.7178-0.29561-0.0247-9.2969-2.6739-20.003-5.8871z"
                fill="#95ff95"
                stroke="#fff"
                strokeWidth="1.936"
                style={{ paintOrder: "stroke markers fill" }}
                />
                <text
                id="text722"
                x="49.834553"
                y="81.55616"
                fill="#000000"
                fontSize="3.175px"
                style={{ paintOrder: "stroke markers fill" }}
                xmlSpace="preserve"
                >
                <tspan id="tspan722" x="49.834553" y="81.55616" fill="#000000">
                    A33
                </tspan>
                </text>
            </g>
            </g>
        </g>
        </svg>
    )

}

Tornavias1P.propTypes = {
    showCardFunc: PropTypes.func
  }