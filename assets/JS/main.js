let majorCodeEl = document.querySelector("#majorCode")
let majorCodeBtn = document.querySelector("#firstbutton")
let majorCodeDiv = document.querySelector("#majorCodeDiv")
let sec1 = document.querySelector('#sec1')
let formEl = document.querySelector('#formEl')

let styleEl = document.querySelector('#styleEl')
let finishingEl = document.querySelector('#finishingEl')
let attributesEl = document.querySelector('#attributesEl')
let additonalAttributesEl = document.querySelector('#additonalAttributesEl')
let goldKtEl = document.querySelector('#goldKtEl')
let goldColorEl = document.querySelector('#goldColorEl')
let diamondColorClarEl = document.querySelector('#diamondColorClarEl')
let diamondCaratEl = document.querySelector('#diamondCaratEl')
let adjEl = document.querySelector('#adjEl')

let adjectiveSe = document.querySelector('#adjective')
let styleSe = document.querySelector('#style')
let finishingSe = document.querySelector('#finishing')
let attributesSe = document.querySelector('#attributes')
let additonalAttributesSe = document.querySelector('#additonalAttributes')
let goldColorSe = document.querySelector('#goldColor')
let goldKtSe = document.querySelector('#goldKt')
let diamondColorClarSe = document.querySelector('#diamondColorClar')








majorCodeBtn.addEventListener("click", function (event) {
    event.preventDefault()

    majorCodeDiv.classList.add('hide')
    console.log(majorCodeEl.value)

    if (majorCodeEl.value === '1-18') {
        styleEl.classList.remove('hide')
        finishingEl.classList.remove('hide')
        attributesEl.classList.remove('hide')
        additonalAttributesEl.classList.remove('hide')
        goldKtEl.classList.remove('hide')
        goldColorEl.classList.remove('hide')
        adjEl.classList.remove('hide')
        necklaceSet()
    }
    if (majorCodeEl.value === '301-307') {
        styleEl.classList.remove('hide')
        attributesEl.classList.remove('hide')
        additonalAttributesEl.classList.remove('hide')
        goldKtEl.classList.remove('hide')
        goldColorEl.classList.remove('hide')
        diamondColorClarEl.classList.remove('hide')
        diamondCaratEl.classList.remove('hide')
        diamondNecklaceSet()
    }

})

