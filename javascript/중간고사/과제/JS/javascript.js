const university = {
    lat: 37.2132,
    lng: 126.94728
};


const hospitals = [

    {
        id: 1,
        name: "가온이비인후과의원",
        category: "이비인후과",
        address: "경기도 화성시 봉담읍 상리2길 55",
        phone: "031-293-8922",
        lat: 37.2171,
        lng: 126.9518,
        open: "09:00",
        close: "18:00"
    },

    {
        id: 2,
        name: "눈애안과의원",
        category: "안과",
        address: "경기도 화성시 봉담읍 상리2길 51",
        phone: "031-295-1888",
        lat: 37.2175,
        lng: 126.9522,
        open: "09:00",
        close: "18:00"
    },

    {
        id: 3,
        name: "리멤버피부과의원",
        category: "피부과",
        address: "경기도 화성시 봉담읍 상리2길 51",
        phone: "전화번호 확인",
        lat: 37.2174,
        lng: 126.9526,
        open: "09:00",
        close: "19:00"
    },

    {
        id: 4,
        name: "미즈여성의원",
        category: "산부인과",
        address: "경기도 화성시 봉담읍 동화길 89",
        phone: "031-297-8787",
        lat: 37.2200,
        lng: 126.9570,
        open: "09:00",
        close: "18:00"
    },

    {
        id: 5,
        name: "봄소아청소년과의원",
        category: "소아청소년과",
        address: "경기도 화성시 봉담읍 참샘길 2",
        phone: "031-223-6554",
        lat: 37.2235,
        lng: 126.9605,
        open: "08:30",
        close: "18:00"
    },

    {
        id: 6,
        name: "봉담21세기정형외과의원",
        category: "정형외과",
        address: "경기도 화성시 봉담읍 와우로73번길 6",
        phone: "전화번호 확인",
        lat: 37.2230,
        lng: 126.9623,
        open: "09:00",
        close: "18:00"
    },

    {
        id: 7,
        name: "성모내과의원",
        category: "내과",
        address: "경기도 화성시 봉담읍 동화길 91",
        phone: "031-298-7434",
        lat: 37.2201,
        lng: 126.9572,
        open: "08:30",
        close: "18:00"
    },

    {
        id: 8,
        name: "365온가족치과",
        category: "치과",
        address: "경기도 화성시 봉담읍 상리중심상가길 6-4",
        phone: "전화번호 확인",
        lat: 37.2167,
        lng: 126.9500,
        open: "09:00",
        close: "19:00"
    },

    {
        id: 9,
        name: "삼성위드유비뇨의학과의원",
        category: "비뇨의학과",
        address: "경기도 화성시 봉담읍 상리2길 51",
        phone: "031-895-4270",
        lat: 37.2176,
        lng: 126.9525,
        open: "09:00",
        close: "18:00"
    },

    {
        id: 10,
        name: "고려힐링정신건강의학과의원",
        category: "정신건강의학과",
        address: "경기도 화성시 봉담읍 동화길 85",
        phone: "전화번호 확인",
        lat: 37.2198,
        lng: 126.9565,
        open: "09:00",
        close: "19:00"
    },

    {
        id: 11,
        name: "화성이엠365의원",
        category: "내과",
        address: "경기도 화성시 봉담읍 상리중심상가길 28-8",
        phone: "031-293-0911",
        lat: 37.2164,
        lng: 126.9511,
        open: "09:00",
        close: "21:00"
    },

    {
        id: 12,
        name: "밝은성모안과의원",
        category: "안과",
        address: "경기도 화성시 봉담읍 동화길 93-2",
        phone: "전화번호 확인",
        lat: 37.2204,
        lng: 126.9578,
        open: "09:00",
        close: "18:00"
    }

];


const hospitalList =
    document.getElementById("hospitalList");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const filterBox =
    document.getElementById("filterBox");

const sortSelect =
    document.getElementById("sortSelect");

const hospitalCount =
    document.getElementById("hospitalCount");

const symptomInput =
    document.getElementById("symptomInput");

const symptomBtn =
    document.getElementById("symptomBtn");

const symptomResult =
    document.getElementById("symptomResult");

const modal =
    document.getElementById("modal");

const modalInfo =
    document.getElementById("modalInfo");

const closeModal =
    document.getElementById("closeModal");


let map;
let markerLayer;
let currentList = [...hospitals];


