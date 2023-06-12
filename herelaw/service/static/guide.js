// 스플래시 이미지 로딩
setTimeout(function () {
  var mainImageContainer = document.getElementById('main-image-container');
  if (mainImageContainer !== null) {
      mainImageContainer.style.display = 'none';
  }
  document.querySelector('.chat-container').style.display = 'none';
  document.getElementById('user-input').style.display = 'none';
}, 1500);




function HighwayPopup() {
  const highwayOverlay = document.getElementById('highway-overlay');
  highwayOverlay.style.display = 'flex';


  const closeButton = highwayOverlay.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      highwayOverlay.style.display = 'none';
    });
  }
}

function CarPopup() {
  const carOverlay = document.getElementById('car-overlay');
  carOverlay.style.display = 'flex';

  const closeButton = carOverlay.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      carOverlay.style.display = 'none';
    });
  }
}

// function MotorcyclePopup() {
//     const agreementOverlay = document.getElementById('motorcycle-overlay');
//     agreementOverlay.style.display = 'flex';

//     const closeButton = agreementOverlay.querySelector('.close-button');
//     if (closeButton) {
//         closeButton.addEventListener('click', () => {
//             agreementOverlay.style.display = 'none';

//             const agreementContent = document.getElementById('agreement-content');
//             agreementContent.innerHTML = ''; // 이미지 제거
//         });
//     }

//     const agreementContent = document.getElementById('agreement-content');
//     const imageUrl = 'uploads/과실심의분쟁위원회.png'; 
//     const imageElement = document.createElement('img');
//     imageElement.src = imageUrl;
//     imageElement.alt = '과실심의분쟁위원회 이미지';
//     imageElement.width = 450;  // 이미지 넓이 설정
//     imageElement.addEventListener('click', showOriginalImage);
//     agreementContent.appendChild(imageElement);
//     agreementContent.style.display = 'block';
// }

// const downloadButton = document.getElementById('download-button');
// const agreementImage = document.getElementById('agreement-image');

// downloadButton.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.href = agreementImage.src;
//     link.download = '과실심의분쟁위원회.png';
//     link.click();
// });



// function showOriginalImage() {
//     const imageUrl = 'C:/Users/USER/Desktop/최종 프로젝트 PPT/챗봇 히어로/HereLaw_v3/uploads/과실심의분쟁위원회.png'; // 이미지 파일의 경로를 설정해야 합니다.
//     const popupWindow = window.open('', '_blank', 'width=800, height=600');
//     const popupDocument = popupWindow.document;
//     popupDocument.write('<html><head><title>원본 이미지</title></head><body style="margin: 0; display: flex; justify-content: center; align-items: center;"><img src="' + imageUrl + '" style="max-width: 100%; max-height: 100%; cursor: pointer;"></body></html>');
//     popupDocument.close();

//     const imageElement = popupDocument.querySelector('img');
//     imageElement.onclick = function () {
//         popupWindow.close(); // 이미지를 클릭하면 팝업 창이 닫히도록 설정
//     };
// }


function HumanPopup() {
  const humanOverlay = document.getElementById('human-overlay');
  humanOverlay.style.display = 'flex';

  const closeButton = humanOverlay.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      humanOverlay.style.display = 'none';
    });
  }
}

function BicyclePopup() {
  const bicycleOverlay = document.getElementById('bicycle-overlay');
  bicycleOverlay.style.display = 'flex';

  const closeButton = bicycleOverlay.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      bicycleOverlay.style.display = 'none';
    });
  }
}

function MotorcyclePopup() {
  console.log("클릭됐당")
  const motorcycleOverlay = document.getElementById('motorcycle-overlay');
  motorcycleOverlay.style.display = 'flex';

  const closeButton = motorcycleOverlay.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      motorcycleOverlay.style.display = 'none';
    });
  }
}





// 도와줘요 히어로 버튼 누르면 전송되는 내용
document.addEventListener('DOMContentLoaded', function () {
  // 버튼 클릭 이벤트 핸들러 등록
  var highwayButton = document.getElementById('highway_button');
  highwayButton.addEventListener('click', function () {
    // 서버로 전송할 데이터 준비
    let latitude = null; // 위도
    let longitude = null; // 경도
    // 위도 경도
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude; // 위도
        longitude = position.coords.longitude; // 경도

        // 차도 유형
        // if 고속도로버튼누름{
        var dataToSend = {
          road: '고속도로', // 서버로 전송할 값
          latitude: latitude,
          longitude: longitude
        };
        // }
        // else if 차대차버튼누름{
        //   var dataToSend = {
        //     road: '차대차', // 서버로 전송할 값
        // latitude: latitude,
        // longitude: longitude
        //   };
        // }
        // else if 차대사람버튼누름{
        //   var dataToSend = {
        //     road: '차대사람', // 서버로 전송할 값
        //   };
        // }

        // AJAX 요청 보내기
        $.ajax({
          url: '/client_keyword', // 서버 엔드포인트 URL 설정
          type: 'POST', // 요청 메소드 설정 (GET, POST 등)
          data: JSON.stringify(dataToSend), // 전송할 데이터 설정
          contentType: 'application/json', // 요청 데이터 타입 설정
          success: function (response) {
            // 요청이 성공적으로 처리된 경우의 동작
            console.log('서버에 값 전송 성공');
            window.location.href = '/chatbot'; // (/chatbot) 엔드 포인트 -> chatbot_test.html로 페이지 이동
          },
          error: function (error) {
            // 요청이 실패한 경우의 동작
            console.error('서버에 값 전송 실패:', error);
          }
        });
      });
    }
    else {
      latitude = null; // 위도
      longitude = null; // 경도
    }

  });
});

function showPopup_2(trafficOffensePopup) {
  var popup_1 = document.getElementById('trafficOffensePopup');
  popup_1.style.display = 'block';
}

function showPopup_1(emergencyTowingPopup) {
  var popup_2 = document.getElementById('emergencyTowingPopup');
  popup_2.style.display = 'block';
}


function hidePopup_2(trafficOffensePopup) {
  var popup_1 = document.getElementById('trafficOffensePopup');

  popup_1.style.display = 'none';
}

function hidePopup_1(emergencyTowingPopup) {
  var popup_2 = document.getElementById('emergencyTowingPopup');

  popup_2.style.display = 'none';
}
