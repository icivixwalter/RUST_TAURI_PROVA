import { invoke } from '@tauri-apps/api';
import { Event as TauriEvent, listen } from '@tauri-apps/api/event';
const $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", async function () {
  // get the elements
  const helloEl = $("div.hello") as HTMLElement;
  const counterButtonEl = $("counter-button2.add") as HTMLElement; // . = classe css @INCREMENTA
  const counterResultEl = $("counter-result") as HTMLElement;
  const myButton = $("button#sub") as HTMLElement; // # = id css  @DECREMENTA
  const pingEl = $("backend-ping") as HTMLElement;

  // listen backend-ping event
  listen("backend-ping", function (evt: TauriEvent<any>) {
    pingEl.classList.add("on");
    setTimeout(function () {
      pingEl.classList.remove("on")
    }, 500);
  })

  // counter button click - somma @INCREMENTO
  counterButtonEl.addEventListener("pointerup", async function () {
    const result = await invoke("add_count", { num: 3 }) as string;
    counterResultEl.textContent = result;
  });

  //nuovo bottone in sottrazione  @nuovo.bottone @DECREMENTA
  myButton.addEventListener("pointerup", async function () {
    const result = await invoke("sub_count", { num: 3 }) as string;
    counterResultEl.textContent = result;
  });

  // hello click
  helloEl.addEventListener("pointerup", async function () {
    const result = await invoke("hello_world") as string;
    helloEl.textContent = result;
    setTimeout(function () {
      helloEl.textContent = "Click again";
    }, 1000);
  });

});