function getDistance(lat1, lng1, lat2, lng2) {

    const R = 6371;

    const dLat =
        (lat2 - lat1) * Math.PI / 180;

    const dLng =
        (lng2 - lng1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


hospitals.forEach(function(hospital) {

    hospital.distance =
        getDistance(
            university.lat,
            university.lng,
            hospital.lat,
            hospital.lng
        );

});


function isOpen(hospital) {

    const now = new Date();

    if (now.getDay() === 0) {
        return false;
    }

    const current =
        now.getHours() * 60 +
        now.getMinutes();

    const openTime =
        hospital.open.split(":");

    const closeTime =
        hospital.close.split(":");

    const open =
        Number(openTime[0]) * 60 +
        Number(openTime[1]);

    const close =
        Number(closeTime[0]) * 60 +
        Number(closeTime[1]);

    return current >= open && current < close;
}


const departments = [
    "전체",
    "내과",
    "정형외과",
    "이비인후과",
    "피부과",
    "안과",
    "산부인과",
    "소아청소년과",
    "치과"
];


departments.forEach(function(category) {

    const button =
        document.createElement("button");

    button.innerText = category;
    button.className = "filter-btn";

    if (category === "전체") {
        button.classList.add("active");
    }

    button.addEventListener("click", function() {

        document
            .querySelectorAll(".filter-btn")
            .forEach(function(btn) {
                btn.classList.remove("active");
            });

        button.classList.add("active");

        if (category === "전체") {
            currentList = [...hospitals];
        } else {
            currentList =
                hospitals.filter(function(hospital) {
                    return hospital.category === category;
                });
        }

        sortHospitals();
        showHospitals(currentList);
        showMarkers(currentList);

    });

    filterBox.appendChild(button);

});


function showHospitals(list) {

    hospitalList.innerHTML = "";

    hospitalCount.innerText =
        "검색 결과 " + list.length + "개";

    if (list.length === 0) {

        hospitalList.innerHTML =
            "<p>검색 결과가 없습니다.</p>";

        return;
    }


    list.forEach(function(hospital) {

        const card =
            document.createElement("div");

        card.className =
            "hospital-card";

        const open =
            isOpen(hospital);

        card.innerHTML = `

            <h3>${hospital.name}</h3>

            <p>진료과 : ${hospital.category}</p>

            <p>
                ${
                    open
                    ? '<span class="status-open">● 진료 중</span>'
                    : '<span class="status-closed">● 진료 종료</span>'
                }
            </p>

            <p>
                진료시간 :
                ${hospital.open} ~ ${hospital.close}
            </p>

            <p>주소 : ${hospital.address}</p>

            <p>
                장안대학교에서
                ${hospital.distance.toFixed(1)}km
            </p>

            <button
                class="detail-btn"
                onclick="showDetail(${hospital.id})"
            >
                상세보기
            </button>

            <button
                class="favorite-btn"
                onclick="addFavorite(${hospital.id})"
            >
                즐겨찾기
            </button>

        `;

        hospitalList.appendChild(card);

    });

}


function sortHospitals() {

    if (sortSelect.value === "distance") {

        currentList.sort(function(a, b) {
            return a.distance - b.distance;
        });

    }

    else if (sortSelect.value === "name") {

        currentList.sort(function(a, b) {
            return a.name.localeCompare(b.name, "ko");
        });

    }

    else if (sortSelect.value === "open") {

        currentList.sort(function(a, b) {
            return Number(isOpen(b)) - Number(isOpen(a));
        });

    }

}


sortSelect.addEventListener("change", function() {

    sortHospitals();

    showHospitals(currentList);

});


searchBtn.addEventListener("click", function() {

    const keyword =
        searchInput.value.trim();

    currentList =
        hospitals.filter(function(hospital) {

            return (
                hospital.name.includes(keyword)
                ||
                hospital.category.includes(keyword)
            );

        });

    sortHospitals();

    showHospitals(currentList);

    showMarkers(currentList);

});


searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


symptomBtn.addEventListener("click", function() {

    const text =
        symptomInput.value;

    let result = "";


    if (
        text.includes("배")
        ||
        text.includes("속")
        ||
        text.includes("소화")
    ) {
        result = "내과";
    }

    else if (
        text.includes("허리")
        ||
        text.includes("무릎")
        ||
        text.includes("관절")
    ) {
        result = "정형외과";
    }

    else if (
        text.includes("코")
        ||
        text.includes("목")
        ||
        text.includes("귀")
    ) {
        result = "이비인후과";
    }

    else if (
        text.includes("눈")
        ||
        text.includes("충혈")
    ) {
        result = "안과";
    }

    else if (
        text.includes("피부")
        ||
        text.includes("여드름")
        ||
        text.includes("가려")
    ) {
        result = "피부과";
    }

    else if (
        text.includes("이빨")
        ||
        text.includes("치아")
        ||
        text.includes("잇몸")
    ) {
        result = "치과";
    }

    else if (
        text.includes("생리")
        ||
        text.includes("임신")
    ) {
        result = "산부인과";
    }

    else {
        result = "내과";
    }


    symptomResult.innerText =
        "추천 진료과 : " + result;


    currentList =
        hospitals.filter(function(hospital) {
            return hospital.category === result;
        });


    showHospitals(currentList);

    showMarkers(currentList);

});


function showDetail(id) {

    const hospital =
        hospitals.find(function(item) {
            return item.id === id;
        });


    const open =
        isOpen(hospital);


    modalInfo.innerHTML = `

        <h2>
            ${hospital.name}
        </h2>


        <div class="detail-info">

            <strong>진료과</strong><br>

            ${hospital.category}

        </div>


        <div class="detail-info">

            <strong>현재 상태</strong><br>

            <span class="${
                open
                ? "detail-open"
                : "detail-closed"
            }">

                ${
                    open
                    ? "● 진료 중"
                    : "● 진료 종료"
                }

            </span>

        </div>


        <div class="detail-info">

            <strong>진료시간</strong><br>

            ${hospital.open}
            ~
            ${hospital.close}

        </div>


        <div class="detail-info">

            <strong>주소</strong><br>

            ${hospital.address}

        </div>


        <div class="detail-info">

            <strong>전화번호</strong><br>

            ${hospital.phone}

        </div>


        <div class="detail-info">

            <strong>장안대학교에서 거리</strong><br>

            ${hospital.distance.toFixed(1)}km

        </div>


        <button
            class="map-move-btn"
            onclick="moveToHospital(${hospital.id})"
        >

            지도에서 위치 보기

        </button>

    `;


    modal.style.display =
        "flex";

}


function moveToHospital(id) {

    const hospital =
        hospitals.find(function(item) {
            return item.id === id;
        });


    modal.style.display =
        "none";


    if (map) {

        map.setView(
            [
                hospital.lat,
                hospital.lng
            ],
            17
        );

    }

}


function addFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    if (favorites.includes(id)) {

        alert("이미 즐겨찾기한 병원입니다.");

        return;
    }


    favorites.push(id);


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    alert("즐겨찾기에 추가했습니다.");

}


closeModal.addEventListener("click", function() {

    modal.style.display =
        "none";

});


modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.style.display =
            "none";

    }

});


