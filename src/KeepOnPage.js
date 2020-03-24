export function KeepOnPage() {
  window.addEventListener("beforeunload", event => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = "";
  });
  window.onbeforeunload = function() {
    //Chromeでは動かない.デフォルトの文言が表示される.
    return "編集中です。本当に他のページに移動しますか?";
  };
}
