async function getSurah(){
    let list = document.getElementById('surahName');
    let surahDesc = document.getElementById('surah');

    surahDesc.innerHTML = '';
    list.innerHTML = '';

    let data = await fetch('order.json');
    let res = await data.json();
    for (let i = 0; i <= res.length; i++) {
        list.innerHTML = list.innerHTML + `
            <li> <button type="button" onclick="getDetail('${res[i].number - 1}')">${res[i].name_ar} ${res[i].name_en}</button></li>
        `;
        // <a href=''>${res[i].name_ar} ${res[i].name_en}</a>
    }

}

async function getDetail(number) {
    
}


/*
0
: 
filename
: 
"audios/1.Al-Fatihah.mp3"
name-ar
: 
"الفاتحة"
name-en
: 
"Al-Fatihah"
number
: 
1

*/