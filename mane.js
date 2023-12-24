//عملت تيكست فيها الكلام وحولت الكلام في مصفوفه 

let test = "توؤةهياصأبتثجحخدذرزسشضطظكغعقفئلمن"

let testarry = Array.from(test .trim())

console.log(testarry);

// استدعيت العنصلر الي في الصفحه 
let letars = document.querySelector('.letars')
// المصفوفه الي فيها الاحرف عملت فور اتش عليها وجواها فنكشن والفنكشن دي مررت ليها متغير وجواهم انشات اسبان وحطيت جواه المتغير بتاع الفنكشن علي يكت فيها 
testarry.forEach( function(r) {

let span = document.createElement('samp')

let textspan = document.createTextNode(r)

span.appendChild(textspan)

span.className = 'spanbox'

letars.appendChild(span)

})



// // دي لما ادوس علي الحرف يغير لونه وميخلنيش ادوس عليه تاني 
// document.addEventListener('click',function(e){

//     if(e.target.className ==="spanbox" ){

//         e.target.classList.add("onclick")
//         let clicktext = e.target.innerHTML.toUpperCase() // رجعلي 
//         console.log(clicktext);
// }
// })

// 



let target = {
   auktob_asm_wald:['أبانوب','محسن','ماريو','ملاك','مكاريوس','أبرأهيم'],
   auktob_asm_bant:['مارلين','مارينا','مريم','مارفان','يوستينا','الفت','ماري','منار'],
   auktob_asma_dawla:['مصر','دبي','تونس','امريكا','الصين','اليبن','السودان','الكويت'],
   auktob_asm_haywam :['بقر','قطه','كلب','اسد','دوب','فرص','عجل']
}

let allkeys = Object.keys(target)// دي هتجيب اسماء الابجكت بس وممكن لو عايز الفالو اقول بدل الكيف فالي هتديب القيم بتعتهم
let allkeys_nmbrs = Math.floor(Math.random()*allkeys.length)// دي هتجيب رقم عشواي من الاربع متغيرات دول الي في الابجكت 
let allkeys_name = allkeys[allkeys_nmbrs];// دي هتجيب اسم متغير واحد عشواي من الاربع متغيرات الي في الابجكت 

let target_value =target[allkeys_name]  // دي هتجيب اسماء الفاليو كلها الي في المتغير الي هتجيبه عشواي 

let target_value_nmbar = Math.floor(Math.random()*target_value.length) // دي هتجيب فاللو عشواي من مجموع الفالو الي هتجيبه  


let target_value_name =target_value[target_value_nmbar]// دي هتجيب فالو الي فالو يعني هتديب الاسم نفسه من الاسماء دي كلها 

//
console.log(target_value_name);
let target_value_name_letr =target_value_name.length// دي هتجيب الاسم من كام حرف 
let categore = document.querySelector('.categore .sp')// 

categore.innerHTML = `  ${allkeys_name} men ${target_value_name_letr} hrof ? `// حطانه ي الصفحه اسم المتغير العشواي الي جاي والاسم نفسه من كام حرف
console.log(target_value_name_letr);
console.log(target_value_name);
console.log(target_value);




//  هنا هعمل هنشاء الاسبان بنيابن علي الكلمه العشوايه الي جايه وعدد حروفها كام يعني لكل حرف هعمل اسبان 

let letars_guess = document.querySelector('.letars-guess ')

target_value_name_letr= Array.from(target_value_name) // الاسم الي طلع العدد بتاعهم تعملي عليه مصفوفه بعددهم

console.log(target_value_name_letr);
target_value_name_letr.forEach(function(r){

    let span = document.createElement('span')

    // let text = document.createTextNode(r)

    // span.appendChild(text)

    span.classList ='sp'

    letars_guess.appendChild(span)
})

let letars_guess_span = document.querySelectorAll('.letars-guess span') //دي الي الاسبان الي فاضي الي هكتب فيه الحروف
console.log(letars_guess_span);


let folsshack =0 // دي هيبدا من الصفر عدد الغلطات وكل م يغلط في الدوسه يزود واحد
let hangem_draw= document.querySelector('.hangem-draw')// دي استدعيت المكان الي هيظهر فيه عدد الغلطات




// دي لما ادوس علي الحرف يغير لونه وميخلنيش ادوس عليه تاني ويرجعلي قيمته 
document.addEventListener('click',function(e){
    let shack = false; // ده متغير وهمي هعتمد عليه لو عمل صح هخليه ترو لو عمل غلط يبقا فلص زي م هو


    if(e.target.className ==="spanbox" ){
        e.target.classList.add("onclick")
        let clicktext = e.target.innerHTML.toUpperCase() // رجعلي قيمت العنصر الي دوست عليه 
        console.log(clicktext);


        let valuename = Array.from(target_value_name.toUpperCase()) // استدعيت الاسم وحولته لي مصفوفه هنا تاني

        valuename.forEach(function(e,i){ // الكلمه وهي متحوله لي فور اصلا وهنا بعمل عليها فور تاني 
// e دي العنصر نفسه اما الاي دي اندكسها الكام
            if(clicktext==e){ //لو الحرف الي هدوس عليه = حرف من الكلمه اعملي 
                letars_guess_span.forEach(function(s,iii){// الاسبان الي هيتحط فيها الحروف اعملي فور اتش عليها الاس دي العنصر اما الاي دي رقم العنصر

                    if(i==iii){// لو رقم العنصر بتاع الكلمه = رقم العنصر بتاع الي هتتحط فيها اعملي 
                        s.innerHTML=clicktext // ضيفلي في العنصر نفسه الي هدوس عليه في الحروف الي من فوق
                        shack = true //المتغير الي عرفته فوق بدل م هو فوص خليه ترو
                    }
                })

            }
        })
        // ده كله بره الفور
console.log(shack);
if(shack !== true){ // لو هو مش صح اعملي 
folsshack++
hangem_draw.classList.add(`worng-${folsshack}`) // ده الكلاس الي في الصفحه كلها 

console.log( hangem_draw);

let game_name = document.querySelector('.game-name')
console.log(game_name);

game_name.innerHTML = folsshack
// document.getElementById('on').play()

if(folsshack ===8){
    letars.classList.add('onclick')
    // gemofar()
    document.getElementById('autofols').play()
}
}else{ //لو هو صح اعملي 
    // document.getElementById('zhrota').play()

}


    }
})

function gemofar(){
    let dev = document.createElement('div')

    let text = document.createTextNode('gemofar')
    dev.appendChild(text)

    dev.className='gemofar'
console.log(dev);
    dev.style.cssText = ''
    let row = document.querySelector('.row')
    row.appendChild(dev)
}
// gemofar()

let aa = {
    a:'kkk',
    f:'iii',
    y:'kkk'
}

console.log(aa);
console.log(aa.f);
let q=JSON.stringify(aa)
console.log(q);
let ss =JSON.parse(q)
console.log(ss);