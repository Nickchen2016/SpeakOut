
console.log('Im here!')
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');
var distance = 0;

chrome.storage.sync.get('value',(data)=>{    
  document.getElementById('rateNum').innerHTML = data.value;
  document.getElementById('rate').value = data.value;
})


rate.onchange = function(){
  rateValue.textContent = rate.value;

  chrome.storage.sync.set({'value': rate.value}, ()=>console.log('Setting saved'));
}

chrome.storage.sync.get('allWords',(data)=>{  

  console.log(data.allWords);

  var slide = data.allWords.forEach((el)=>{

      document.getElementById('app').innerHTML += '<div class="slide">'+el[0]+'</div>';
  
  });

})

  document.getElementById('left').addEventListener('click',()=>{
    if(distance>-800 && distance<=0){
      distance-=200;
      document.getElementById('app').style.transform = `translateX(${distance}px)`;
    }else{
      distance=0;
      document.getElementById('app').style.transform = `translateX(${distance}px)`;
    }
    console.log('-----------',distance);
  });

  document.getElementById('right').addEventListener('click',()=>{
    if(distance>=-800 && distance<0){
      distance+=200;
      document.getElementById('app').style.transform = `translateX(${distance}px)`;
    }else{
      distance-=800;
      document.getElementById('app').style.transform = `translateX(${distance}px)`;
    }
    console.log(distance);
  });