function markerColor(category) {

    if (category === "내과") {
        return "#4caf50";
    }

    if (category === "정형외과") {
        return "#4285f4";
    }

    if (category === "이비인후과") {
        return "#8e67c7";
    }

    if (category === "피부과") {
        return "#e889aa";
    }

    if (category === "안과") {
        return "#41b6d7";
    }

    if (category === "산부인과") {
        return "#f0a45d";
    }

    if (category === "소아청소년과") {
        return "#e5c34f";
    }

    if (category === "치과") {
        return "#e05f52";
    }

    return "#777";
}


function loadMapLibrary() {

    const css =
        document.createElement("link");

    css.rel =
        "stylesheet";

    css.href =
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

    document.head.appendChild(css);


    const script =
        document.createElement("script");

    script.src =
        "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    script.onload =
        makeMap;

    document.head.appendChild(script);

}


function makeMap() {

    map =
        L.map("mapArea").setView(
            [
                university.lat,
                university.lng
            ],
            15
        );


    L.tileLayer(
        "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
        {
            maxZoom: 18,
            attribution: "&copy; OpenStreetMap"
        }
    ).addTo(map);


    L.marker(
        [
            university.lat,
            university.lng
        ]
    )
    .addTo(map)
    .bindPopup("장안대학교");


    markerLayer =
        L.layerGroup().addTo(map);


    showMarkers(hospitals);

}


function showMarkers(list) {

    if (!markerLayer) {
        return;
    }

    markerLayer.clearLayers();


    list.forEach(function(hospital) {

        const color =
            markerColor(hospital.category);


        const icon =
            L.divIcon({

                className: "",

                html: `
                    <div style="
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        background-color: ${color};
                        border: 3px solid white;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.4);
                    ">
                    </div>
                `,

                iconSize: [22, 22],

                iconAnchor: [11, 11]

            });


        const marker =
            L.marker(
                [
                    hospital.lat,
                    hospital.lng
                ],
                {
                    icon: icon
                }
            );


        marker.bindPopup(`

            <b>${hospital.name}</b>

            <br>

            ${hospital.category}

            <br>

            ${
                isOpen(hospital)
                ? "진료 중"
                : "진료 종료"
            }

        `);


        marker.addTo(
            markerLayer
        );

    });

}


currentList.sort(function(a, b) {
    return a.distance - b.distance;
});


showHospitals(currentList);

loadMapLibrary();