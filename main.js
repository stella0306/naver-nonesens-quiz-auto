// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-03-06
// @description  try to take over the world!
// @author       You
// @match        https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EB%84%8C%EC%84%BC%EC%8A%A4+%ED%80%B4%EC%A6%88&oquery=%EB%84%A4%EC%9D%B4%EB%B2%84+%EB%A7%9E%EC%B6%A4%EB%B2%95+%EA%B2%80%EC%82%AC%EA%B8%B0&tqi=i8DxowpzLiwssOFltD4ssssst38-046380
// @icon         https://www.google.com/s2/favicons?sz=64&domain=naver.com
// @grant        none
// ==/UserScript==


'use strict';
let total = document.querySelector("#main_pack > section.sc_new.cs_nonsense._cs_nonsense > div > div.api_cs_wrap > div > div.paging_area > div > span > span._total");
let totalQuizzes = parseInt(total.textContent);

for (let index = 0; index < totalQuizzes; index++) {
    setTimeout(() => {
        // 각 반복에서 요소를 다시 선택
        let answer_input = document.querySelector("#quiz_wt");
        let answer_text = document.querySelector("#main_pack > section.sc_new.cs_nonsense._cs_nonsense > div > div.api_cs_wrap > div > div.nonesens_flick._panel > div.ns_answer > div._answer.ns_answer_area > div.nonsense_answer._img > span")
        let quiz_btn = document.querySelector("#main_pack > section.sc_new.cs_nonsense._cs_nonsense > div > div.api_cs_wrap > div > div.nonesens_flick._panel > div.ns_answer > span > a");
        let next_quiz_btn = document.querySelector("#main_pack > section.sc_new.cs_nonsense._cs_nonsense > div > div.api_cs_wrap > div > div.paging_area > div > a.spnew_bf.cmm_pg_next.on");

        answer_input.value = answer_text.textContent;
        console.log(answer_text.textContent);

        // 정답 확인 버튼 클릭에 대한 추가 지연
        setTimeout(() => {
            quiz_btn.click();
        }, 2000); // 2초 후 클릭

        // 다음 퀴즈 버튼 클릭에 대한 추가 지연
        setTimeout(() => {
            next_quiz_btn.click();
        }, 4000); // 4초 후 클릭

    }, index * 6000); // 각 퀴즈 응답 후 6초 간격으로 실행
}

