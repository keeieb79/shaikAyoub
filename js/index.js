let surahs = []

async function getSurah(){
    let list = document.getElementById('surahName');
    
    list.innerHTML = '';

    let data = await fetch('order.json');
    let res = await data.json();
    
    
    for (let i = 0; i <= res.length; i++) {
        surahs.push(res[i]);

        list.innerHTML = list.innerHTML + `
            <li> <button type="button" onclick="getDetail('${res[i].number - 1}')">${res[i].name_ar} ${res[i].name_en}</button></li>
        `;
    }

}

async function getDetail(number) {
    let surahDesc = document.getElementById('innerSurah');
    surahDesc.innerHTML = '';

    surahDesc.innerHTML = surahDesc.innerHTML + `
        <p class="surahTitle">سورة ${surahs[number].name_ar} Surah ${surahs[number].name_en}</p>                
        
        <p class="surahDesc">${surahs[number].desc}</p>
                
        <audio class="surahAudio" controls loop>
            <source src="${surahs[number].filename}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;



}

/*

  {
    "number": 1,
    "name_en": "Al-Fatihah",
    "name_ar": "الفاتحة",
    "filename": "audios/1.Al-Fatihah.mp3",
    "desc": "سورة مكية، عدد آياتها 7. هي فاتحة الكتاب وأم القرآن، تُقرأ في كل ركعة من الصلاة."
  },

*/