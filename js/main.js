window.onload=function(){
				var vm = new Vue({
				// 选项
				el: '#app',
				data: {
				  message: 'Hello Vuedsds!'
				},
				
				methods:{
					reverseMessage:function(){
						this.message = this.message.split('').reverse().join('')
					}
				}
			
				
				
			})
			}