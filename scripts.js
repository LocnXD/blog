document.addEventListener('DOMContentLoaded', () => {
    const gwangjagoLink = document.getElementById('openGwangjago');
    gwangjagoLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.button === 1) { // 마우스 가운데 버튼 클릭일 경우
            openCenteredWindow('http://gat.gen.hs.kr/main/main.php');
        } else { // 그 외의 클릭은 새 창으로 열림
            window.open('http://gat.gen.hs.kr/main/main.php', '_blank');
        }
    });

    const dcLink = document.getElementById('openDc');
    dcLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.button === 1) {
            openCenteredWindow('https://dcinside.com/');
        } else {
            window.open('https://dcinside.com/', '_blank');
        }
    });

    const arcaLive = document.getElementById('openArca');
    arcaLive.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.button === 1) {
            openCenteredWindow('https://arca.live/');
        } else {
            window.open('https://arca.live/', '_blank');
        }
    });

    const chatPage = document.getElementById('openChat');
    chatPage.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.button === 1) {
            openCenteredWindow('chat.html');
        } else {
            window.open('chat.html', '_blank');
        }
    });

    function openCenteredWindow(url) {
        const width = 800;
        const height = 600;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        window.open(url, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
    }
});
$(document).ready(function () {
    $('#loading').hide();
  });

  function chatGPT() {
    const api_key = "sk-LpwtgBuJ46vdLtNHQxyCT3Bl"  // <- API KEY 입력
    const keywords = document.getElementById('keywords').value
    $('#loading').show();

    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: keywords + '에 대하여 최대한 도움이 되는 답변을 해줘.' },
    ]

    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      n: 1,
      messages: messages,
    }

    $.ajax({
      url: "https://api.openai.com/v1/chat/completions",
      method: 'POST',
      headers: {
        Authorization: "Bearer " +api_key+"bkFJVGC5YKqxjkjZ2jgvgkxp",
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    }).then(function (response) {
      $('#loading').hide();
      console.log(response)
      let result = document.getElementById('result')
      let pre = document.createElement('pre')

      pre.innerHTML = "\n\n" + response.choices[0].message.content
      result.appendChild(pre)

      document.getElementById('keywords').value = ''
    });
  }