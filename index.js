(function() {
  let emojiMap = {
    'thinking_face': '🤔',
    'yoshiko': '😈'
  };
  function replaceWithEmoji() {
    console.log('key pressed');
    setTimeout(() => {
      let textbox = document.getElementById('tweet-box-home-timeline');
      if (!textbox) return;
      innerhtml = textbox.innerHTML;
      emojiCandidate = innerhtml.match(/:[a-zA-Z0-9_]+:/g);
      if (emojiCandidate) {
        emojiCandidate.forEach(_emoji => {
          let emoji = _emoji.slice(1, -1)
          if (emojiMap[emoji]) {
            innerhtml = innerhtml.replace(_emoji, emojiMap[emoji]);
          }
        });
        textbox.innerHTML = innerhtml;
        textbox.selectionEnd = innerhtml.length;
      }
    }, 50);
  }
  document.addEventListener('keypress', replaceWithEmoji);
})();
