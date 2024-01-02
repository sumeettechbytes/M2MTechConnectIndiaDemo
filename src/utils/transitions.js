        
export function transitionIn(elementId) {
  let TransitionIn = document.getElementById(elementId);
  TransitionIn.style.left = 0;
  TransitionIn.style.opacity = 1;
}
  
export function transitionOut(elementId) {
  let TransitionOut = document.getElementById(elementId);
  TransitionOut.style.left = "-100px";
  TransitionOut.style.opacity = 0;
}

export function transitionBack(elementId, callback1, callback2) {
  let TransitionBack = document?.getElementById(elementId);
  TransitionBack.style.left = "-100px";
  TransitionBack.style.opacity = 0;
  setTimeout(() => {
    callback1(false);
    callback2(true);
  }, 300)
}