function necklaceSet() {
    console.log('1-18')
    formEl.classList.remove('hide')

    let adjectives = ['Magnificent', 'Ornamental', 'Elegant', 'Exquisite', 'Hand-crafted', 'Artisan', 'Detailed', 'Distinctive', 'Ornate', 'Sophisticated', 'Subtle', 'Classic', 'Artistic', 'Beautiful', 'Elegant', 'Classic', 'Graceful', 'Lovely', 'Intricate', 'Brilliant', 'Alluring', 'Captivating', 'Stunning', 'Mesmerizing', 'Intriguing', 'Fascinating', 'Opulent', 'Glamorous', 'Endearing', 'Attractive', 'Charming', 'Enchanting', 'Delightful', 'Ravishing', 'Precious', 'Artistic', 'Gorgeous']
    for (let i = 0; i < adjectives.length; i++){
    adjectiveSe.innerHTML += `<option value="${adjectives[i]}" >${adjectives[i]}</option>`
    }

    let Styles = ['Necklace Set', 'Choker Set', 'Patta Haaram', 'Choker', 'Necklace']
    for (let i = 0; i < Styles.length; i++){
    styleSe.innerHTML += `<option value="${Styles[i]}" >${Styles[i]}</option>`
    }

    let finishing = ['Two tone', 'Three tone', 'Antique']
    for (let i = 0; i < finishing.length; i++){
    finishingSe.innerHTML += `<option value="${finishing[i]}" >${finishing[i]}</option>`
    }

    let attributes = ['Hansli', 'Kasu', 'Laxmi', 'Ram Parivar', 'Ganesh', 'Two-in-One', 'Three-in-one', 'Navratan']
    for (let i = 0; i < attributes.length; i++){
    attributesSe.innerHTML += `<option value="${attributes[i]}" >${attributes[i]}</option>`
    }

    let additonalAttributes = ['Minakari', 'Gemstones', 'Kundan Gemstones', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'Tourmaline']
    for (let i = 0; i < additonalAttributes.length; i++){
    additonalAttributesSe.innerHTML += `<option value="${additonalAttributes[i]}" >${additonalAttributes[i]}</option>`
    }

    let goldKt = ['18K', '22K']
    for (let i = 0; i < goldKt.length; i++){
    goldKtSe.innerHTML += `<option value="in ${goldKt[i]}" >${goldKt[i]}</option>`
    }

    let goldColor = ['Yellow Gold', 'Rose Gold', 'White Gold']
    for (let i = 0; i < goldColor.length; i++){
    goldColorSe.innerHTML += `<option value="${goldColor[i]}" >${goldColor[i]}</option>`
    }

    let formsubmitbtn = document.querySelector('#secondbutton')
    
    formsubmitbtn.addEventListener('click', function (e) {
    e.preventDefault()
         let addattr = additonalAttributesSe.selectedOptions;
         let addattrvals = Array.from(addattr).map(({ value }) => value);

        if (styleSe.value && goldColorSe && goldKtSe.value) { 
            let jewelryinfo = []
            if(adjectiveSe.value) {jewelryinfo.push(adjectiveSe.value)}
            if(finishingSe.value) {jewelryinfo.push(finishingSe.value)}
            if(attributesSe.value) {jewelryinfo.push(attributesSe.value)}
            if(styleSe.value) {jewelryinfo.push(styleSe.value)}

            if(addattrvals.length <=  3){
                if(addattrvals[0] === '') {
                
                } else if (addattrvals.length === 1){
                    jewelryinfo.push('with ' + addattrvals[0])
                }
                else if (addattrvals.length === 2){
                    jewelryinfo.push('with ' + addattrvals[0] + ' & ' + addattrvals[1])
                }
                else if (addattrvals.length === 3){
                    jewelryinfo.push('with ' + addattrvals[0] + ', ' + addattrvals[1] + ' & ' + addattrvals[2])
                }
            }else{
                alert('You have select more then 3 additional attributes, So no additional attributes have been added to the description.')
            }

            if(goldKtSe.value) {jewelryinfo.push(goldKtSe.value)}
            if(goldColorSe.value === 'Yellow Gold') { jewelryinfo.push('Gold') } else { jewelryinfo.push(goldColorSe.value) }
            
            document.querySelector('#createddesc').classList.remove('hide')
            let readydesc = document.querySelector('#readydesc')
            readydesc.value = jewelryinfo.join(' ')
        } else {
            alert("Please fill out all the required fields marked as '*' ")
        }
    })

    document.querySelector('#copydesc').addEventListener('click', function (e) {
        e.preventDefault()

        var descbody = document.querySelector("#readydesc");

        descbody.select();

        navigator.clipboard.writeText(descbody.value);
        
    })

}

