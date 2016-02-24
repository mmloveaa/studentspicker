'use strict';

var getName=[];
var list = document.getElementById("nameList")
var randomDiv = document.getElementById("randomStudent")
var p = document.createElement('h1')
var randomizedArr=[];
var groupByNum = document.getElementById("groupNum")

document.addEventListener('DOMContentLoaded',init);

	function init(){
		// console.log("hey")
		document.querySelector('#addButton').addEventListener('click', function(){
			// console.log("add button is working")
			getName.push(document.getElementsByTagName('input')[0].value);
			// console.log(getName);
			// console.log("type of", Array.isArray(getName))
			// list.push(getName.split(","))
			// console.log(list)
			getName=getName.toString()
			// console.log(getName)
			// console.log(typeof(getName))
			// console.log(getName.split(","))

			getName=(getName.split(","))
			// console.log("after split", getName)

			getName.forEach(function(e){
				// console.log(e)
				var li = document.createElement('li')
				li.textContent = e
				list.appendChild(li)
				getName = [];
			});	

			document.getElementById('getName').value=""

		});


		document.querySelector('#randomButton').addEventListener('click', function(){
				var randN = list.getElementsByTagName("li");
				// console.log("randN", randN)
				// console.log(randN[Math.floor(Math.random()*randN.length)]);
				var randomPerson =randN[Math.floor(Math.random()*randN.length)];
				// console.log("random Person", randomPerson.innerHTML)
				
				p.textContent = randomPerson.innerHTML
				randomDiv.appendChild(p)
				// console.log(randomPerson)
		});

		document.querySelector("#groupButton").addEventListener('click', function(){
			console.log("It is clicking!")
			console.log("groupByNum", groupByNum.value)
				
		});
		

	}		



		