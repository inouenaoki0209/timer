let btn = document.getElementById('btn');
btn.onclick = startCountdown = () =>{
    // タイマーの終了時刻を設定 (現在時刻から5分後)
    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 5);

    // 残り時間を表示する関数
    function displayTimeLeft() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerId); // タイマーを停止
            console.log('タイマーが終了しました。');
            return;
        }

        const minutes = Math.floor(timeLeft / 60000);
        let seconds = Math.floor((timeLeft % 60000) / 1000);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        console.log(`${minutes}:${seconds}`);
        const alertTime = `${seconds}`
        if(alertTime === `00`){
          console.log(`のこり${minutes}分です`);
        }
    }

    displayTimeLeft();

    const timerId = setInterval(displayTimeLeft, 1000); // 1秒ごとにカウントダウンする
}