function diamondNecklaceSet() {
    console.log('301-307')

    formEl.classList.remove('hide')

    

    let Styles = ['Necklace Set', 'Choker Set', 'Patta Haaram', 'Choker', 'Necklace']
    for (let i = 0; i < Styles.length; i++){
    styleSe.innerHTML += `<option value="${Styles[i]}" >${Styles[i]}</option>`
    }

    let attributes = ['Tennis','Solitaire', 'Antique', 'Detachable', 'Navratan']
    for (let i = 0; i < attributes.length; i++){
    attributesSe.innerHTML += `<option value="${attributes[i]}" >${attributes[i]}</option>`
    }

    let additonalAttributes = ['Minakari', 'Gemstones', 'Changeable Gemstones', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'Tourmaline']
    for (let i = 0; i < additonalAttributes.length; i++){
    additonalAttributesSe.innerHTML += `<option value="${additonalAttributes[i]}" >${additonalAttributes[i]}</option>`
    }

    let goldKt = ['18K', '22K']
    for (let i = 0; i < goldKt.length; i++){
    goldKtSe.innerHTML += `<option value="in ${goldKt[i]}" >${goldKt[i]}</option>`
    }

    let goldColor = ['Yellow Gold', 'Rose Gold', 'White Gold']
    for (let i = 0; i < goldColor.length; i++){
    goldColorSe.innerHTML += `<option value="${goldColor[i]}" >${goldColor[i]}</option>`
    }

    let diamondColorClarity=["IF/D", "IF/E", "IF/F", "IF/G", "IF/H", "IF/I", "IF/J", "IF/K", "IF/EF", "IF/FG", "IF/GH", "IF/HI", "VS/D", "VS/E", "VS/F", "VS/G", "VS/H", "VS/I", "VS/J", "VS/K", "VS/EF", "VS/FG", "VS/GH", "VS/HI", "VS1/D", "VS1/E", "VS1/F", "VS1/G", "VS1/H", "VS1/I", "VS1/J", "VS1/K", "VS1/EF", "VS1/FG", "VS1/GH", "VS1/HI", "VS2/D", "VS2/E", "VS2/F", "VS2/G", "VS2/H", "VS2/I", "VS2/J", "VS2/K", "VS2/EF", "VS2/FG", "VS2/GH", "VS2/HI", "VVS/D", "VVS/E", "VVS/F", "VVS/G", "VVS/H", "VVS/I", "VVS/J", "VVS/K", "VVS/EF", "VVS/FG", "VVS/GH", "VVS/HI", "VVS1/D", "VVS1/E", "VVS1/F", "VVS1/G", "VVS1/H", "VVS1/I", "VVS1/J", "VVS1/K", "VVS1/EF","VVS1/FG", "VVS1/GH", "VVS1/HI", "VVS2/D", "VVS2/E", "VVS2/F", "VVS2/G", "VVS2/H", "VVS2/I", "VVS2/J", "VVS2/K", "VVS2/EF", "VVS2/FG", "VVS2/GH", "VVS2/HI", "SI/D", "SI/E", "SI/F", "SI/G", "SI/H", "SI/I", "SI/J", "SI/K", "SI/EF", "SI/FG", "SI/GH", "SI/HI", "SI1/D", "SI1/E", "SI1/F", "SI1/G", "SI1/H", "SI1/I", "SI1/J", "SI1/K", "SI1/EF", "SI1/FG", "SI1/GH", "SI1/HI", "SI2/D", "SI2/E", "SI2/F", "SI2/G", "SI2/H", "SI2/I", "SI2/J", "SI2/K", "SI2/EF", "SI2/FG", "SI2/GH", "SI2/HI", "VVS-VS/D", "VVS-VS/E", "VVS-VS/F", "VVS-VS/G", "VVS-VS/H", "VVS-VS/I", "VVS-VS/J", "VVS-VS/K", "VVS-VS/EF", "VVS-VS/FG", "VVS-VS/GH", "VVS-VS/HI", "VS-SI/D", "VS-SI/E", "VS-SI/F", "VS-SI/G", "VS-SI/H", "VS-SI/I", "VS-SI/J", "VS-SI/K", "VS-SI/EF", "VS-SI/FG", "VS-SI/GH", "VS-SI/HI", "FL/D", "FL/E", "FL/F", "FL/G", "FL/H", "FL/I", "FL/J", "FL/K", "FL/EF", "FL/FG", "FL/GH", "FL/HI"];
    for (let i = 0; i < diamondColorClarity.length; i++){
    diamondColorClarSe.innerHTML += `<option value="${diamondColorClarity[i]} Diamond" >${diamondColorClarity[i]}</option>`
    }

    document.querySelector('#secondbutton').addEventListener('click',function(e) {
        e.preventDefault()
        let addattr = additonalAttributesSe.selectedOptions;
        let addattrvals = Array.from(addattr).map(({ value }) => value);

        if (diamondColorClarSe.value && document.querySelector('#diamondCarat').value && styleSe.value && goldKtSe.value && goldColorSe.value) {
            let jewelryinfo = []
            if (document.querySelector('#diamondCarat').value) { jewelryinfo.push(document.querySelector('#diamondCarat').value + 'CTW') }
            if (diamondColorClarSe.value) { jewelryinfo.push(diamondColorClarSe.value) }
            if (attributesSe.value) { jewelryinfo.push(attributesSe.value) }
            if (styleSe.value) { jewelryinfo.push(styleSe.value) }
            if(addattrvals.length <=  3){
                if(addattrvals[0] === '') {
                
                } else if (addattrvals.length === 1){
                    jewelryinfo.push('with ' + addattrvals[0])
                }
                else if (addattrvals.length === 2){
                    jewelryinfo.push('with ' + addattrvals[0] + ' & ' + addattrvals[1])
                }
                else if (addattrvals.length === 3){
                    jewelryinfo.push('with ' + addattrvals[0] + ', ' + addattrvals[1] + ' & ' + addattrvals[2])
                }
            }else{
                alert('You have select more then 3 additional attributes, So no additional attributes have been added to the description.')
            }
            if (goldKtSe.value) { jewelryinfo.push(goldKtSe.value) }
            if (goldColorSe.value === 'Yellow Gold') { jewelryinfo.push('Gold') } else { jewelryinfo.push(goldColorSe.value) }
    
    
            document.querySelector('#createddesc').classList.remove('hide')
            let readydesc = document.querySelector('#readydesc')
            readydesc.value = jewelryinfo.join(' ')
        } else { 
            alert("Please fill out all the required fields marked as '*' ")
        }

    })

    document.querySelector('#copydesc').addEventListener('click', function (e) {
        e.preventDefault()

        var descbody = document.querySelector("#readydesc");

        descbody.select();

        navigator.clipboard.writeText(descbody.value);
        
    })
}

function pendantSet() {
}

function diamondPendantSet() {
}