var coll = document.getElementsByClassName('collapsible');

// 챗봇 클릭하면 떠오르게.
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// 챗봇 시작할 때 시간 받아서 출력.
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours //e.g. 7시의 경우 07시로 표시
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}

// 시작 메시지
function firstBotMessage(){
    let firstMessage = "안녕하세요!"
    document.getElementById("botStarterMessage").innerHTML = "<p class='botText'><span>" + firstMessage + '</span></p>';

    let time = getTime();
    
    $('#chat-timestamp').append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

// firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHTML = '<p class="botText"><span>' + botResponse + '</span></p>';
    $ ("#chatbox").append(botHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//응답 얻기
function getResponse() {
    let userText = $("#textInput").val();
    
    if(userText == "") {
        userText = "오늘도 코딩 열심히!";
    }

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout (() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHTML = '<p class="botText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//비행기 아이콘 누르면 메시지 전달
function sendButton() {
    getResponse();
}

//enter 키 눌러 메시지 보내기
$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getResponse();
    }
})

const textarea = document.getElementById('textInput');

textarea.addEventListener('input', function() {
    // textarea의 높이를 일단 최소화한 다음
    this.style.height = 'auto';
    
    // scrollHeight를 기반으로 높이를 재설정합니다.
    this.style.height = (this.scrollHeight) + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
  // 모달 요소 가져오기
  var chatModal = document.getElementById("chatModal");
  var closeChatModal = document.getElementById("closeChatModal");

  // club__call 버튼 가져오기
  var callButton = document.querySelector(".club__call");

  // 모달 열기
  callButton.addEventListener("click", function () {
    chatModal.style.display = "flex"; // 모달 보이기 (flex로 중앙 정렬)
  });

  // 모달 닫기 (X 버튼 클릭 시)
  closeChatModal.addEventListener("click", function () {
    chatModal.style.display = "none"; // 모달 숨기기
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", function (event) {
    if (event.target === chatModal) {
      chatModal.style.display = "none";
    }
  });
});