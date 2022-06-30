<template>
	<view >
		<canvas class="canvas" canvas-id="canvas" style="border: 1px solid green; " ></canvas>
	</view>
</template>

<script>

export default {
   data() {
      return {
				
      }
   },
   computed:{
   },
   methods:{
		 initcanvas() {
			 const can = uni.createCanvasContext('canvas',this)
			 can.fillStyle = 'red'
			 can.fillText("测试文字,70,70")
			 setTimeout(function() {
				 can.fill()
				 can.draw()
			 },200)
		 }
   },
	 onReady() {
		 this.initcanvas()
	 }
}
</script>


<style>
.canvas {
	height: 2rem;
	width: 9rem;
}
</style>
